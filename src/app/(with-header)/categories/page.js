import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import ProductListing from '../components/Pages/category-component/ProductListing'

export default function PageListing() {
  return (
    <div>
      <Breadcrumb title={"Product Listing"}/>
      <ProductListing />
    </div>
  )
}
