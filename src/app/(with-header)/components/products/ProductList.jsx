"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function ProductList({ data }) {
    let [product, setProduct] = useState(data.products)
    return (
        <div>
            <div className='max-w-[1320px] mx-auto py-10 grid grid-cols-4 gap-5'>
                
                {
                    product.map((obj, index)=><ProductCard key={index} data={obj}/>)
                }
            </div>
        </div>
    )
}

function ProductCard({data}) {
    let {id, title, thumbnail, price, description} = data
    return (
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded-base" src={data.thumbnail} alt="" />
            </a>
            <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                    {data.title}
                </h5>
            </a>
            <p className="mb-6 text-body">
                {data.description}
            </p>

            <p className="mb-6 text-body">
                Rs. {data.price}
            </p>
            <Link
                href={`/product-server/${id}`}
                className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
                Read more
                
            </Link>
        </div>

    )
}
