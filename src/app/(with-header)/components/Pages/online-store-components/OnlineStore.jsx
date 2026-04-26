"use client"
import { productData } from '@/app/(with-header)/Data/ProductData'
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";

export default function OnlineStore() {

    const [selectedTitles, setSelectedTitles] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [price, setPrice] = useState(100000);
    const [sortOption, setSortOption] = useState("");

    const handleTitleChange = (value) => {
        setSelectedTitles((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleMaterialChange = (value) => {
        setSelectedMaterials((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const filteredProducts = productData.filter((product) => {

        // Title filter
        const titleMatch =
            selectedTitles.length === 0 ||
            selectedTitles.includes(product.title);

        // Material filter
        const materialMatch =
            selectedMaterials.length === 0 ||
            selectedMaterials.includes(product.Material);

        // Price filter
        const priceMatch = product.price <= price;

        return titleMatch && materialMatch && priceMatch;
    });

    let sortedProducts = [...filteredProducts];

    if (sortOption === "low-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "high-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "a-z") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortOption === "z-a") {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortOption === "featured") {
        sortedProducts = sortedProducts.filter(p => p.category === "featured");
    }

    if (sortOption === "new") {
        sortedProducts = sortedProducts.filter(p => p.category === "newArrivals");
    }

    if (sortOption === "sale") {
        sortedProducts = sortedProducts.filter(p => p.category === "onSale");
    }

    const titleFilters = [
        "Side and End Tables",
        "Nest Of Tables",
        "Coffee Table Sets",
        "Coffee Tables",
        "Wooden Mirrors",
        "Display Unit",
        "Shoe Racks",
        "Cabinets and Sideboard",
        "1 Seater Sofa",
        "Wooden Sofa Sets"
    ];

    const materialFilters = [
        "Rose Wood",
        "Teak Wood",
        "Satin Wood",
        "Sal Wood",
        "Mahogany Wood",
        "Mulberry Wood",
        "JackFruit"
    ];

    return (
        <div className='mb-10 max-w-[1320px] mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-[250px_auto] gap-4'>
                <div className='p-4 order-2 lg:order-1'>
                    <div className='max-h-[450px] overflow-y-scroll overflow-x-hidden  custom-scroll'>
                        <h2 className='font-bold text-2xl mb-4'>Title</h2>
                        {titleFilters.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 pb-3'>
                                <input
                                    type='checkbox'
                                    checked={selectedTitles.includes(item)}
                                    onChange={() => handleTitleChange(item)}
                                />
                                <p>{item}</p>
                            </div>
                        ))}
                        <div>
                            <h3 className='text-xl pb-3 font-bold'>Mirrors</h3>
                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Wooden Mirrors</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl pb-3 font-bold'>Living Storage/collections</h3>
                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Prayer Units</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Display Unit</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Shoe Racks</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Chest Of Drawers</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Cabinets and Sideboard</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Bookshelves</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Tv Units</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl pb-3 font-bold'>Sofa Cum Bed</h3>
                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Wooden Sofa Cum Bed</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl pb-3 font-bold'>Sofa Sets</h3>
                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Sofa Cover</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>L Shape Sofa</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>1 Seater Sofa</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>2 Seater Sofa</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>3 Seater Sofa</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Wooden Sofa Sets</p>
                            </div>

                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Normal</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl pb-3 font-bold'>Swing Jhula</h3>
                            <div className='flex items-center gap-2 pb-3'>
                                <input type='checkbox' />
                                <p>Wooden Jhula</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold text-2xl my-4'>Material</h2>
                        {materialFilters.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 pb-3'>
                                <input
                                    type='checkbox'
                                    checked={selectedMaterials.includes(item)}
                                    onChange={() => handleMaterialChange(item)}
                                />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <input
                        type='range'
                        min="0"
                        max="100000"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <p>Max Price: ₹{price}</p>
                </div>
                <div className='p-4 order-1 lg:order-2'>
                    <div className='mb-5 p-2 flex lg:justify-end justify-center gap-3 items-center'>
                        <label className='hidden md:block' htmlFor="">Sort By : </label>
                        <select className='border border-1 border-gray-300 p-2'
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}>
                            <option value="" className='bg-gray-200'>Sort By</option>
                            <option value="featured">Featured Products</option>
                            <option value="new">New Arrivals</option>
                            <option value="sale">On Sale</option>
                            <option value="low-high">Sort By Price: low to high</option>
                            <option value="high-low">Sort By Price: high to low</option>
                            <option value="a-z">Product Name: A to Z</option>
                            <option value="z-a">Product Name: Z to A</option>
                        </select>

                        <p className='hidden md:block'>Showing {filteredProducts.length} results</p>
                    </div>
                    <div className='mb-10 max-w-[1320px] mx-auto'>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

                            {sortedProducts.length === 0 ? (

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

                                sortedProducts.map((product) => (

                                    <div key={product.id} className="bg-neutral-primary-soft p-6 rounded-base shadow-md">

                                        <img
                                            className="rounded-base w-full h-[200px] object-cover"
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <h6 className='mt-4 text-gray-500'>
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

                                            <button
                                                className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>

                                    </div>

                                ))

                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
