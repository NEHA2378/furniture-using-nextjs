"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { productData } from "@/app/(with-header)/Data/ProductData";
import { getCart, removeFromCart, updateCartQuantity } from "@/app/(with-header)/shopping-cart/cart";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCartCount } from "@/app/Redux Store/cartSlice";

export default function ShoppingCart() {

    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

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
                    _id: cartItem._id,
                    product_id: cartItem.product_id,
                    qty: cartItem.quantity ?? 1,
                    name: product?.name ?? "Unknown Product",
                    image: product?.image ?? "",
                    price: product?.price ?? 0,
                };
            });

            setCart(merged);
            dispatch(setCartCount(merged.reduce((sum, item) => sum + item.qty, 0)));

        } catch (error) {
            console.log(error);
            setCart([]);
            dispatch(setCartCount(0));
        }
    };

    const handleRemove = async (productId) => {
        try {
            await removeFromCart(productId);
            const updated = cart.filter((item) => Number(item.product_id) !== Number(productId)); // ✅ CHANGE
            setCart(updated);
            dispatch(setCartCount(updated.reduce((sum, item) => sum + item.qty, 0)));
        } catch (error) {
            console.log(error);
        }
    };

    const handleQtyChange = async (productId, qty) => {
        const newQty = Math.max(1, Number(qty));

        const updated = cart.map((item) => // ✅ CHANGE
            Number(item.product_id) === Number(productId)
                ? { ...item, qty: newQty }
                : item
        );
        setCart(updated);
        dispatch(setCartCount(updated.reduce((sum, item) => sum + item.qty, 0)));

        try {
            await updateCartQuantity(productId, newQty);
        } catch (error) {
            console.log("Failed to update quantity:", error);
            fetchCart(); // re-fetch to revert
        }
    };

    // rest of JSX stays exactly the same...

    // ---------------- CALCULATIONS ----------------
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="max-w-[1320px] mx-auto mb-10 overflow-x-auto">

            <Breadcrumb title={"My Shopping Cart"} />

            {cart.length === 0 ? (
                <div className="my-10 text-center">
                    <img
                        src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                        className="mx-auto"
                        alt=""
                    />
                    <p className="py-10">Your Shopping Cart is empty!</p>
                </div>
            ) : (
                <>
                    <div className="w-full overflow-x-auto p-4">
                        <table className="w-full border border-gray-300">

                            <thead className="border-b border-yellow-700 bg-amber-50">
                                <tr className="font-bold">
                                    <td className="p-3 text-center">Delete</td>
                                    <td className="p-3 text-center">Image</td>
                                    <td className="p-3 text-center">Product</td>
                                    <td className="p-3 text-center">Price</td>
                                    <td className="p-3 text-center">Quantity</td>
                                    <td className="p-3 text-center">Total</td>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item._id}>

                                        <td className="p-3 text-center border">
                                            <RiDeleteBin6Line
                                                className="mx-auto text-red-600 cursor-pointer"
                                                onClick={() => handleRemove(item.product_id)}
                                            />
                                        </td>

                                        <td className="p-3 text-center border">
                                            <img
                                                src={item.image}
                                                className="w-[120px] mx-auto object-contain"
                                                alt={item.name}
                                            />
                                        </td>

                                        <td className="p-3 text-center border">
                                            {item.name}
                                        </td>

                                        <td className="p-3 text-center border">
                                            ₹{item.price}
                                        </td>

                                        <td className="p-3 text-center border">
                                            <input
                                                type="number"
                                                min={1}
                                                className="border w-[60px] text-center"
                                                value={item.qty}
                                                onChange={(e) =>
                                                    handleQtyChange(item.product_id, e.target.value)
                                                }
                                            />
                                        </td>

                                        <td className="p-3 text-center border">
                                            ₹{item.price * item.qty}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="grid grid-cols-1 gap-4 mt-5 p-4 w-full">

                        {/* TOTALS */}
                        <div className="border p-4">
                            <div className="p-3 font-bold bg-black">
                                <h2 className="text-white uppercase">Cart Totals</h2>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between font-bold mb-3">
                                    <p>Subtotal</p>
                                    <p>₹{subtotal}</p>
                                </div>
                                <div className="flex justify-between font-bold mb-3">
                                    <p>Discount (-)</p>
                                    <p>₹0</p>
                                </div>
                                <div className="flex justify-between font-bold mb-3">
                                    <p>Total</p>
                                    <p>₹{subtotal}</p>
                                </div>
                                <div className="flex justify-end">
                                    <Link href={"/checkout"}>
                                        <button className="bg-yellow-700 text-white px-3 py-2 rounded-sm uppercase">
                                            Proceed to Checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </div>
    );
}