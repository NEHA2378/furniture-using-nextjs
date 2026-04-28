"use client";

import { reduxStore } from '@/app/Redux Store/reduxStore';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FavoriteProvider } from '@/app/(with-header)/context/FavoriteContext';

export default function CommonLayout({ children }) {
    return (
        <Provider store={reduxStore}>

            <FavoriteProvider>
                <ToastContainer />
                {children}
            </FavoriteProvider>

        </Provider>
    );
}