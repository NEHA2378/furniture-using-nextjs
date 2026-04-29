import React from 'react'
import ProductList from '../components/products/ProductList'
import { getProducts } from '@/app/api-services/productAPI'
import { productData } from '../Data/ProductData'

export default async function ProductServer() {

    let data = await productData()
  return (
    <div>
        <ProductList data = {data}/>
    </div>
  )
}
