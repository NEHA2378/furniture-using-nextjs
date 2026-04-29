"use client";

import { useState, useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { addToCart } from "@/app/(with-header)/shopping-cart/cart";
import { toast } from "react-toastify";
import Link from "next/link";
import Cookies from "js-cookie";
import { useFavorites } from "@/app/(with-header)/context/FavoriteContext";

export default function SearchResults({ products, query }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const [sortOption, setSortOption] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [loadingId, setLoadingId] = useState(null);

    // Sidebar filters
    const [selectedTitles, setSelectedTitles] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [maxPrice, setMaxPrice] = useState(100000);

    const isInCart = (id) => cartItems.some((itemId) => Number(itemId) === Number(id));

    const getToken = () => {
        const raw = Cookies.get("user_login");
        if (!raw) return null;
        try { return JSON.parse(raw)?.token || raw; } catch { return raw; }
    };

    const handleAddToCart = async (productId) => {
        const token = getToken();
        if (!token) { toast.error("Please login first to add items to cart"); return; }
        try {
            setLoadingId(productId);
            await addToCart(productId);
            setCartItems((prev) => [...prev, Number(productId)]);
            toast.success("Product added to cart");
        } catch { toast.error("Failed to add product to cart"); }
        finally { setLoadingId(null); }
    };

    // All unique titles and materials from search results
    const allTitles = [...new Set(products.map((p) => p.title))];
    const allMaterials = [...new Set(products.map((p) => p.Material).filter(Boolean))];

    const toggleTitle = (t) =>
        setSelectedTitles((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

    const toggleMaterial = (m) =>
        setSelectedMaterials((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);

    const finalProducts = useMemo(() => {
        let result = [...products];

        if (selectedTitles.length > 0)
            result = result.filter((p) => selectedTitles.includes(p.title));

        if (selectedMaterials.length > 0)
            result = result.filter((p) => selectedMaterials.includes(p.Material));

        result = result.filter((p) => p.price <= maxPrice);

        if (sortOption === "low-high") result.sort((a, b) => a.price - b.price);
        else if (sortOption === "high-low") result.sort((a, b) => b.price - a.price);
        else if (sortOption === "a-z") result.sort((a, b) => a.name.localeCompare(b.name));
        else if (sortOption === "z-a") result.sort((a, b) => b.name.localeCompare(a.name));

        return result;
    }, [products, selectedTitles, selectedMaterials, maxPrice, sortOption]);

    return (
        <div className="max-w-[1320px] mx-auto px-4 py-6 mb-10">

            {/* Breadcrumb-style header */}
            <div className="mb-6 border-b pb-4">
                <h2 className="text-xl font-semibold">
                    Search results for: <span className="text-yellow-700">"{query}"</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">{products.length} products found</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[250px_auto] gap-6">

                {/* ── SIDEBAR ── */}
                <div className="order-2 lg:order-1">
                    <div className="border p-4 rounded sticky top-24">

                        {/* Category Filter */}
                        {allTitles.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-bold text-sm uppercase tracking-wider mb-3 border-b pb-2">
                                    Category
                                </h3>
                                <ul className="space-y-2">
                                    {allTitles.map((title) => (
                                        <li key={title}>
                                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedTitles.includes(title)}
                                                    onChange={() => toggleTitle(title)}
                                                    className="accent-yellow-700"
                                                />
                                                {title}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Material Filter */}
                        {allMaterials.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-bold text-sm uppercase tracking-wider mb-3 border-b pb-2">
                                    Material
                                </h3>
                                <ul className="space-y-2">
                                    {allMaterials.map((mat) => (
                                        <li key={mat}>
                                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMaterials.includes(mat)}
                                                    onChange={() => toggleMaterial(mat)}
                                                    className="accent-yellow-700"
                                                />
                                                {mat}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Price Filter */}
                        <div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 border-b pb-2">
                                Max Price
                            </h3>
                            <input
                                type="range"
                                min={0}
                                max={100000}
                                step={500}
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-full accent-yellow-700"
                            />
                            <p className="text-sm mt-1 text-gray-600">Up to ₹{maxPrice.toLocaleString()}</p>
                        </div>

                        {/* Reset */}
                        <button
                            onClick={() => { setSelectedTitles([]); setSelectedMaterials([]); setMaxPrice(100000); setSortOption(""); }}
                            className="mt-5 w-full text-sm text-yellow-700 border border-yellow-700 py-1.5 rounded hover:bg-yellow-50 transition"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* ── PRODUCT GRID ── */}
                <div className="order-1 lg:order-2">

                    {/* Sort bar */}
                    <div className="mb-5 p-2 flex lg:justify-end justify-center gap-3 items-center">
                        <label className="hidden md:block text-sm">Sort By:</label>
                        <select
                            className="border border-gray-300 p-2 text-sm"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="">Default</option>
                            <option value="low-high">Price: Low to High</option>
                            <option value="high-low">Price: High to Low</option>
                            <option value="a-z">A to Z</option>
                            <option value="z-a">Z to A</option>
                        </select>
                        <p className="hidden md:block text-sm text-gray-500">
                            Showing {finalProducts.length} results
                        </p>
                    </div>

                    {/* Cards */}
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
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                            {finalProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white p-6 rounded shadow-md hover:shadow-lg transition"
                                >
                                    <img
                                        className="rounded w-full h-[200px] object-cover"
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <h6 className="mt-4 text-gray-500 text-sm">{product.title}</h6>
                                    <h5 className="mt-1 text-lg font-semibold">{product.name}</h5>
                                    <p className="text-gray-400 line-through text-sm">₹{product.originalPrice}</p>
                                    <p className="text-lg font-bold">₹{product.price}</p>

                                    <div className="flex items-center justify-between mt-4">
                                        <button
                                            onClick={() => toggleFavorite(product)}
                                            className={`p-2 border rounded-full transition ${isFavorite(product.id) ? "bg-red-500 text-white" : "hover:bg-gray-100"}`}
                                        >
                                            <FaHeart />
                                        </button>

                                        {isInCart(product.id) ? (
                                            <Link href="/shopping-cart">
                                                <button className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm">
                                                    Go to Cart
                                                </button>
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => handleAddToCart(product.id)}
                                                disabled={loadingId === product.id}
                                                className="bg-yellow-600 text-white px-3 py-2 rounded hover:bg-yellow-700 text-sm disabled:opacity-50"
                                            >
                                                {loadingId === product.id ? "Adding..." : "Add to Cart"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
