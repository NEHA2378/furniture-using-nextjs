import React from 'react'
import ProductList from '../components/products/ProductList'
import { getProducts } from '@/app/api-services/productAPI'

export default async function ProductServer() {

    let data = await getProducts()
  return (
    <div>
        <ProductList data = {data}/>
    </div>
  )
}
