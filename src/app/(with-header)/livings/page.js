import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Living from '../components/Pages/category-component/living'

export default function LivingPageListing() {
  return (
    <div>
      <Breadcrumb title={"Product Listing"}/>
      <Living />
    </div>
  )
}
