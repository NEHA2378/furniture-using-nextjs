import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function MyWhishList() {
  return (
    <div>
      <div className='max-w-[1320px] mx-auto mb-10'>
        <Breadcrumb title={"My Whishlist"} />
        <div className='my-10'>
          <img
            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/wishlist-Empty.jpg"
            className="img-fluid rounded-md mx-auto"
            alt=""
          />
          <p className='text-center py-10'>Your wishlist is empty!</p>

        </div>
        <div className=' p-4'>
          <table className='w-full border border-gray-300'>
            <thead className='border-b border-b-3 border-yellow-700'>
              <tr className='font-bold bg-amber-50'>
                <td className='p-3 text-center'>Delete</td>
                <td className='p-3 text-center'>Image</td>
                <td className='p-3 text-center'>Product</td>
                <td className='p-3 text-center'>Price</td>
                <td className='p-3 text-center'>Stock Status</td>
                <td className='p-3 text-center'>Add To Cart</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-3 text-center border border-gray-300'><RiDeleteBin6Line className='mx-auto' /></td>
                <td className='p-3 text-center border border-gray-300'><img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg' className='w-[200px] mx-auto' /></td>
                <td className='p-3 text-center border border-gray-300'>Evan Coffee Table</td>
                <td className='p-3 text-center border border-gray-300'>Rs. 2,300</td>
                <td className='p-3 text-center border border-gray-300'>Out of Stock</td>
                <td className='p-3 text-center border border-gray-300'>
                  <button className='bg-yellow-700 text-white px-5 py-2 mx-2 my-2 rounded-md'>Add To Cart</button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
