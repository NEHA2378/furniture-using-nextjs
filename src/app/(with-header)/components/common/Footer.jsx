import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-50 text-gray-700">
  <div className="max-w-7xl mx-auto px-4">
    {/* Footer Top */}
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Contact Us */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <p className="mb-2">Address: Claritas est etiam processus dynamicus</p>
        <p className="mb-2">
          Phone:{" "}
          <a href="tel:98745612330" className="hover:text-blue-600">
            98745612330
          </a>
        </p>
        <p className="mb-4">Email: furniture@gmail.com</p>
        <div className="flex gap-3 text-xl">
          <a href="https://instagram.com" target="_blank">
            📘
          </a>
          <a href="https://instagram.com" target="_blank">
            📸
          </a>
          <a href="https://twitter.com" target="_blank">
            🐦
          </a>
          <a href="https://youtube.com" target="_blank">
            ▶️
          </a>
          <a href="https://telegram.com" target="_blank">
            ✈️
          </a>
        </div>
      </div>
      {/* Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Information</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-blue-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Frequently Questions
            </a>
          </li>
        </ul>
      </div>
      {/* My Account */}
      <div>
        <h3 className="text-lg font-semibold mb-4">My Account</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-blue-600">
              My Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Wishlist
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Cart
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Checkout
            </a>
          </li>
        </ul>
      </div>
      {/* Products */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Top Rated Products</h3>
        {/* Product 1 */}
        <div className="flex gap-3 mb-4">
          <img
            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg"
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="text-sm text-gray-500">Cabinets and Sideboard</p>
            <h4 className="font-medium">Louise Cabinet</h4>
            <p className="text-sm">
              <span className="line-through text-gray-400">Rs. 28,000</span>
              <span className="text-red-500 ml-2">Rs. 23,000</span>
            </p>
          </div>
        </div>
        {/* Product 2 */}
        <div className="flex gap-3">
          <img
            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg"
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="text-sm text-gray-500">Display Unit</p>
            <h4 className="font-medium">Dorian Shoe Rack</h4>
            <p className="text-sm">
              <span className="line-through text-gray-400">Rs. 3,500</span>
              <span className="text-red-500 ml-2">Rs. 2,800</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Middle */}
    <div className="border-t py-4">
      <ul className="flex flex-wrap justify-center gap-4 text-sm">
        <li>
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Online Store
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Terms Of Use
          </a>
        </li>
      </ul>
    </div>
    {/* Footer Bottom */}
    <div className="border-t py-4 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>All Rights Reserved By Furniture | © 2026</p>
      <img
        src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
        className="mt-2 md:mt-0 h-8"
      />
    </div>
  </div>
</footer>

    </div>
  )
}
