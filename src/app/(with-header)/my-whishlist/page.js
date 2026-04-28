"use client";

import { useFavorites } from "@/app/(with-header)/context/FavoriteContext";
import { FaHeart } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";

export default function WishlistPage() {

  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-10">

      <Breadcrumb title={"My Whishlist"}/>

      {favorites.length === 0 ? (

        //EMPTY STATE
        <div className="text-center my-20">
          <img
            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/wishlist-Empty.jpg"
            className="mx-auto mb-6"
            alt="Empty Wishlist"
          />
          <p className="text-lg">Your wishlist is empty</p>
        </div>

      ) : (

        //FAVORITE PRODUCTS
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {favorites.map((product) => (

            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-4"
            >
              <img
                src={product.image}
                className="w-full h-[200px] object-contain"
                alt={product.name}
              />

              <h3 className="mt-3 font-semibold">{product.name}</h3>

              <p className="text-gray-500 text-sm line-clamp-2">
                {product.description}
              </p>

              <p className="text-yellow-600 font-bold mt-2">
                ₹{product.price}
              </p>

              <div className="flex justify-between items-center mt-3">

                {/*Remove from wishlist */}
                <button
                  onClick={() => toggleFavorite(product)}
                  className="p-2 bg-red-500 text-white rounded-full"
                >
                  <FaHeart />
                </button>

                <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                  Add to Cart
                </button>

              </div>
            </div>

          ))}

        </div>

      )}
    </div>
  );
}