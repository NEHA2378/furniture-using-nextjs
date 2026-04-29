"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useFavorites } from '@/app/(with-header)/context/FavoriteContext';
import { productData } from '@/app/(with-header)/Data/ProductData';
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import { addToCart, getCart } from '@/app/(with-header)/shopping-cart/cart';

export default function BestSellingProducts() {

    const bestSellingProducts = productData.filter(
        (item) =>
            item.category?.toLowerCase() === "best selling"
    );

    const { toggleFavorite, isFavorite } = useFavorites();

    const router = useRouter();

    const categories = useMemo(
        () => [...new Set(productData.map((item) => item.category))],
        []
    );

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProducts = productData.filter(
        (item) => item.category === activeCategory
    );

    const [cartItems, setCartItems] = useState([]);
    const [loadingId, setLoadingId] = useState(null);

    const isInCart = (id) =>
        cartItems.some((itemId) => Number(itemId) === Number(id));

    const getToken = () => {
        const raw = Cookies.get("user_login");

        if (!raw) return null;

        try {
            return JSON.parse(raw)?.token || raw;
        } catch {
            return raw;
        }
    };

    const handleAddToCart = async (productId) => {
        const token = getToken();

        //No token → force login
        if (!token) {
            toast.error("Please login first to add items to cart");
            router.push("/login-register");
            return;
        }

        try {
            setLoadingId(productId);

            await addToCart(productId);

            //Optimistic UI update (instant change)
            setCartItems((prev) => [...prev, Number(productId)]);

            toast.success("Product added to cart");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product to cart");
        } finally {
            setLoadingId(null);
        }
    };

    const fetchCart = async () => {
        try {
            const res = await getCart();

            const cartData = res?.data?.data ?? [];

            const ids = cartData.map((item) =>
                Number(item.product_id)
            );

            setCartItems(ids);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCart();
    }, []);

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
        <section className='py-10 px-5 overflow-hidden'>
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
                                    <Link href={`/my-products/${product.id}`}>
                                        <img className="rounded-base" src={product.image} alt="" />
                                    </Link>
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

                                        {/* BUTTON UI LOGIC */}
                                        {isInCart(product.id) ? (
                                            <Link href="/shopping-cart">
                                                <button className="mt-3 bg-green-600 text-white p-2 rounded hover:bg-green-700">
                                                    Go to Cart
                                                </button>
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={() => handleAddToCart(product.id)}
                                                disabled={loadingId === product.id}
                                                className="mt-3 bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 disabled:opacity-50"
                                            >
                                                {loadingId === product.id
                                                    ? "Adding..."
                                                    : "Add to Cart"}
                                            </button>
                                        )}
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
