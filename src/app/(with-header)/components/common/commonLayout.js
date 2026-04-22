"use client"
import { reduxStore } from '@/app/Redux Store/reduxStore'
import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export default function CommonLayout({ children }) {
    return (
        <>
            <Provider store={reduxStore}>
                <ToastContainer/>
                {children}
            </Provider>
        </>

    )
}
