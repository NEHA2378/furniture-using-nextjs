"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Link from 'next/link';
import axios from 'axios';

export default function ChangePassword() {
    let { userid } = useParams()
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;

    let resetPass = (e) => {
        e.preventDefault()
        let obj = {
            newPassword : e.target.newPassword.value,
            confirmPassword : e.target.confirmPassword.value
        }
        axios.put(`${apiBaseUrl}/user/reset-password/${userid}`, obj)
        .then((res) => res.data)
        .then((finalres) => {
            if(finalres._status){
                alert(finalres._message)
            }
            else{
                alert(finalres._message)
            }
        })
        
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h1>
                <p className="text-gray-600 mb-6">Update your password to keep your account secure</p>

                <form onSubmit={resetPass} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input name='newPassword' type="password" placeholder="Enter new password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input name='confirmPassword' type="password" placeholder="Confirm new password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mt-6">Update Password</button>

                    <Link href = {"/login-register"}>
                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mt-6">Back to Login</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
