"use client"
import Link from "next/link"
import React from 'react'

export default function DbSidebar() {
    return (
            <div className="p-4">
                <ul className="space-y-3">
                    <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard">My Dashboard</Link></li>
                    <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/orders">Orders</Link></li>
                    <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/profile">Profile</Link></li>
                    <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/address">Addresses</Link></li>
                    <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><Link href="/my-dashboard/change-password">Change Password</Link></li>
                    <li className="bg-yellow-600 px-5 py-2 rounded-md text-white text-xl"><button>Logout</button></li>
                </ul>
            </div>
    )
}
