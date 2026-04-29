"use client";

import { useFavorites } from "@/app/(with-header)/context/FavoriteContext";
import { FaHeart } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addToCart, getCart } from "../shopping-cart/cart";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function WishlistPage() {

  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();

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


  return (
    <div className="max-w-[1320px] mx-auto px-4 py-10">

      <Breadcrumb title={"My Whishlist"} />

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
              <Link href={`/my-products/${product.id}`}>
                <img
                  src={product.image}
                  className="w-full h-[200px] object-contain"
                  alt={product.name}
                />
              </Link>

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

          ))}

        </div>

      )}
    </div>
  );
}