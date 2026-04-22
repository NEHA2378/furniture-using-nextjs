import React from 'react'

export default function Orders() {
    return (
        <div className='min-w-full'>
            <h2 className='text-2xl mb-5 font-semibold'>Orders</h2>
            <table className="w-full border border-gray-200 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 border">Order</th>
                        <th className="p-3 border">Date</th>
                        <th className="p-3 border">Status</th>
                        <th className="p-3 border">Total</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="p-3 border">1</td>
                        <td className="p-3 border">May 10, 2018</td>
                        <td className="p-3 border text-green-600 font-medium">Completed</td>
                        <td className="p-3 border">Rs. 25.00 for 1 item</td>
                        <td className="p-3 border">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                View
                            </button>
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td className="p-3 border">2</td>
                        <td className="p-3 border">May 10, 2018</td>
                        <td className="p-3 border text-yellow-600 font-medium">Processing</td>
                        <td className="p-3 border">Rs. 17.00 for 1 item</td>
                        <td className="p-3 border">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                View
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
