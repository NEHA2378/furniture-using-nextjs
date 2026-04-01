import React from 'react'

export default function Breadcrumb({title}) {
  return (
    <section className='py-10'>
        <h1 className='text-center font-bold text-4xl'>{title}</h1>
        <div className='text-center'>home {`>`} {title}</div>
    </section>
  )
}
