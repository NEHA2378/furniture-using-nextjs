'use client'
import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ShoppingCart() {
    const [qty, setQty] = useState(1);
    return (
        <div>
            <div className='max-w-[1320px] mx-auto mb-10'>
                <Breadcrumb title={"My Shopping Cart"} />
                <div className=' my-10'>
                    <img
                        src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                        className="img-fluid rounded-md mx-auto"
                        alt=""
                    />
                    <p className='text-center py-10'>Your Shopping Cart is empty!</p>

                </div>

                <div className=' p-4'>
                    <table className='w-full border border-gray-300'>
                        <thead className='border-b border-b-3 border-yellow-700'>
                            <tr className='font-bold bg-amber-50'>
                                <td className='p-3 text-center'>Delete</td>
                                <td className='p-3 text-center'>Image</td>
                                <td className='p-3 text-center'>Product</td>
                                <td className='p-3 text-center'>Price</td>
                                <td className='p-3 text-center'>Quantity</td>
                                <td className='p-3 text-center'>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-3 text-center border border-gray-300'><RiDeleteBin6Line className='mx-auto' /></td>
                                <td className='p-3 text-center border border-gray-300'><img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg' className='w-[200px] mx-auto' /></td>
                                <td className='p-3 text-center border border-gray-300'>Evan Coffee Table</td>
                                <td className='p-3 text-center border border-gray-300'>Rs. 2,300</td>
                                <td className='p-3 text-center border border-gray-300'>Quantity <input type='number' className='border w-[35px]' value={qty}
                                    onChange={(e) => setQty(e.target.value)} /></td>
                                <td className='p-3 text-center border border-gray-300'>Rs. 2,300</td>
                            </tr>
                        </tbody>

                    </table>
                    <div className='flex justify-end'>
                        <button className='bg-black text-white px-5 py-2 mx-2 my-2 rounded-md'>Update Cart</button>
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='border border-gray-300'>
                        <div className='p-3 font-bold bg-black'>
                            <h2 className='text-white'>COUPON</h2>
                        </div>
                        <div className='p-5'>
                            <p>Enter your coupon code if you have one.</p>
                            <form className='mt-4'>
                                <input className='border p-2' type='text' placeholder='Coupon Code' required={true}/>
                                <button className='bg-black text-white px-3 py-2 rounded-sm ms-4'>APPLY COUPON</button>
                            </form>
                        </div>
                    </div>

                    <div className='border border-gray-300'>
                        <div className='p-3 font-bold bg-black'>
                            <h2 className='text-white uppercase'>Cart Totals</h2>
                        </div>
                        <div className='p-5'>
                            <div className='flex justify-between font-bold mb-3'>
                                <p>Subtotal</p>
                                <p>Rs. 2,300</p>
                            </div>

                            <div className='flex justify-between font-bold mb-3'>
                                <p>Discount (-)</p>
                                <p>Rs. 0</p>
                            </div>

                            <div className='flex justify-between font-bold mb-3'>
                                <p>Total</p>
                                <p>Rs. 2,300</p>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-yellow-700 text-white px-3 py-2 rounded-sm ms-4 uppercase'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
