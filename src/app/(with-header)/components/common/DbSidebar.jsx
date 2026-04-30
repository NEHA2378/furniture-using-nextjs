"use client"
import Link from "next/link"
import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { logout } from '@/app/Redux Store/loginSlice'
import { setCartCount } from '@/app/Redux Store/cartSlice'

export default function DbSidebar() {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('user_login')
        dispatch(logout())
        dispatch(setCartCount(0))
        router.push('/')
    }

    return (
        <div className="p-4">
            <ul className="space-y-3">
                <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard">My Dashboard</Link></li>
                <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/orders">Orders</Link></li>
                <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/profile">Profile</Link></li>
                <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/change-password">Change Password</Link></li>
                <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl">
                    <button onClick={handleLogout} className="w-full text-left">Logout</button>
                </li>
            </ul>
        </div>
    )
}