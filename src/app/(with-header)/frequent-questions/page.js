"use client"
import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

export default function FrequentQuestions() {
    const [openIndex, setOpenIndex] = useState([0]); // first open by default

    const toggleAccordion = (index) => {
        if (openIndex.includes(index)) {
            setOpenIndex(openIndex.filter((item) => item !== index));
        } else {
            setOpenIndex([...openIndex, index]);
        }
    };

    return (
        <div className='my-10'>
            <Breadcrumb title={"Frequently Asked Questions"} />
            <div className="rounded-base overflow-hidden shadow-xs max-w-[1320px] mx-auto my-10">

                <div className='mb-2'>
                    <button
                        onClick={() => toggleAccordion(0)}
                        className={`flex justify-between w-full p-3 font-medium rounded-md transition-all duration-300 ease-in-out
      ${openIndex.includes(0)
                                ? "text-yellow-800 border border-yellow-600"
                                : "text-black border-none bg-gray-300"
                            }`}
                    >
                        Aenean elit orci, efficitur quis nisl at, accumsan?
                        <span className={`transition-transform duration-300 ${openIndex.includes(0) ? "rotate-180" : ""}`}>
                            {openIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </button>

                    {/*CONTENT (always mounted for animation) */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
      ${openIndex.includes(0)
                                ? "max-h-40 opacity-100 p-3 border border-t-0 border-red-400 text-gray-500"
                                : "max-h-0 opacity-0 px-3"
                            }`}
                    >
                        <p>
                            Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
                            vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                            consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                            ultricies, elit lorem eleifend lorem
                        </p>
                    </div>
                </div>

                <div className='mb-2'>
                    <button
                        onClick={() => toggleAccordion(1)}
                        className={`flex justify-between w-full p-3 font-medium rounded-md transition-all duration-300 ease-in-out
      ${openIndex.includes(1)
                                ? "text-yellow-800 border border-yellow-600"
                                : "text-black border-none bg-gray-300"
                            }`}
                    >
                        Aenean elit orci, efficitur quis nisl at, accumsan?
                        <span className={`transition-transform duration-300 ${openIndex.includes(1) ? "rotate-180" : ""}`}>
                            {openIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </button>

                    {/*CONTENT (always mounted for animation) */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
      ${openIndex.includes(1)
                                ? "max-h-40 opacity-100 p-3 border border-t-0 border-red-400 text-gray-500"
                                : "max-h-0 opacity-0 px-3"
                            }`}
                    >
                        <p>
                            Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
                            vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                            consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                            ultricies, elit lorem eleifend lorem
                        </p>
                    </div>
                </div>

                <div className='mb-2'>
                    <button
                        onClick={() => toggleAccordion(2)}
                        className={`flex justify-between w-full p-3 font-medium rounded-md transition-all duration-300 ease-in-out
      ${openIndex.includes(2)
                                ? "text-yellow-800 border border-yellow-600"
                                : "text-black border-none bg-gray-300"
                            }`}
                    >
                        Aenean elit orci, efficitur quis nisl at, accumsan?
                        <span className={`transition-transform duration-300 ${openIndex.includes(2) ? "rotate-180" : ""}`}>
                            {openIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </button>

                    {/*CONTENT (always mounted for animation) */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
      ${openIndex.includes(2)
                                ? "max-h-40 opacity-100 p-3 border border-t-0 border-red-400 text-gray-500"
                                : "max-h-0 opacity-0 px-3"
                            }`}
                    >
                        <p>
                            Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
                            vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                            consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                            ultricies, elit lorem eleifend lorem
                        </p>
                    </div>
                </div>

                <div className='mb-2'>
                    <button
                        onClick={() => toggleAccordion(3)}
                        className={`flex justify-between w-full p-3 font-medium rounded-md transition-all duration-300 ease-in-out
      ${openIndex.includes(3)
                                ? "text-yellow-800 border border-yellow-600"
                                : "text-black border-none bg-gray-300"
                            }`}
                    >
                        Aenean elit orci, efficitur quis nisl at, accumsan?
                        <span className={`transition-transform duration-300 ${openIndex.includes(3) ? "rotate-180" : ""}`}>
                            {openIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </button>

                    {/*CONTENT (always mounted for animation) */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
      ${openIndex.includes(3)
                                ? "max-h-40 opacity-100 p-3 border border-t-0 border-red-400 text-gray-500"
                                : "max-h-0 opacity-0 px-3"
                            }`}
                    >
                        <p>
                            Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
                            vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                            consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                            ultricies, elit lorem eleifend lorem
                        </p>
                    </div>
                </div>

                <div className='mb-2'>
                    <button
                        onClick={() => toggleAccordion(4)}
                        className={`flex justify-between w-full p-3 font-medium rounded-md transition-all duration-300 ease-in-out
      ${openIndex.includes(4)
                                ? "text-yellow-800 border border-yellow-600"
                                : "text-black border-none bg-gray-300"
                            }`}
                    >
                        Aenean elit orci, efficitur quis nisl at, accumsan?
                        <span className={`transition-transform duration-300 ${openIndex.includes(4) ? "rotate-180" : ""}`}>
                            {openIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </button>

                    {/*CONTENT (always mounted for animation) */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
      ${openIndex.includes(4)
                                ? "max-h-40 opacity-100 p-3 border border-t-0 border-red-400 text-gray-500"
                                : "max-h-0 opacity-0 px-3"
                            }`}
                    >
                        <p>
                            Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu
                            vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam
                            consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla
                            ultricies, elit lorem eleifend lorem
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
