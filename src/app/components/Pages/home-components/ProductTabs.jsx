
"use client"
import { productData } from '@/app/Data/ProductData'
import React, { useState } from 'react'

export default function ProductTabs() {
    let categoryData = []
    productData.forEach((obj) => {
        if (!categoryData.includes(obj.category)) {
            categoryData.push(obj.category)
        }
    })

    let [currentCategory, setCurrentCategory] = useState(categoryData[0])


    let finalData=[...productData]

    finalData=finalData.filter((obj)=>obj.category==currentCategory)
    return (
        <section className='py-10'>
            <div className='flex gap-3 justify-center'>
                {
                    categoryData.map((v, index) => <button onClick={()=>setCurrentCategory(v)} key={index} className={`px-4 py-2 text-white ${v==currentCategory ? 'bg-red-600' : 'bg-yellow-600'}`}>{v}</button>)
                }

            </div>
            <div className='max-w-[1320px] mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {finalData.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}


            </div>
        </section>
    )
}

function ProductCard({data}) {
    let {name, category, price, image, description}=data
    return (


        <div className="bg-white shadow-md rounded-xl overflow-hidden group">

            <div className="relative">
                <a href="#">
                    <img
                        src={image}
                        className="w-full h-[250px] object-contain transition duration-300 group-hover:opacity-0"
                    />
                    <img
                        src={image}
                        className="w-full h-[250px] object-contain absolute top-0 left-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                </a>
            </div>

            <div className="p-4">

                <p className="text-sm text-gray-500 mb-1">{name}</p>

                <h3 className="text-lg font-semibold mb-2">
                    <a href="#" className="hover:text-yellow-600">
                        {description}
                    </a>
                </h3>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400 line-through">{price +1000}</span>
                    <span className="text-yellow-600 font-semibold">{price}</span>
                </div>

                <div className="flex items-center justify-between">

                    <button className="p-2 border rounded-full hover:bg-gray-100">
                        <img
                            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg"
                            className="w-5 h-5"
                        />
                    </button>

                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>


    )
}
