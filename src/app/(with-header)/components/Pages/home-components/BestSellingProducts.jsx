"use client"
import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useFavorites } from '@/app/(with-header)/context/FavoriteContext';
import { productData } from '@/app/(with-header)/Data/ProductData';
import { FaHeart } from "react-icons/fa";

export default function BestSellingProducts() {

    const bestSellingProducts = productData.filter(
        (product) =>
            product.category?.toLowerCase() === "best selling"
    );

    const { toggleFavorite, isFavorite } = useFavorites();
    
    let productSlider = {
        dots: false,
        infinite: true,
        speed: 500,


        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }

    let productSliderDesctop = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,

        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return (
        <section className='py-10'>
            <div className='relative max-w-[1320px] mx-auto'>
                <h2 className='py-4 text-2xl font-bold border-b'>Bestselling Products</h2>
                <div className='md:hidden block'>
                    <Slider {...productSlider}>
                        {
                            bestSellingProducts.map((product) => (
                                <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                                    <a href="#">
                                        <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg" alt="" />
                                    </a>
                                    <a href="#">
                                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                            Louise Cabinet
                                        </h5>
                                    </a>
                                    <p className="mb-2 text-body line-through text-gray-500">
                                        Rs. 28,000
                                    </p>
                                    <p className="mb-6 text-body">Rs. 23,000</p>
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
                            )
                            )
                        }
                    </Slider>
                </div>

                <div className='md:block hidden'>
                    <Slider {...productSliderDesctop}>
                        {
                            bestSellingProducts.map((product) => (
                                <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                                    <a href="#">
                                        <img className="rounded-base" src={product.image} alt="" />
                                    </a>
                                    <a href="#">
                                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                            {product.name}
                                        </h5>
                                    </a>
                                    <p className="mb-2 text-body line-through text-gray-500">
                                        Rs. {product.originalPrice}
                                    </p>
                                    <p className="mb-6 text-body">Rs. {product.price}</p>
                                    <div className="flex items-center justify-between">

                                        <button
                                            onClick={() => toggleFavorite(product)}
                                            className={`p-2 border rounded-full transition ${isFavorite(product.id)
                                                ? "bg-red-500 text-white"
                                                : "hover:bg-gray-100"
                                                }`}
                                        >
                                            <FaHeart />
                                        </button>

                                        <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            )
                            )
                        }


                    </Slider>
                </div>
            </div>
        </section>
    )
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="text-gray p-2 cursor-pointer absolute right-0 top-[-10%]"
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="text-gray p-2 cursor-pointer absolute left-[95%] top-[-10%]"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
}
