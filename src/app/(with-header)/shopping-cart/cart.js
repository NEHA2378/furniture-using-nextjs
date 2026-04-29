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

export const addToCart = (productId) => {
    const token = getToken();

    return axios.post(
        `${apiBaseUrl}/user/add-to-cart`,
        { product_id: productId },
        {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        }
    );
};

export const removeFromCart = (productId) => {
    const token = getToken();

    return axios.post(
        `${apiBaseUrl}/user/remove-from-cart`,
        { product_id: productId },
        {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        }
    );
};

export const getCart = () => {
    const token = getToken();

    return axios.get(
        `${apiBaseUrl}/user/cart`,
        {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        }
    );
};

export const updateCartQuantity = (productId, quantity) => {
    const token = getToken();

    return axios.post(
        `${apiBaseUrl}/user/update-cart-quantity`,
        { product_id: productId, quantity },
        {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        }
    );
};