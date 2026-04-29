"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { IoMenuSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import { productData } from '@/app/(with-header)/Data/ProductData';
import { useRouter } from 'next/navigation';

export default function Header() {

  const userLogin = useSelector((state) => state.login.userLogin)
  const cartCount = useSelector((state) => state.cart.cartCount) // ✅ cart count

  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // ── SEARCH STATE ──
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  const toggleMenu = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestions as user types
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length === 0) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const q = value.toLowerCase();
    const matched = productData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        (p.Material && p.Material.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    ).slice(0, 6); // max 6 suggestions

    setSuggestions(matched);
    setShowDropdown(true);
  };

  // On Enter or Search button click → go to search page
  const handleSearch = (q = searchQuery) => {
    const query = q.trim();
    if (!query) return;
    setShowDropdown(false);
    setSearchQuery(query);
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

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

                {/* ── SEARCH BAR ── */}
                <div ref={searchRef} className="relative hidden md:flex">
                  <div className="flex border rounded overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="px-3 py-1 outline-none w-[200px]"
                      value={searchQuery}
                      onChange={handleSearchInput}
                      onKeyDown={handleKeyDown}
                      onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
                    />
                    <button
                      className="px-3 bg-gray-200 hover:bg-yellow-600 hover:text-white transition"
                      onClick={() => handleSearch()}
                    >
                      🔍
                    </button>
                  </div>

                  {/* ── SUGGESTIONS DROPDOWN ── */}
                  {showDropdown && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg z-50 rounded-b">
                      {suggestions.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-yellow-50 cursor-pointer border-b last:border-b-0"
                          onClick={() => handleSearch(product.name)}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-gray-400">{product.title} · ₹{product.price}</p>
                          </div>
                        </div>
                      ))}
                      {/* View all results */}
                      <div
                        className="px-3 py-2 text-center text-sm text-yellow-700 font-semibold hover:bg-yellow-50 cursor-pointer"
                        onClick={() => handleSearch()}
                      >
                        View all results for "{searchQuery}"
                      </div>
                    </div>
                  )}
                </div>

                {/* Wishlist */}
                <Link href={"/my-whishlist"}><FaHeart /></Link>

                {/* Cart with badge */}
                <div className='relative'>
                  <Link href={"/shopping-cart"}>
                    <GiShoppingCart size={24} />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
                    {userLogin ? cartCount : 0}
                  </span>
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
                  <Link href="/" className="hover:text-blue-600">Home</Link>
                </li>
                <li className="relative group">
                  <button className='flex items-center'>Living <FaCaretDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow p-4 w-64">
                    <Link className='font-semibold block' href="/tables">Side and End Tables</Link>
                    <Link className='font-semibold block' href="/mirrors">Mirrors</Link>
                    <Link className='font-semibold block' href="/livings">Living Storage/ Collections</Link>
                  </div>
                </li>
                <li className="relative group">
                  <button className='flex items-center'>Sofa <FaCaretDown /></button>
                  <div className="absolute hidden group-hover:grid bg-white shadow p-4 w-[600px] grid grid-cols-3">
                    <div className='col'>
                      <p className="font-semibold">Sofa Cum Bed</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li><Link href="/categories/sofa-cum-bed">Wooden Sofa Cum Bed</Link></li>
                      </ul>
                    </div>
                    <div className='col'>
                      <p className="font-semibold">Sofa Sets</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li><Link href="/categories/l-shape-sofa">L Shape Sofa</Link></li>
                        <li><Link href="/categories/1-seater-sofa">1 Seater Sofa</Link></li>
                        <li><Link href="/categories/2-seater-sofa">2 Seater Sofa</Link></li>
                        <li><Link href="/categories/3-seater-sofa">3 Seater Sofa</Link></li>
                        <li><Link href="/categories/wooden-sofa-set">Wooden Sofa Sets</Link></li>
                        <li><Link href="/categories/sofa-cover">Sofa Cover</Link></li>
                        <li><Link href="/categories/normal">Normal</Link></li>
                      </ul>
                    </div>
                    <div className='col'>
                      <p className="font-semibold">Swing Jhula</p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li><Link href="/categories/wooden-jhula">Wooden Jhula</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <button className='flex items-center'>Pages <FaCaretDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow p-4 w-64">
                    <ul className="text-sm mt-2 space-y-1">
                      <li><Link href="/about-us">About Us</Link></li>
                      <li><Link href="/shopping-cart">Cart</Link></li>
                      <li><Link href="checkout">Checkout</Link></li>
                      <li><Link href="/frequent-questions">Frequently asked questions</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-blue-600">Contact Us</Link>
                </li>
                <li>
                  <Link href="/product-server" className="hover:text-blue-600">Product Server</Link>
                </li>
              </ul>
            </nav>

            {menuOpen && (
              <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)} />
            )}

            <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
              <div className="p-4 space-y-4">
                <button className="text-xl mb-2" onClick={() => setMenuOpen(false)}><ImCross /></button>

                {/* Mobile Search */}
                <div className="flex border rounded overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search product..."
                    className="px-3 py-1 outline-none flex-1 text-sm"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                  />
                  <button className="px-3 bg-gray-200" onClick={() => { handleSearch(); setMenuOpen(false); }}>🔍</button>
                </div>

                <div><Link href="/" onClick={() => setMenuOpen(false)} className="font-semibold">Home</Link></div>

                <div>
                  <button className="w-full flex justify-between items-center font-semibold" onClick={() => toggleMenu("living")}>
                    Living {openMenu === "living" ? <FaCaretUp /> : <FaCaretDown />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openMenu === "living" ? "max-h-40 mt-2" : "max-h-0"}`}>
                    <ul className="pl-4 text-sm space-y-1">
                      <li><Link className='font-semibold block' href="/tables">Side and End Tables</Link></li>
                      <li><Link className='font-semibold block' href="/mirrors">Mirrors</Link></li>
                      <li><Link className='font-semibold block' href="/livings">Living Storage/ Collections</Link></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <button className="w-full flex justify-between items-center font-semibold" onClick={() => toggleMenu("sofa")}>
                    Sofa {openMenu === "sofa" ? <FaCaretUp /> : <FaCaretDown />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openMenu === "sofa" ? "max-h-60 mt-2" : "max-h-0"}`}>
                    <ul className="pl-4 text-sm space-y-1">
                      <li><Link href="/categories/sofa-cum-bed">Wooden Sofa Cum Bed</Link></li>
                      <li><Link href="/categories/l-shape-sofa">L Shape Sofa</Link></li>
                      <li><Link href="/categories/1-seater-sofa">1 Seater Sofa</Link></li>
                      <li><Link href="/categories/2-seater-sofa">2 Seater Sofa</Link></li>
                      <li><Link href="/categories/3-seater-sofa">3 Seater Sofa</Link></li>
                      <li><Link href="/categories/wooden-jhula">Wooden Jhula</Link></li>
                    </ul>
                  </div>
                </div>

                <div><Link className='font-semibold' href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></div>
                <div><Link className='font-semibold' href="/shopping-cart" onClick={() => setMenuOpen(false)}>Cart</Link></div>
                <div><Link className='font-semibold' href="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}
