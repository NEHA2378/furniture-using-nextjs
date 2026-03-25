import React from 'react'

export default function CollectionSection() {
  return (
    <section className='py-10'>
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5'>
            <div className='shadow-lg relative group overflow-hidden'>
            <img className='group-hover:scale-125 duration-300' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="#" />
            <div className='absolute top-0  w-[100%] h-[100%] p-8 bg-[rgba(0,0,0,0.25)]'>
                <h3>Design Creative</h3>
                <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
        </div>
            <div className='shadow-lg relative group overflow-hidden'>
            <img className='group-hover:scale-125 duration-300' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" alt="#" />
            <div className='absolute top-0  w-[100%] h-[100%] p-8 bg-[rgba(0,0,0,0.25)]'>
                <h3>Bestselling Products</h3>
                <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
        </div>
            <div className='shadow-lg relative group overflow-hidden'>
            <img className='group-hover:scale-125 duration-300' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="#" />
            <div className='absolute top-0  w-[100%] h-[100%] p-8 bg-[rgba(0,0,0,0.25)]'>
                <h3>Onsale Products</h3>
                <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
        </div>
        </div>
    </section>
  )
}
        