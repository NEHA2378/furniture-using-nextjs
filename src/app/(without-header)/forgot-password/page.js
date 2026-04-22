"use client"
import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function ForgotPassword() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;
    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')
    let [buttonLoading, setButtonLoading] = useState(false)

    let forgotPasswordSubmit = (e) => {
        setError('')
        setSuccess('')
        setButtonLoading(true)
        e.preventDefault()
        let obj = {
            email: e.target.email.value
        }
        axios.post(`${apiBaseUrl}/user/forgot-password`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes._status) {
                    e.target.reset()
                    setButtonLoading(false)
                    setSuccess(finalRes._message)
                }
                else {
                    setError(finalRes._message)
                }
            })
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Reset your password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                </div>
                <form onSubmit={forgotPasswordSubmit} className="mt-8 space-y-6">
                    <div>

                        {
                            error != '' && <p className='text-red-500'>{error}</p>
                        }

                        {
                            success != '' && <p className='text-green-500'>{success}</p>
                        }

                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={buttonLoading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Send reset link
                        {
                            buttonLoading ? " Loading..." : ""
                        }
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Remember your password?{' '}
                    <Link href="/login-register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
