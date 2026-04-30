"use client";

import { reduxStore } from '@/app/Redux Store/reduxStore';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FavoriteProvider } from '@/app/(with-header)/context/FavoriteContext';
import { FilterProvider } from '../../categories/FilterContext';
import Cookies from 'js-cookie';
import { login_register } from '@/app/Redux Store/loginSlice';

function AuthRehydrate() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = Cookies.get('user_login');
        if (token) {
            dispatch(login_register(token));
        }
    }, []);

    return null; // renders nothing, just runs the effect
}

export default function CommonLayout({ children }) {
    return (
        <Provider store={reduxStore}>
            <AuthRehydrate />   {/* ← add this */}
            <FavoriteProvider>
                <FilterProvider>
                    <ToastContainer />
                    {children}
                </FilterProvider>
            </FavoriteProvider>
        </Provider>
    );
}