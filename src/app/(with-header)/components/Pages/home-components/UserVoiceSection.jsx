"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Banner.css"
import { PiStarFill } from "react-icons/pi";

export default function UserVoiceSection() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplayApeed: 1000
    };
    return (
        <div className='overflow-hidden' id='BannerSection'>
            <h2 className='text-2xl text-center font-bold py-10'>What Our Custumers Say ?</h2>
            <Slider {...settings}>
                <div className='px-4'>
                    <div className='max-w-[1000px] mx-auto text-center mb-10'>
                        <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                        <img className='rounded-full mx-auto mt-10' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="" />
                        <p className='text-center uppercase font-bold py-4'>Kathy Young</p>
                        <p className='text-center text-gray-700'>CEO of Sun Park</p>
                        <div className='flex justify-center py-4 text-yellow-500'>
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                        </div>
                    </div>
                </div>
                <div className='px-4'>
                    <div className='max-w-[1000px] mx-auto text-center mb-10'>
                        <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                        <img className='rounded-full mx-auto mt-10' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" alt="" />
                        <p className='text-center uppercase font-bold py-4'>Kathy Young</p>
                        <p className='text-center text-gray-700'>CEO of Sun Park</p>
                        <div className='flex justify-center py-4 text-yellow-500'>
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                        </div>
                    </div>
                </div>
                <div className='px-4'>
                    <div className='max-w-[1000px] mx-auto text-center mb-10'>
                        <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                        <img className='rounded-full mx-auto mt-10' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="" />
                        <p className='text-center uppercase font-bold py-4'>Kathy Young</p>
                        <p className='text-center text-gray-700'>CEO of Sun Park</p>
                        <div className='flex justify-center py-4 text-yellow-500'>
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                            <PiStarFill />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}