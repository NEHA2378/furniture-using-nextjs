import axios from "axios";
import Cookies from "js-cookie";

const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;

const getToken = () => {
    const raw = Cookies.get("user_login");
    if (!raw) return null;
    try {
        return JSON.parse(raw)?.token || raw;
    } catch {
        return raw;
    }
};

export const toggleWishlistAPI = (productId) => {
    const token = getToken();
    return axios.post(
        `${apiBaseUrl}/user/wishlist-toggle`,
        { product_id: productId },
        { headers: { Authorization: token ? `Bearer ${token}` : "" } }
    );
};

export const getWishlistAPI = () => {
    const token = getToken();
    return axios.get(
        `${apiBaseUrl}/user/wishlist`,
        { headers: { Authorization: token ? `Bearer ${token}` : "" } }
    );
};