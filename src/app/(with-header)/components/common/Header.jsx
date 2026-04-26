"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoMenuSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";

export default function Header() {

  const userLogin = useSelector((state) => state.login.userLogin)

  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  //Prevent hydration mismatch
  if (!mounted) return null

  return (
    <div>

      <header className="w-full">
        {/* Header Top */}
        <div className="bg-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
              <div className="text-center lg:text-left mb-2 lg:mb-0">
                <p>Contact us 24/7 : +91-98745612330 / furniture@gmail.com</p>
              </div>
              <div>
                {
                  userLogin
                    ?
                    <Link href="/" className="hover:text-blue-600">
                      <ul className='auth d-flex justifiy-content-end'>
                        <li>Logout</li>
                      </ul>
                    </Link>

                    :
                    <Link href="/login-register" className="hover:text-blue-600">
                      <ul className='auth flex justifiy-end'>
                        <li>Login &nbsp;/ </li>
                        <li>Register</li>
                      </ul>
                    </Link>
                }

              </div>
            </div>
          </div>
        </div>
        {/* Header Middle */}
        <div className="py-4 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                alt="logo"
                className="h-10"
              />
              {/* Right Section */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <form className="hidden md:flex border rounded overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search product..."
                    className="px-3 py-1 outline-none"
                  />
                  <button className="px-3 bg-gray-200">🔍</button>
                </form>
                {/* Wishlist */}
                <span><FaHeart /></span>
                {/* Cart */}
                <div className='relative'>
                  <button className="flex items-center gap-1">
                    <GiShoppingCart />
                    <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                      0
                    </span>
                    <span>Rs. 0.00</span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Bottom */}
        <div className="sticky top-0 bg-white shadow z-50">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex justify-between py-3">
              <button
                className="lg:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <IoMenuSharp />
              </button>
              {/* Menu */}
              <ul className="hidden lg:flex gap-6 font-medium">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                {/* Living Dropdown */}
                <li className="relative group">
                  <button className='flex items-center'>Living <FaCaretDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow p-4 w-64">
                    <Link className='font-semibold block' href="/tables">Side and End Tables</Link>
                    <Link className='font-semibold block' href="/mirrors">Mirror</Link>
                    <Link className='font-semibold block' href="/livings">Living Storage/ Collections</Link>
                  </div>
                </li>
                {/* Sofa Dropdown */}
                <li className="relative group">
                  <button className='flex items-center'>Sofa <FaCaretDown /></button>
                  <div className="absolute hidden group-hover:grid bg-white shadow p-4 w-[600px] grid grid-cols-3">
                    <div className='col'>
                      <p className="font-semibold">Sofa Cum Bed</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>
                          <Link href="/categories/sofa-cum-bed">Wooden Sofa Cum Bed</Link>
                        </li>
                      </ul>
                    </div>

                    <div className='col'>
                      <p className="font-semibold">Sofa Sets</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>
                          <Link href="/categories/l-shape-sofa">L Shape Sofa</Link>
                        </li>
                        <li>
                          <Link href="/categories/1-seater-sofa">1 Seater Sofa</Link>
                        </li>
                        <li>
                          <Link href="/categories/2-seater-sofa">2 Seater Sofa</Link>
                        </li>
                        <li>
                          <Link href="/categories/3-seater-sofa">3 Seater Sofa</Link>
                        </li>
                        <li>
                          <Link href="/categories/wooden-sofa-set">Wooden Sofa Sets</Link>
                        </li>
                        <li>
                          <Link href="/categories/sofa-cover">Sofa Cover</Link>
                        </li>
                        <li>
                          <Link href="/categories/normal">Normal</Link>
                        </li>
                      </ul>
                    </div>

                    <div className='col'>
                      <p className="font-semibold">Swing Jhula</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>
                          <a href="#">Wooden Jhula</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </li>
                <li className="relative group">
                  <button className='flex items-center'>Pages <FaCaretDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow p-4 w-64">
                    <ul className="text-sm mt-2 space-y-1">
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/shopping-cart">Cart</Link>
                      </li>
                      <li>
                        <a href="#">Checkout</a>
                      </li>
                      <li>
                        <Link href="/frequent-questions">Frequently asked questions</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/product-server" className="hover:text-blue-600">
                    Product Server
                  </Link>
                </li>
              </ul>
            </nav>

            {menuOpen && (
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setMenuOpen(false)}
              />
            )}

            <div
              className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="p-4 space-y-4">

                {/* Close Button */}
                <button
                  className="text-xl mb-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <ImCross />
                </button>

                {/* Home */}
                <div>
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold"
                  >
                    Home
                  </Link>
                </div>

                {/* Living Menu */}
                <div>
                  <button
                    className="w-full flex justify-between items-center font-semibold"
                    onClick={() => toggleMenu("living")}
                  >
                    Living
                    {openMenu === "living" ? <FaCaretUp /> : <FaCaretDown />}
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${openMenu === "living" ? "max-h-40 mt-2" : "max-h-0"
                    }`}>
                    <ul className="pl-4 text-sm space-y-1">
                      <li>
                        <Link href="/categories" onClick={() => setMenuOpen(false)}>
                          Side and End Tables
                        </Link>
                      </li>
                      <li>Nest Of Tables</li>
                      <li>Coffee Tables</li>
                    </ul>
                  </div>
                </div>

                {/* Sofa Menu */}
                <div>
                  <button
                    className="w-full flex justify-between items-center font-semibold"
                    onClick={() => toggleMenu("sofa")}
                  >
                    Sofa
                    {openMenu === "sofa" ? <FaCaretUp /> : <FaCaretDown />}
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${openMenu === "sofa" ? "max-h-40 mt-2" : "max-h-0"
                    }`}>
                    <ul className="pl-4 text-sm space-y-1">
                      <li>1 Seater</li>
                      <li>2 Seater</li>
                      <li>3 Seater</li>
                    </ul>
                  </div>
                </div>

                {/* Other Links */}
                <div>
                  <Link className='font-semibold' href="/about-us" onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                </div>

                <div>
                  <Link className='font-semibold' href="/shopping-cart" onClick={() => setMenuOpen(false)}>
                    Cart
                  </Link>
                </div>

                <div>
                  <Link className='font-semibold' href="/contact-us" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </header>

    </div>
  )
}
