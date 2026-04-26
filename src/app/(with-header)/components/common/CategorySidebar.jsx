"use client"
import React from 'react'

export default function CategorySidebar({ filters, setFilters }) {

    const handleTitleChange = (value) => {
        setFilters((prev) => ({
            ...prev,
            titles: prev.titles.includes(value)
                ? prev.titles.filter((item) => item !== value)
                : [...prev.titles, value],
        }));
    };

    const handleMaterialChange = (value) => {
        setFilters((prev) => ({
            ...prev,
            materials: prev.materials.includes(value)
                ? prev.materials.filter((item) => item !== value)
                : [...prev.materials, value],
        }));
    };

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
        <div className='p-4 order-2 lg:order-1'>

            {/* TITLE FILTER */}
            <div className='max-h-[450px] overflow-y-scroll custom-scroll'>
                <h2 className='font-bold text-2xl mb-4'>Title</h2>

                {titleFilters.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 pb-3'>
                        <input
                            type='checkbox'
                            checked={filters.titles.includes(item)}
                            onChange={() => handleTitleChange(item)}
                        />
                        <p>{item}</p>
                    </div>
                ))}
            </div>

            {/* MATERIAL FILTER */}
            <div>
                <h2 className='font-bold text-2xl my-4'>Material</h2>

                {materialFilters.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 pb-3'>
                        <input
                            type='checkbox'
                            checked={filters.materials.includes(item)}
                            onChange={() => handleMaterialChange(item)}
                        />
                        <p>{item}</p>
                    </div>
                ))}
            </div>

            {/* PRICE FILTER */}
            <input
                type='range'
                min="0"
                max="100000"
                value={filters.price}
                onChange={(e) =>
                    setFilters((prev) => ({
                        ...prev,
                        price: Number(e.target.value),
                    }))
                }
            />

            <p>Max Price: ₹{filters.price}</p>

        </div>
    );
}
