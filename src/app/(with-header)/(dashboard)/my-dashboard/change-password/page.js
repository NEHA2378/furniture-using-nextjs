import React from 'react'

export default function ChangePassword() {
    return (
        <div className="w-full mx-auto rounded">
            <h2 className="text-2xl font-semibold mb-5">Change Password</h2>

            <form className="border border-gray-400 p-5 rounded-md">
                <div className="mb-4">
                    <label className="block mb-2">Current Password*</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2">New Password*</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Confirm New Password*</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                <button className="bg-black text-white px-4 py-2 rounded-md">CHANGE PASSWORD</button>
            </form>
        </div>
    )
}
