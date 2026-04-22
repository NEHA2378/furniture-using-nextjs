"use client"
import React from 'react'

export default function Address() {

  const handleSubmit = (e, type) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData.entries())
    console.log(type, data)
  }
    return (
        <div className='min-w-full'>
            <h2 className='text-2xl mb-5 font-semibold'>Addresses</h2>
            <div className="grid grid-cols-2 gap-6">

                
                <form onSubmit={(e) => handleSubmit(e, "Billing")} className="border p-5 rounded">
                    <h2 className="text-lg font-semibold mb-4">Billing Address</h2>

                    <input name="billing_name" placeholder="Billing Name*" className="w-full border p-2 mb-3" required />
                    <input name="billing_email" type="email" placeholder="Billing Email*" className="w-full border p-2 mb-3" required />
                    <input name="billing_mobile" placeholder="Billing Mobile Number*" className="w-full border p-2 mb-3" required />
                    <textarea name="billing_address" placeholder="Billing Address*" className="w-full border p-2 mb-3" required />

                    <select name="billing_country" className="w-full border p-2 mb-3" required>
                        <option value="">Select Country</option>
                        <option>India</option>
                        <option>USA</option>
                    </select>

                    <input name="billing_state" placeholder="State*" className="w-full border p-2 mb-3" required />
                    <input name="billing_city" placeholder="City*" className="w-full border p-2 mb-3" required />

                    <button className="bg-black text-white px-4 py-2">Update</button>
                </form>

                
                <form onSubmit={(e) => handleSubmit(e, "Shipping")} className="border p-5 rounded">
                    <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>

                    <input name="shipping_name" placeholder="Shipping Name*" className="w-full border p-2 mb-3" required />
                    <input name="shipping_email" type="email" placeholder="Shipping Email*" className="w-full border p-2 mb-3" required />
                    <input name="shipping_mobile" placeholder="Shipping Mobile Number*" className="w-full border p-2 mb-3" required />
                    <textarea name="shipping_address" placeholder="Shipping Address*" className="w-full border p-2 mb-3" required />

                    <select name="shipping_country" className="w-full border p-2 mb-3" required>
                        <option value="">Select Country</option>
                        <option>India</option>
                        <option>USA</option>
                    </select>

                    <input name="shipping_state" placeholder="State*" className="w-full border p-2 mb-3" required />
                    <input name="shipping_city" placeholder="City*" className="w-full border p-2 mb-3" required />

                    <button className="bg-black text-white px-4 py-2">Update</button>
                </form>

            </div>
        </div>
    )
}
