"use client"
import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function BestSellingProducts() {
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
            <div className='max-w-[1320px] mx-auto'>
                <h2 className='py-4 text-2xl font-bold border-b'>Bestselling Products</h2>
                <div className='md:hidden block'>
                    <Slider {...productSlider}>
                        <div>Slide 1</div>
                        <div>Slide 2</div>
                        <div>Slide 3</div>
                        <div>Slide 4</div>
                        <div>Slide 5</div>
                    </Slider>
                </div>

                <div className='md:block hidden'>
                    <Slider {...productSliderDesctop}>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Erica Bookshelfs
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 38,000
                            </p>
                            <p className="mb-6 text-body">Rs. 30,000</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Hrithvik Stool
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 7,000
                            </p>
                            <p className="mb-6 text-body">Rs. 6,000</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Caroline Study Tables
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 3,000
                            </p>
                            <p className="mb-6 text-body">Rs. 2,500</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Coffee Table Set
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 3,000
                            </p>
                            <p className="mb-6 text-body">Rs. 2,200</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Evan Coffee Table
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 2,600
                            </p>
                            <p className="mb-6 text-body">Rs. 2,300</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Hardwell Temple Prayer Unit
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 10,000
                            </p>
                            <p className="mb-6 text-body">Rs. 9,300</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Dorian Shoe Rack
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 3,000
                            </p>
                            <p className="mb-6 text-body">Rs. 2,000</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Gloria Shoe Racks
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 3,000
                            </p>
                            <p className="mb-6 text-body">Rs. 2,000</p>
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

                        <div className="bg-neutral-primary-soft block max-w-sm p-6 rounded-base shadow-md">
                            <a href="#">
                                <img className="rounded-base" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg" alt="" />
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                                    Issac Chest of Drawer
                                </h5>
                            </a>
                            <p className="mb-2 text-body line-through text-gray-500">
                                Rs. 3,000
                            </p>
                            <p className="mb-6 text-body">Rs. 2,000</p>
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

                        <div>Slide 5</div>
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
