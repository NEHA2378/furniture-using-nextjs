"use client"
import { productData } from "@/app/(with-header)/Data/ProductData";
import Breadcrumb from "@/app/(with-header)/components/common/Breadcrumb";
import { use, useEffect, useState } from "react";
import { useFavorites } from "@/app/(with-header)/context/FavoriteContext";
import { addToCart, getCart } from "@/app/(with-header)/shopping-cart/cart";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

export default function ProductPage({ params }) {
  const { id } = use(params);

  const product = productData.find((item) => item.id === Number(id));

  const { toggleFavorite, isFavorite } = useFavorites();
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

  // ---- Fetch Cart ----
  const fetchCart = async () => {
    try {
      const res = await getCart();
      const cartData = res?.data?.data ?? [];
      const ids = cartData.map((item) => Number(item.product_id));
      setCartItems(ids);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ---- Add to Cart ----
  const handleAddToCart = async (productId) => {
    const token = getToken();

    if (!token) {
      toast.error("Please login first to add items to cart");
      router.push("/login-register");
      return;
    }

    try {
      setLoadingId(productId);
      await addToCart(productId);
      setCartItems((prev) => [...prev, Number(productId)]);
      toast.success("Product added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product to cart");
    } finally {
      setLoadingId(null);
    }
  };

  // ---- Toggle Favourite ----
  const handleFavorite = (product) => {
    const token = getToken();
    if (!token) {
      toast.error("Please login first to add to wishlist");
      router.push("/login-register");
      return;
    }
    toggleFavorite(product);
  };

  if (!product) {
    return <div className="text-center my-20">Product not found</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto my-10">

      <div className="mb-5 text-center">
        <Breadcrumb title={product.title} />
      </div>

      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

        {/* Product Image */}
        <img
          src={product.image}
          className="w-full h-[400px] object-cover rounded-lg"
          alt={product.name}
        />

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-500">{product.title}</p>

          <p className="line-through text-gray-400 mt-2">
            Rs. {product.originalPrice}
          </p>
          <p className="text-2xl font-semibold">
            Rs. {product.price}
          </p>

          <p className="text-xl font-semibold mt-3">Description:</p>
          <p className="text-gray-500">{product.description}</p>

          <p className="text-xl font-semibold mt-3">
            Materials: {product.Material}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-6">

            {/* Favourite Button */}
            <button
              onClick={() => handleFavorite(product)}
              className={`p-3 border rounded-full transition ${isFavorite(product.id)
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              <FaHeart />
            </button>

            {/* Cart Button */}
            {isInCart(product.id) ? (
              <Link href="/shopping-cart">
                <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 w-full">
                  Go to Cart
                </button>
              </Link>
            ) : (
              <button
                onClick={() => handleAddToCart(product.id)}
                disabled={loadingId === product.id}
                className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 disabled:opacity-50 w-full"
              >
                {loadingId === product.id ? "Adding..." : "Add to Cart"}
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}