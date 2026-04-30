"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const getToken = () => {
    const raw = Cookies.get('user_login')
    if (!raw) return null
    try { return JSON.parse(raw)?.token || raw } catch { return raw }
}

const orderStatusMap = {
    1: { label: "Pending", color: "text-yellow-600" },
    2: { label: "Confirmed", color: "text-blue-600" },
    3: { label: "Shipped", color: "text-purple-600" },
    4: { label: "Delivered", color: "text-green-600" },
    5: { label: "Cancelled", color: "text-red-600" },
    7: { label: "Failed", color: "text-red-800" },
}

export default function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH

    useEffect(() => {
        axios.get(`${apiBaseUrl}/user/orders`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
            .then((res) => {
                if (res.data._status) {
                    setOrders(res.data._data)
                } else {
                    toast.error(res.data._message)
                }
            })
            .catch(() => toast.error("Failed to fetch orders"))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p className="text-center py-10 text-gray-500">Loading orders...</p>

    return (
        <div className='w-full overflow-x-auto'>
            <h2 className='text-2xl mb-5 font-semibold'>Orders</h2>

            {orders.length === 0 ? (
                <div className='text-center py-10'>
                    <img
                        src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                        className="mx-auto rounded-md mb-4"
                        alt="No orders"
                    />
                    <p className='text-gray-500'>You have no orders yet.</p>
                </div>
            ) : (
                <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border">#</th>
                            <th className="p-3 border">Order Number</th>
                            <th className="p-3 border">Date</th>
                            <th className="p-3 border">Status</th>
                            <th className="p-3 border">Net Amount</th>
                            <th className="p-3 border">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => {
                            const status = orderStatusMap[order.order_status] || { label: "Unknown", color: "text-gray-500" }
                            const date = new Date(order.created_at).toLocaleDateString('en-IN', {
                                day: 'numeric', month: 'short', year: 'numeric'
                            })
                            return (
                                <tr key={order._id} className="text-center hover:bg-gray-50">
                                    <td className="p-3 border">{index + 1}</td>
                                    <td className="p-3 border font-medium">{order.order_number}</td>
                                    <td className="p-3 border">{date}</td>
                                    <td className={`p-3 border font-semibold ${status.color}`}>
                                        {status.label}
                                    </td>
                                    <td className="p-3 border">₹{order.net_amount?.toLocaleString()}</td>
                                    <td className="p-3 border">₹{order.total_amount?.toLocaleString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}