import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Mirrors from '../components/Pages/category-component/mirrors'

export default function MirrorPageListing() {
  return (
    <div>
      <Breadcrumb title={"Product Listing"}/>
      <Mirrors />
    </div>
  )
}
