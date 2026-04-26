"use client"
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

export default function checkout() {

    const { error, isLoading, Razorpay } = useRazorpay();
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;

    const placeOrder = (e) => {
        e.preventDefault();

        const dataSave = {
            total_amount: 5000,
            discount_amount: 1000,
            net_amount: 4000,
            shipping_address: { name: 'test' },
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
            name: e.target.name.value
        }

        axios.post(`${apiBaseUrl}/user/order-place`, dataSave, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('user_login')}`
            }
        })
            .then((result) => {
                handlePayment(result.data._orderInfo)
                // toast.success('Order Placed')
                // if (res.data._status) {
                //     setUserProfile(res.data._userProfile)
                //     setSelectedTitle(res.data._userProfile.gender)
                // }
                // else {
                //     toast.error(res.data._message)
                // }
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
    }


    const handlePayment = (orderInfo) => {
        const options = {
            key: "rzp_test_WAft3lA6ly3OBc",
            amount: orderInfo.net_amount * 100, // Amount in paise
            currency: "INR",
            name: "Monsta Furniture Shop",
            description: "Test Transaction",
            order_id: orderInfo.id, // Generate order_id on server
            handler: (response) => {
                console.log("Payment Success");
                console.log("Order ID:", response.razorpay_order_id);
                console.log("Payment ID:", response.razorpay_payment_id);
                console.log("Signature:", response.razorpay_signature);

                orderStatusChange(
                    response.razorpay_payment_id,
                    response.razorpay_order_id
                );

                // alert("Payment Successful!");
            },
            prefill: {
                name: "John Doe",
                email: "john.doe@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpayInstance = new Razorpay(options);

        razorpayInstance.on("payment.failed", function (response) {
            console.log("Payment Failed");
            console.log("FULL RESPONSE:", response);

            orderStatusChange(
                response.error.metadata.payment_id,
                response.error.metadata.order_id
            );
        });

        razorpayInstance.open();
    };

    const orderStatusChange = (payment_id, order_id) => {
        // e.preventDefault();

        const dataSave = {
            payment_id: payment_id,
            order_id: order_id,
        }

        axios.post(`${apiBaseUrl}/user/order-status-change`, dataSave, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('user_login')}`
            }
        })
            .then((result) => {
                if (result.data._data.payment_status == 2) { toast.success('Order Placed') }
                else {
                    toast.error('Payment failed !!');
                }
            })
            .catch((error) => {
                toast.error("Something went wrong")
                console.log(error.response.data);
                
            })
    }

    return (
        <div className='max-w-[1320px] mx-auto py-10'>
            <Breadcrumb title={"Checkout"} />
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* LEFT */}
                <form
                    onSubmit={placeOrder}
                    className="md:col-span-2 bg-white p-6 rounded-lg shadow space-y-5"
                >
                    <h2 className="text-2xl font-semibold">Billing Details</h2>

                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium">Name *</label>
                        <input name="name" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block mb-1 font-medium">Mobile Number *</label>
                        <input name="mobile_number" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Billing Name */}
                    <div>
                        <label className="block mb-1 font-medium">Billing Name *</label>
                        <input name="billingName" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Billing Email */}
                    <div>
                        <label className="block mb-1 font-medium">Billing Email *</label>
                        <input name="billingEmail" type="email" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Billing Mobile */}
                    <div>
                        <label className="block mb-1 font-medium">Billing Mobile Number *</label>
                        <input name="billingMobile" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 font-medium">Billing Address *</label>
                        <textarea name="billingAddress" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block mb-1 font-medium">Country *</label>
                        <input name="country" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block mb-1 font-medium">State *</label>
                        <input name="state" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* City */}
                    <div>
                        <label className="block mb-1 font-medium">City *</label>
                        <input name="city" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="shipDifferent" />
                        <label>Ship to a different address?</label>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block mb-1 font-medium">Order Notes</label>
                        <textarea name="notes" className="input w-full border rounded-sm p-2 outline-none" />
                    </div>

                    {/* Button */}
                    <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
                        Place Order
                    </button>
                </form>

                {/* RIGHT */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

                    <div className="border-b pb-3 mb-3">
                        <div className="flex justify-between gap-10">
                            <span>Evan Coffee Table × 1</span>
                            <span>Rs. 2,300</span>
                        </div>
                    </div>

                    <div className="space-y-2 border-b pb-3 mb-3">
                        <div className="flex justify-between">
                            <span>Cart Subtotal</span>
                            <span>Rs. 2,300</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount (-)</span>
                            <span>Rs. 0</span>
                        </div>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                        <span>Order Total</span>
                        <span>Rs. 2,300</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
