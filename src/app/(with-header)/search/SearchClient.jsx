"use client";

import { useState, useMemo } from "react";
import { useFilters } from "@/app/(with-header)/categories/FilterContext";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useFavorites } from "../context/FavoriteContext";
import { addToCart } from "../shopping-cart/cart";

export default function SearchClient({ products, query }) {

    const { toggleFavorite, isFavorite } = useFavorites();
    const { filters } = useFilters();
    const [sortOption, setSortOption] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [loadingId, setLoadingId] = useState(null);

    const isInCart = (id) => cartItems.some((itemId) => Number(itemId) === Number(id));

    const getToken = () => {
        const raw = Cookies.get("user_login");
        if (!raw) return null;
        try { return JSON.parse(raw)?.token || raw; } catch { return raw; }
    };

    const handleAddToCart = async (productId) => {
        const token = getToken();
        if (!token) {
            toast.error("Please login first to add items to cart");
            return;
        }
        try {
            setLoadingId(productId);
            await addToCart(productId);
            setCartItems((prev) => [...prev, Number(productId)]);
            toast.success("Product added to cart");
        } catch {
            toast.error("Failed to add product to cart");
        } finally {
            setLoadingId(null);
        }
    };

    const finalProducts = useMemo(() => {
        let result = [...products];

        // Only apply filters if they actually have values
        if (filters?.titles?.length > 0) {
            result = result.filter((product) =>
                filters.titles.includes(product.title)
            );
        }

        if (filters?.materials?.length > 0) {
            result = result.filter((product) =>
                filters.materials.includes(product.Material)
            );
        }

        if (filters?.price != null) {
            result = result.filter((product) =>
                product.price <= filters.price
            );
        }

        // Sorting
        if (sortOption === "low-high") result.sort((a, b) => a.price - b.price);
        else if (sortOption === "high-low") result.sort((a, b) => b.price - a.price);
        else if (sortOption === "a-z") result.sort((a, b) => a.name.localeCompare(b.name));
        else if (sortOption === "z-a") result.sort((a, b) => b.name.localeCompare(a.name));

        return result;
    }, [products, filters, sortOption]);

    return (
        <div>
            {/* Search heading */}
            <div className="mb-4 border-b pb-3">
                <h2 className="text-lg font-semibold">
                    Results for: <span className="text-yellow-700">"{query}"</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">{products.length} products found</p>
            </div>

            {/* SORT */}
            <div className="mb-5 p-2 flex lg:justify-end justify-center gap-3 items-center">
                <label className="hidden md:block">Sort By :</label>
                <select
                    className="border border-gray-300 p-2"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="low-high">Price: low to high</option>
                    <option value="high-low">Price: high to low</option>
                    <option value="a-z">A to Z</option>
                    <option value="z-a">Z to A</option>
                </select>
                <p className="hidden md:block">
                    Showing {finalProducts.length} results
                </p>
            </div>

            {/* PRODUCTS */}
            <div className="mb-10 mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">

                    {finalProducts.length === 0 ? (
                        <div className='my-10 col-span-3'>
                            <img
                                src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                                className="rounded-md mx-auto"
                                alt="No matches available"
                            />
                            <p className='text-center py-10'>
                                No products found!
                            </p>
                        </div>
                    ) : (
                        finalProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-neutral-primary-soft p-6 rounded-base shadow-md"
                            >
                                <img
                                    className="rounded-base w-full h-[200px] object-cover"
                                    src={product.image}
                                    alt={product.name}
                                />

                                <h6 className="mt-4 text-gray-500">{product.title}</h6>
                                <h5 className="mt-2 text-xl font-semibold">{product.name}</h5>
                                <p className="text-gray-400 line-through">Rs. {product.originalPrice}</p>
                                <p className="text-lg font-bold">Rs. {product.price}</p>

                                <div className="flex items-center justify-between mt-4">
                                    <button
                                        onClick={() => toggleFavorite(product)}
                                        className={`p-2 border rounded-full transition ${isFavorite(product.id)
                                            ? "bg-red-500 text-white"
                                            : "hover:bg-gray-100"
                                            }`}
                                    >
                                        <FaHeart />
                                    </button>

                                    {isInCart(product.id) ? (
                                        <Link href="/shopping-cart">
                                            <button className="mt-3 bg-green-600 text-white p-2 rounded hover:bg-green-700">
                                                Go to Cart
                                            </button>
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            disabled={loadingId === product.id}
                                            className="mt-3 bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 disabled:opacity-50"
                                        >
                                            {loadingId === product.id ? "Adding..." : "Add to Cart"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
