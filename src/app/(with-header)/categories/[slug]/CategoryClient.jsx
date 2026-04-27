"use client";

import { useState, useMemo } from "react";
import { useFilters } from "@/app/(with-header)/categories/FilterContext";
import { FaHeart } from "react-icons/fa";

export default function CategoryClient({ products }) {
    const { filters } = useFilters();
    const [sortOption, setSortOption] = useState("");

    const finalProducts = useMemo(() => {
        let result = [...products];

        //FILTERING
        result = result.filter((product) => {
            const titleMatch =
                filters?.titles?.length === 0 ||
                filters?.titles?.includes(product.title);

            const materialMatch =
                filters?.materials?.length === 0 ||
                filters?.materials?.includes(product.Material);

            const priceMatch = product.price <= (filters?.price ?? 100000);

            return titleMatch && materialMatch && priceMatch;
        });

        //SORTING / CATEGORY TAG FILTER
        if (sortOption === "low-high") {
            result.sort((a, b) => a.price - b.price);
        }

        else if (sortOption === "high-low") {
            result.sort((a, b) => b.price - a.price);
        }

        else if (sortOption === "a-z") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        else if (sortOption === "z-a") {
            result.sort((a, b) => b.name.localeCompare(a.name));
        }

        else if (sortOption === "featured") {
            result = result.filter(p => p.category === "featured");
        }

        else if (sortOption === "new") {
            result = result.filter(p => p.category === "newArrivals");
        }

        else if (sortOption === "sale") {
            result = result.filter(p => p.category === "onSale");
        }

        return result;
    }, [products, filters, sortOption]);

    return (
        <div>
            {/* SORT */}
            <div className="mb-5 p-2 flex lg:justify-end justify-center gap-3 items-center">
                <label className="hidden md:block">Sort By :</label>

                <select
                    className="border border-gray-300 p-2"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="featured">Featured Products</option>
                    <option value="new">New Arrivals</option>
                    <option value="sale">On Sale</option>
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
            <div className="mb-10 max-w-[1320px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

                    {finalProducts.length === 0 ? (

                        <div className="my-10 col-span-3">
                            <img
                                src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                                className="rounded-md mx-auto"
                                alt="No matches"
                            />
                            <p className="text-center py-10">
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

                                <h6 className="mt-4 text-gray-500">
                                    {product.title}
                                </h6>

                                <h5 className="mt-2 text-xl font-semibold">
                                    {product.name}
                                </h5>

                                <p className="text-gray-400 line-through">
                                    Rs. {product.originalPrice}
                                </p>

                                <p className="text-lg font-bold">
                                    Rs. {product.price}
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <button className="p-2 border rounded-full hover:bg-gray-100">
                                        <FaHeart />
                                    </button>

                                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        ))

                    )}

                </div>
            </div>
        </div>
    );
}