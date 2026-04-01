"use client"
import React from 'react'
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";

export default function ServiceSection() {
    return (
        <section className='bg-gray-100 mb-5'>
            <div className='max-w-[1320px] mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>

                <div>
                    <button className='p-5 text-xl rounded-full border-1 hover:border-yellow-700 hover:text-yellow-700 mb-3'><BsGlobeCentralSouthAsia /></button>
                    <h3 className='text-lg font-semibold'>Free Shipping</h3>
                    <p className='text-gray-500'>Free shipping on all order</p>
                </div>

                <div>
                    <button className='p-5 text-xl rounded-full border-1 hover:border-yellow-700 hover:text-yellow-700 mb-3'><LuCircleCheckBig /></button>
                    <h3 className='text-lg font-semibold'>Money Return</h3>
                    <p className='text-gray-500'>Back guarantee under 7 days</p>
                </div>

                <div>
                    <button className='p-5 text-xl rounded-full border-1 hover:border-yellow-700 hover:text-yellow-700 mb-3'><FaRegClock /></button>
                    <h3 className='text-lg font-semibold'>Online Support</h3>
                    <p className='text-gray-500'>Support online 24 hours a day</p>
                </div>

            </div>
        </section>
    )
}
