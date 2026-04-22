"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { login_register } from '@/app/Redux Store/loginSlice';
import Cookies from 'js-cookie'


export default function Auth() {
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEPATH;


    let [otpStatus, setOtpStatus] = useState(false)
    let router = useRouter()




    // let handleRegister=(e)=>{
    //     e.preventDefault()
    //     setOtpStatus(true)
    // }
    // let handlelogin=(e)=>{
    //     e.preventDefault()
    //     alert("Login Succesfully")
    //     router.push('/')
    // }

    let createUser = (e) => {
        e.preventDefault();

        let userObj = {
            name: e.target.name.value,
            email: e.target.email.value,
            mobile_number: e.target.mobile_number.value,
            address: e.target.address.value,
            password: e.target.password.value
        };

        axios.post(`${apiBaseUrl}/user/create`, userObj)
            .then((res) => res.data)
            .then((finalres) => {
                if (finalres._status) {
                    e.target.reset()
                    toast.success(finalres._message)
                    Cookies.set('user_login', finalres.token)
                    dispatch(login_register(finalres.token))
                    // navigate.push('/')
                }
                else {
                    toast.error(finalres._message)

                    if (finalres.errors) {
                        console.log("Validation errors:", finalres.errors)
                    }
                }
            })
            .catch((err) => {
                
                console.log("SERVER ERROR:", err)
                toast.error("Something went wrong")
            })

    };
    const userLogin = useSelector((data) => {
        return data.login.userLogin;

    })
    const dispatch = useDispatch()
    const navigate = useRouter()

    let loginUser = (e) => {
        e.preventDefault();



        let userObj = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        axios.post(`${apiBaseUrl}/user/login`, userObj)
            .then((res) => res.data)
            .then((finalres) => {
                if (finalres._status) {
                    e.target.reset()
                    toast.success(finalres._message)
                    Cookies.set('user_login', finalres.token)
                    dispatch(login_register(finalres.token))
                    navigate.push('/my-dashboard');

                }
                else {
                    toast.error(finalres._message)
                }
            })

    }
    

    // useEffect(() => {
    //     if (userLogin == 1) {
    //         navigate.push('/')
    //     }

    // }, [])

    return (
        <div>

            <div className='max-w-[1320px] mx-auto py-10 grid grid-cols-2 gap-5'>
                <div className='p-5 shadow-sm border border-[#ccc]'>
                    <h2 className='font-bold text-2xl mb-5'>Login</h2>
                    <form onSubmit={loginUser}>
                        <div className='mt-5'>
                            <label className='block mb-2 font-semibold'>
                                Email Address {""}
                            </label>
                            <input name='email' className='w-full border p-2 outline-none' type='text' required={true} />
                        </div>

                        <div className='mt-5'>
                            <label className='block mb-2 font-semibold'>
                                Password
                            </label>
                            <input name='password' className='w-full border p-2 outline-none' type='password' required={true} />
                        </div>

                        <div className='mt-5'>
                            <button className='bg-black text-white px-5 py-2'>Login Now</button>
                        </div>

                        <div className='mt-5'>
                            <Link href={"/forgot-password"}>
                                <button className='bg-black text-white px-5 py-2'>Forgot Password</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='p-5 shadow-sm border border-[#ccc]'>

                    {
                        otpStatus ?
                            <div>
                                <h3 className='font-bold text-lg mt-5'>Check OTP</h3>
                                <form>
                                    <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Enter OTP
                                        </label>
                                        <input className='w-full border p-2 outline-none' type='number' />
                                    </div>
                                    <div className='mt-5'>
                                        <button className='bg-black text-white px-5 py-2'>Verify OTP</button>
                                    </div>
                                </form>
                            </div>

                            :

                            <div>
                                <h2 className='font-bold text-2xl mb-5'>Register</h2>
                                <form onSubmit={createUser}>
                                    <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Name
                                        </label>
                                        <input name='name' className='w-full border p-2 outline-none' type='text' />
                                    </div>

                                    <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Email
                                        </label>
                                        <input name='email' className='w-full border p-2 outline-none' type='email' />
                                    </div>

                                    <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Phone Number
                                        </label>
                                        <input name='mobile_number' className='w-full border p-2 outline-none' type='phone' />
                                    </div>

                                    <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Address
                                        </label>
                                        <input name='address' className='w-full border p-2 outline-none' type='text' />
                                    </div>

                                    <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Password
                                        </label>
                                        <input name='password' className='w-full border p-2 outline-none' type='password' />
                                    </div>

                                    {/* <div className='mt-5'>
                                        <label className='block mb-2 font-semibold'>
                                            Confirm Password
                                        </label>
                                        <input name='confirmPassword' className='w-full border p-2 outline-none' type='password' />
                                    </div> */}

                                    <div className='mt-5'>
                                        <button className='bg-black text-white px-5 py-2'>Register Now</button>
                                    </div>
                                </form>
                            </div>
                    }


                </div>
            </div>
        </div>
    )
}
