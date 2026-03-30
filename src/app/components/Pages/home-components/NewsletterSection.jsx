import React from 'react'

export default function NewsletterSection() {
  return (
    <section className='bg-gray-100'>
                <div className='max-w-[1320px] mx-auto py-20 text-center'>
    
                    <h2 className='font-semibold text-2xl text-center mx-auto'>Our Newsletter</h2>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <form className='mt-10' action="">
                        <input type="email" placeholder='Email Address' className='p-3 bg-transparent border-2 border-gray-400 border-r-0 rounded-l-md'/>
                        <button className='p-4 bg-yellow-500 text-white rounded-md'>Subscribe Now</button>
                    </form>
    
                </div>
            </section>
  )
}
