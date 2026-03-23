import React from 'react'

export default function Header() {
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
          <a href="#" className="hover:text-blue-600">
            Login / Register
          </a>
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
          <span>❤️</span>
          {/* Cart */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              🛒 <span>Rs. 0.00</span>
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              0
            </span>
            {/* Mini Cart */}
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border p-4 hidden group-hover:block">
              <h3 className="font-semibold mb-2">Cart</h3>
              <p className="text-center text-gray-500">
                Your shopping cart is empty!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header Bottom */}
  <div className="sticky top-0 bg-white shadow">
    <div className="max-w-7xl mx-auto px-4">
      <nav className="flex justify-between py-3">
        {/* Menu */}
        <ul className="hidden lg:flex gap-6 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          {/* Living Dropdown */}
          <li className="relative group">
            <button>Living ▼</button>
            <div className="absolute hidden group-hover:block bg-white shadow p-4 w-64">
              <p className="font-semibold">Tables</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>
                  <a href="#">Side and End Tables</a>
                </li>
                <li>
                  <a href="#">Nest Of Tables</a>
                </li>
                <li>
                  <a href="#">Coffee Tables</a>
                </li>
              </ul>
            </div>
          </li>
          {/* Sofa Dropdown */}
          <li className="relative group">
            <button>Sofa ▼</button>
            <div className="absolute hidden group-hover:block bg-white shadow p-4 w-64">
              <p className="font-semibold">Sofa Sets</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>
                  <a href="#">1 Seater</a>
                </li>
                <li>
                  <a href="#">2 Seater</a>
                </li>
                <li>
                  <a href="#">3 Seater</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

    </div>
  )
}
