"use client";

import React, { useState } from "react";
import { productData } from "@/app/(with-header)/Data/ProductData";

export default function ProductTabs() {

    //Get unique categories
    const categories = [...new Set(productData.map(item => item.category))];

    //Default category
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    //Filter products
    const filteredProducts = productData.filter(
        (item) => item.category === activeCategory
    );

    return (
        <section className="py-10">

            {/* 🔹 Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded text-white ${activeCategory === cat ? "bg-red-600" : "bg-yellow-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 🔹 Products */}
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">

                {filteredProducts.length === 0 ? (
                    <p className="col-span-4 text-center">No products found</p>
                ) : (
                    filteredProducts.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-xl p-4"
                        >
                            <img
                                src={item.image}
                                className="w-full h-[200px] object-contain"
                                alt={item.name}
                            />

                            <h3 className="mt-3 font-semibold">{item.name}</h3>

                            <p className="text-gray-500 text-sm line-clamp-2">
                                {item.description}
                            </p>

                            <p className="text-yellow-600 font-bold mt-2">
                                ₹{item.price}
                            </p>

                            <button className="mt-3 w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}

            </div>
        </section>
    );
}