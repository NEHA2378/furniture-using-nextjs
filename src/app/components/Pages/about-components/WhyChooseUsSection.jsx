import React from 'react'
import { IoIosHome } from "react-icons/io";
import { IoPeople } from "react-icons/io5";

export default function WhyChooseUsSection() {
    return (
        <section>
            <div className='max-w-[1320px] mx-auto'>
                <h1 className='text-2xl font-semibold text-center'>Why chose us?</h1>
                <div className='grid grid-cols-3 mx-auto'>
                    <div className='p-5 text-center'>
                        <IoIosHome className='text-8xl text-yellow-600 p-4 mx-auto' />
                        <p className='font-bold'>100% Money Back Guarantee</p>
                        <p className='py-4 text-gray-800'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                    </div>

                    <div className='p-5 text-center'>
                        <IoPeople className='text-8xl text-yellow-600 p-4 mx-auto'/>
                        <p className='font-bold'>Online Support 24/7</p>
                        <p className='py-4 text-gray-800'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                    </div>

                    <div className='p-5 text-center'>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg" alt="" />
                        <p className='font-bold'>Creative-Design</p>
                        <p className='py-4 text-gray-800'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim God has created everything like air,water,tree and metal.</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 mx-auto'>
                    <div className='p-5 text-center mx-auto'>
                        <img className='mx-auto' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" alt="" />
                        <p className='font-bold pt-5'>What Do We Do?</p>
                        <p className='py-4 text-gray-800'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                    </div>

                    <div className='p-5 text-center mx-auto'>
                        <img className='mx-auto' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" alt="" />
                        <p className='font-bold pt-5'>Our Mission</p>
                        <p className='py-4 text-gray-800'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                    </div>

                    <div className='p-5 text-center mx-auto'>
                        <img className='mx-auto' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" alt="" />
                        <p className='font-bold pt-5'>History Of Us</p>
                        <p className='py-4 text-gray-800'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
