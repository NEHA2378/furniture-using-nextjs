"use client"
import axios from "axios";
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const getToken = () => {
    const raw = Cookies.get('user_login');
    if (!raw) return null;
    try { return JSON.parse(raw)?.token || raw; } catch { return raw; }
};

export default function Page() {

    const [selectedTitle, setSelectedTitle] = useState('');
    const [userProfile, setUserProfile] = useState({});
    const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;

    useEffect(() => {
        axios.post(`${apiBaseUrl}/user/view-profile`, {}, {
            headers: {
                'Authorization': `Bearer ${getToken()}` //fixed token
            }
        })
            .then((res) => {
                console.log(res.data);
                if (res.data._status) {
                    setUserProfile(res.data._userProfile);
                    //convert to string since radio values are strings "1" / "2"
                    setSelectedTitle(String(res.data._userProfile.gender));
                } else {
                    toast.error(res.data._message);
                }
            })
            .catch(() => toast.error("Something went wrong"));
    }, []);

    const updateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        //include selected gender since it's controlled separately
        formData.set('gender', selectedTitle);

        axios.post(`${apiBaseUrl}/user/update-profile`, Object.fromEntries(formData), {
            headers: {
                'Authorization': `Bearer ${getToken()}` //fixed token
            }
        })
            .then((res) => {
                if (res.data._status) toast.success(res.data._message);
                else toast.error(res.data._message);
            })
            .catch(() => toast.error("Something went wrong"));
    };

    return (
        <div className="w-full mx-auto rounded">
            <h2 className="text-2xl font-semibold mb-5">My Profile</h2>

            <form className="border border-gray-400 rounded-md p-5" onSubmit={updateProfile}>

                {/* Gender */}
                <div className="mb-4 flex gap-4">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="1"
                            checked={selectedTitle === '1'}
                            onChange={(e) => setSelectedTitle(e.target.value)}
                        /> Mr.
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="2"
                            checked={selectedTitle === '2'}
                            onChange={(e) => setSelectedTitle(e.target.value)}
                        /> Mrs.
                    </label>
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label className="block mb-2">Name*</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={userProfile.name}
                        key={userProfile.name} //forces re-render when data loads
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
                        key={userProfile.email} //forces re-render when data loads
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
                        key={userProfile.mobile_number} //forces re-render when data loads
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
                        key={userProfile.address} //forces re-render when data loads
                        className="w-full border p-2 border-gray-400 rounded-md"
                        required
                    />
                </div>

                <button className="bg-black text-white px-5 py-2 rounded">Update</button>
            </form>
        </div>
    );
}