"use client"
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRazorpay } from "react-razorpay";
import { getCart, removeFromCart } from '@/app/(with-header)/shopping-cart/cart';
import { productData } from '@/app/(with-header)/Data/ProductData';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Checkout() {

    const { Razorpay } = useRazorpay();
    const router = useRouter();
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    // ---------------- GET TOKEN ----------------
    const getToken = () => {
        const raw = Cookies.get("user_login");
        if (!raw) return null;
        try {
            return JSON.parse(raw)?.token || raw;
        } catch {
            return raw;
        }
    };

    // ---------------- FETCH CART ----------------
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const res = await getCart();
            const cartData = res?.data?.data ?? [];

            const merged = cartData.map((cartItem) => {
                const product = productData.find(
                    (p) => Number(p.id) === Number(cartItem.product_id)
                );
                return {
                    product_id: cartItem.product_id,
                    qty: cartItem.quantity ?? 1,
                    name: product?.name ?? "Unknown Product",
                    image: product?.image ?? "",
                    price: product?.price ?? 0,
                };
            });

            setCart(merged);
        } catch (error) {
            console.log(error);
        }
    };

    // ---------------- CALCULATIONS ----------------
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const discount = 0;
    const total = subtotal - discount;

    // ---------------- PLACE ORDER ----------------
    const placeOrder = async (e) => {
        e.preventDefault();
        const token = getToken();

        if (!token) {
            toast.error("Please login first");
            router.push("/login-register");
            return;
        }

        if (cart.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        const dataSave = {
            total_amount: subtotal,
            discount_amount: discount,
            net_amount: total,
            shipping_address: {
                name: e.target.name.value,
                mobile_number: e.target.mobile_number.value,
            },
            billing_address: {
                name: e.target.billingName.value,
                email: e.target.billingEmail.value,
                mobile_number: e.target.billingMobile.value,
                address: e.target.billingAddress.value,
                country: e.target.country.value,
                state: e.target.state.value,
                city: e.target.city.value,
            },
            mobile_number: e.target.mobile_number.value,
            name: e.target.name.value,
            product_info: cart.map((item) => ({
                product_id: item.product_id,
                name: item.name,
                quantity: item.qty,
                price: item.price,
                total: item.price * item.qty,
            })),
        };

        try {
            setLoading(true);
            const result = await axios.post(
                `${apiBaseUrl}/user/order-place`,
                dataSave,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            handlePayment(result.data._orderInfo, e.target, token);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- RAZORPAY ----------------
    const handlePayment = (orderInfo, formTarget, token) => {
        const options = {
            key: "rzp_test_WAft3lA6ly3OBc",
            amount: orderInfo.amount,         // already in paise from backend
            currency: "INR",
            name: "Monsta Furniture Shop",
            description: "Furniture Order",
            order_id: orderInfo.id,
            handler: (response) => {
                orderStatusChange(
                    response.razorpay_payment_id,
                    response.razorpay_order_id,
                    token
                );
            },
            prefill: {
                name: formTarget.name.value,
                email: formTarget.billingEmail.value,
                contact: formTarget.mobile_number.value,
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpayInstance = new Razorpay(options);

        razorpayInstance.on("payment.failed", (response) => {
            orderStatusChange(
                response.error.metadata.payment_id,
                response.error.metadata.order_id,
                token
            );
        });

        razorpayInstance.open();
    };

    // ---------------- ORDER STATUS ----------------
    const orderStatusChange = async (payment_id, order_id, token) => {
        try {
            const result = await axios.post(
                `${apiBaseUrl}/user/order-status-change`,
                { payment_id, order_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (result.data._data?.payment_status === 2) {
                
                await Promise.all(
                    cart.map((item) => removeFromCart(item.product_id))
                );

                setCart([]);

                toast.success("Order Placed Successfully!");
                router.push("/");
            } else {
                toast.error("Payment failed. Please try again.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className='max-w-[1320px] mx-auto py-10'>
            <Breadcrumb title={"Checkout"} />
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* LEFT - FORM */}
                <form
                    onSubmit={placeOrder}
                    className="md:col-span-2 bg-white p-6 rounded-lg shadow space-y-5"
                >
                    <h2 className="text-2xl font-semibold">Your Complete Address</h2>

                    <div>
                        <label className="block mb-1 font-medium">Name *</label>
                        <input required name="name" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Mobile Number *</label>
                        <input required name="mobile_number" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Billing Name *</label>
                        <input required name="billingName" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Billing Email *</label>
                        <input required name="billingEmail" type="email" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Billing Mobile Number *</label>
                        <input required name="billingMobile" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Billing Address *</label>
                        <textarea required name="billingAddress" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Country *</label>
                        <input required name="country" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">State *</label>
                        <input required name="state" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">City *</label>
                        <input required name="city" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Order Notes</label>
                        <textarea name="notes" className="w-full border rounded-sm p-2 outline-none" />
                    </div>

                    <button
                        type="submit"
                        disabled={loading || cart.length === 0}
                        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 disabled:opacity-50"
                    >
                        {loading ? "Placing Order..." : "Place Order"}
                    </button>
                </form>

                {/* RIGHT - ORDER SUMMARY */}
                <div className="bg-white p-6 rounded-lg shadow h-fit">
                    <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

                    {/* Cart Items */}
                    <div className="border-b pb-3 mb-3 space-y-2">
                        {cart.length === 0 ? (
                            <p className="text-gray-500 text-sm">No items in cart</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.product_id} className="flex justify-between gap-4 text-sm">
                                    <span>{item.name} × {item.qty}</span>
                                    <span>₹{item.price * item.qty}</span>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Totals */}
                    <div className="space-y-2 border-b pb-3 mb-3">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount (-)</span>
                            <span>₹{discount}</span>
                        </div>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                        <span>Order Total</span>
                        <span>₹{total}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}