import React from 'react'
import OnlineStore from '../components/Pages/online-store-components/OnlineStore'
import Breadcrumb from '../components/common/Breadcrumb'

export default function OnlineStoreProducts() {
  return (
    <div>
        <Breadcrumb title={"Online Store"}/>
        <OnlineStore/>
    </div>
  )
}
