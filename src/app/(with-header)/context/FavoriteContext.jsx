"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { productData } from "@/app/(with-header)/Data/ProductData";
import { getWishlistAPI, toggleWishlistAPI } from "../my-whishlist/whishlist";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const getToken = () => {
    const raw = Cookies.get("user_login");
    if (!raw) return null;
    try { return JSON.parse(raw)?.token || raw; }
    catch { return raw; }
  };

  // Load wishlist from DB on mount
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    const fetchWishlist = async () => {
      try {
        const res = await getWishlistAPI();
        const data = res?.data?.data ?? [];

        // Merge product_id with productData to get full product info
        const merged = data.map((item) => {
          return productData.find(
            (p) => Number(p.id) === Number(item.product_id)
          );
        }).filter(Boolean); // remove any unmatched

        setFavorites(merged);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWishlist();
  }, []);

  // Toggle favorite - add or remove from DB
  const toggleFavorite = async (product) => {
    const token = getToken();
    if (!token) return;

    try {
      await toggleWishlistAPI(product.id);

      // Optimistic UI update
      setFavorites((prev) => {
        const exists = prev.find((item) => item.id === product.id);
        if (exists) {
          return prev.filter((item) => item.id !== product.id);
        } else {
          return [...prev, product];
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);