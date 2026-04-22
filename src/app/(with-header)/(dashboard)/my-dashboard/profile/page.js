"use client"
import axios from "axios";
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

export default function page() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;

    const [formData, setFormData] = useState({
        title: "",
        name: "",
        email: "nehacoder44@gmail.com",
        mobile: "",
        address: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const [selectedTitle, setSelectedTitle] = useState('')
    const [userProfile, setUserProfile] = useState('')


    useEffect(() => {
        axios.post(`${apiBaseUrl}/user/view-profile`, {}, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('user_login')}`
            }
        })
            .then((res) => {
                if (res.data._status) {
                    setUserProfile(res.data._userProfile)
                    setSelectedTitle(res.data._userProfile.gender)
                }
                else {
                    toast.error(res.data._message)
                }
            })
            .catch(() => {
                toast.error("Something went wrong")
            })

    }, [])

    const updateProfile = (e) => {
        e.preventDefault()

        axios.post(`${apiBaseUrl}/user/update-profile`, e.target, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('user_login')}`
            }
        })
            .then((res) => {
                if (res.data._status) {
                    toast.success(res.data._message)
                }
                else {
                    toast.error(res.data._message)
                }
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
    }
    return (
        <div className="w-full mx-auto rounded">
            <h2 className="text-2xl font-semibold mb-5">My Profile</h2>

            <form className="border border-gray-400 rounded-md p-5" onSubmit={updateProfile}>

                {/* Title */}
                <div className="mb-4">

                    <div className="flex gap-4">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="1"
                                checked={selectedTitle == '1'}
                                onChange={(e) => setSelectedTitle(e.target.value)}
                            /> Mr.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="2"
                                checked={selectedTitle == '2'}
                                onChange={(e) => setSelectedTitle(e.target.value)}
                            /> Mrs.
                        </label>
                    </div>
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label className="block mb-2">Name*</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={userProfile.name}
                        onChange={handleChange}
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-2">Email*</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={userProfile.email}
                        className="w-full border p-2 bg-gray-100 border-gray-400 rounded-md"
                        readOnly
                    />
                </div>

                {/* Mobile */}
                <div className="mb-4">
                    <label className="block mb-2">Mobile Number*</label>
                    <input
                        type="text"
                        name="mobile_number"
                        defaultValue={userProfile.mobile_number}
                        onChange={handleChange}
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label className="block mb-2">Address*</label>
                    <textarea
                        name="address"
                        defaultValue={userProfile.address}
                        onChange={handleChange}
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                {/* Button */}
                <button className="bg-black text-white px-5 py-2 rounded">
                    Update
                </button>

            </form>
        </div>
    )
}
