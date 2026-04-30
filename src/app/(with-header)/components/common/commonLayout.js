"use client";

import { reduxStore } from '@/app/Redux Store/reduxStore';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FavoriteProvider } from '@/app/(with-header)/context/FavoriteContext';
import { FilterProvider } from '../../categories/FilterContext';

export default function CommonLayout({ children }) {
    return (
        <Provider store={reduxStore}>
            <FavoriteProvider>
                <FilterProvider>
                    <ToastContainer />
                    {children}
                </FilterProvider>
            </FavoriteProvider>
        </Provider>
    );
}