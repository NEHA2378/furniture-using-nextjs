import { getProductDetails } from '@/app/api-services/productAPI'
import React from 'react'
import SingleDetail from '../../components/products/SingleDetail'

export default async function ProductDetails({params}) {
    let {pid} = await params
    let data= await getProductDetails(pid)
  return (
    <div>
        {
            data && <SingleDetail data={data}/>
        }
        
    </div>
  )
}
