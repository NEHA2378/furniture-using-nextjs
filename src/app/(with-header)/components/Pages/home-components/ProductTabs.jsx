"use client";

import React, { useEffect, useMemo, useState } from "react";
import { productData } from "@/app/(with-header)/Data/ProductData";
import Link from "next/link";
import { toast } from "react-toastify";
import { addToCart, getCart } from "@/app/(with-header)/shopping-cart/cart";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function ProductTabs() {
    const router = useRouter();

    const categories = useMemo(
        () => [...new Set(productData.map((item) => item.category))],
        []
    );

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProducts = productData.filter(
        (item) => item.category === activeCategory
    );

    const [cartItems, setCartItems] = useState([]);
    const [loadingId, setLoadingId] = useState(null);

    const isInCart = (id) =>
        cartItems.some((itemId) => Number(itemId) === Number(id));

    const getToken = () => {
        const raw = Cookies.get("user_login");

        if (!raw) return null;

        try {
            return JSON.parse(raw)?.token || raw;
        } catch {
            return raw;
        }
    };

    const handleAddToCart = async (productId) => {
        const token = getToken();

        //No token → force login
        if (!token) {
            toast.error("Please login first to add items to cart");
            router.push("/login-register");
            return;
        }

        try {
            setLoadingId(productId);

            await addToCart(productId);

            //Optimistic UI update (instant change)
            setCartItems((prev) => [...prev, Number(productId)]);

            toast.success("Product added to cart");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product to cart");
        } finally {
            setLoadingId(null);
        }
    };

    const fetchCart = async () => {
        try {
            const res = await getCart();

            const cartData = res?.data?.data ?? [];

            const ids = cartData.map((item) =>
                Number(item.product_id)
            );

            setCartItems(ids);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <section className="py-10">

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded text-white ${activeCategory === cat
                            ? "bg-red-600"
                            : "bg-yellow-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products */}
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">

                {filteredProducts.length === 0 ? (
                    <div className="col-span-4 text-center text-gray-500">
                        No products found in this category
                    </div>
                ) : (
                    filteredProducts.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-xl p-4"
                        >
                            <Link href={`/my-products/${item.id}`}>
                                <img
                                    src={item.image}
                                    className="w-full h-[200px] object-contain"
                                    alt={item.name}
                                />
                            </Link>

                            <h3 className="mt-3 font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-gray-500 text-sm line-clamp-2">
                                {item.description}
                            </p>

                            <p className="text-yellow-600 font-bold mt-2">
                                ₹{item.price}
                            </p>

                            {/* BUTTON UI LOGIC */}
                            {isInCart(item.id) ? (
                                <Link href="/shopping-cart">
                                    <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                        Go to Cart
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(item.id)}
                                    disabled={loadingId === item.id}
                                    className="mt-3 w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 disabled:opacity-50"
                                >
                                    {loadingId === item.id
                                        ? "Adding..."
                                        : "Add to Cart"}
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}