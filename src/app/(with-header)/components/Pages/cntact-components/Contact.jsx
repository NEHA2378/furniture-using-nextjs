import React from 'react'
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export default function Contact() {
    return (
        <section className='max-w-[1320px] mx-auto'>
            <div className='py-10'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6255114907312!2d73.0306057!3d26.2738149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1774879337589!5m2!1sen!2sin" width="100%" height="450"></iframe>
            </div>
            <div className='grid grid-cols-2 mb-10'>
                <div className='p-2'>
                    <h2 className='font-semibold text-3xl py-2 border-b border-gray-300'>Contact Us</h2>
                    <div className='flex gap-2 items-center border-b border-gray-300'>
                        <TbDeviceLandlinePhone />
                        <p className='py-3'> Address : Claritas est etiam processus dynamicus</p>
                    </div>
                    <div className='flex gap-2 items-center border-b border-gray-300'>
                        <IoCall />
                        <p className='py-3'> 98745612330</p>
                    </div>
                    <div className='flex gap-2 items-center border-b border-gray-300'>
                        <CiMail />
                        <p className='py-3'> furniture@gmail.com</p>
                    </div>
                </div>
                <form className='p-2'>
                    <h2 className='font-semibold text-3xl py-2'>Tell us your question</h2>
                    <div className='py-2'>
                        <label htmlFor="name">Your Name (required)</label>
                        <input type="text" className='p-3 mt-1 w-[100%] border border-gray-300' placeholder='Name*' />
                    </div>

                    <div className='py-2'>
                        <label htmlFor="email">Your Email (required)</label>
                        <input type="email" className='p-3 mt-1 w-[100%] border border-gray-300' placeholder='Email*' />
                    </div>

                    <div className='py-2'>
                        <label htmlFor="mobileNumber">Your Mobile Number (required)</label>
                        <input type="phone" className='p-3 mt-1 w-[100%] border border-gray-300' placeholder='Mobile Number*' />
                    </div>

                    <div className='py-2'>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className='p-3 mt-1 w-[100%] border border-gray-300' placeholder='Subject*' />
                    </div>

                    <div className='py-2'>
                        <label htmlFor="message">Your Message</label>
                        <textarea type="text" className='p-3 mt-1 w-[100%] border border-gray-300 min-h-[150px] resize-none' placeholder='Message*' />
                    </div>

                    <button className='py-3 px-8 text-white bg-black rounded-md mt-5'>Send</button>
                </form>
            </div>

        </section>
    )
}
