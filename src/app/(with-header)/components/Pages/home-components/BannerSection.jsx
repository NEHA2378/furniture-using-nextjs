"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Banner.css"

export default function BannerSection() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <div className='overflow-hidden' id='BannerSection'>
            <Slider {...settings}>
            <div>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
            </div>
            <div>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="" />
            </div>
            <div>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="" />
            </div>
        </Slider>
        </div>
    )
}
