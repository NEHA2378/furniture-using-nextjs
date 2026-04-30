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
            const updated = cart.filter((item) => Number(item.product_id) !== Number(productId));
            setCart(updated);
            dispatch(setCartCount(updated.reduce((sum, item) => sum + item.qty, 0)));
        } catch (error) {
            console.log(error);
        }
    };

    const handleQtyChange = async (productId, qty) => {
        const newQty = Math.max(1, Number(qty));
        const updated = cart.map((item) =>
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
            fetchCart();
        }
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="max-w-[1320px] mx-auto mb-10 px-4">

            <Breadcrumb title={"My Shopping Cart"} />

            {cart.length === 0 ? (
                <div className="my-10 text-center">
                    <img
                        src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                        className="mx-auto w-[200px] sm:w-[300px]"
                        alt=""
                    />
                    <p className="py-10 text-gray-500">Your Shopping Cart is empty!</p>
                </div>
            ) : (
                <>
                    {/* ── DESKTOP TABLE (md and above) ── */}
                    <div className="hidden md:block w-full overflow-x-auto p-4">
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
                                                className="mx-auto text-red-600 cursor-pointer text-lg"
                                                onClick={() => handleRemove(item.product_id)}
                                            />
                                        </td>
                                        <td className="p-3 text-center border">
                                            <Link href={`/my-products/${item.product_id}`}>
                                                <img
                                                    src={item.image}
                                                    className="w-[120px] mx-auto object-contain"
                                                    alt={item.name}
                                                />
                                            </Link>
                                        </td>
                                        <td className="p-3 text-center border">{item.name}</td>
                                        <td className="p-3 text-center border">₹{item.price}</td>
                                        <td className="p-3 text-center border">
                                            <input
                                                type="number"
                                                min={1}
                                                className="border w-[60px] text-center"
                                                value={item.qty}
                                                onChange={(e) => handleQtyChange(item.product_id, e.target.value)}
                                            />
                                        </td>
                                        <td className="p-3 text-center border">₹{item.price * item.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ── MOBILE CARDS (below md) ── */}
                    <div className="flex flex-col gap-4 md:hidden mt-4">
                        {cart.map((item) => (
                            <div key={item._id} className="border border-gray-200 rounded-lg p-4 flex gap-4 shadow-sm">
                                <Link href={`/my-products/${item.product_id}`}>
                                    <img
                                        src={item.image}
                                        className="w-[80px] h-[80px] object-contain rounded"
                                        alt={item.name}
                                    />
                                </Link>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <p className="font-semibold text-sm">{item.name}</p>
                                        <RiDeleteBin6Line
                                            className="text-red-600 cursor-pointer text-lg shrink-0 ml-2"
                                            onClick={() => handleRemove(item.product_id)}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">Price: ₹{item.price}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <label className="text-sm font-medium">Qty:</label>
                                        <input
                                            type="number"
                                            min={1}
                                            className="border w-[60px] text-center text-sm p-1"
                                            value={item.qty}
                                            onChange={(e) => handleQtyChange(item.product_id, e.target.value)}
                                        />
                                    </div>
                                    <p className="text-sm font-bold mt-2">Total: ₹{item.price * item.qty}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── CART TOTALS ── */}
                    <div className="mt-6 p-4">
                        <div className="border p-4 w-full">
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
                                        <button className="bg-yellow-700 text-white px-3 py-2 rounded-sm uppercase w-full sm:w-auto">
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