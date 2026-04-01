"use client"
import React from 'react'

export default function CollestionBanner() {
    return (
        <div><section
            className="banner_fullwidth"
            style={{
                background:
                    'url("https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg") no-repeat scroll center center/cover'
            }}
        >
            <div className="container">
                <div className="row align-items-center max-w-[1320px] mx-auto py-[150px] px-[50px]">
                    <div className="col-12">
                        <div className="transition-transform duration-300 hover:scale-105">
                            <h2 className='text-5xl font-bold mb-5'>New Trending Collection</h2>
                            <p className='text-gray-600'>We Believe That Good Design is Always in Season</p>
                            <button className='px-10 py-3 mt-15 text-amber-500 border border-amber-500' href="https://wscubetech.co/Assignments/furniture/trending-collections">
                                shopping Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
