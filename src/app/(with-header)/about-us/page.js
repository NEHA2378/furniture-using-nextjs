import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import AboutContentArea from '../components/Pages/about-components/AboutContentArea'
import UserVoiceSection from '../components/Pages/home-components/UserVoiceSection'
import WhyChooseUsSection from '../components/Pages/about-components/WhyChooseUsSection'

export default function AboutUs() {
  return (
    <div>
      <Breadcrumb title={"About Us"}/>
      <AboutContentArea/>
      <WhyChooseUsSection/>
      <UserVoiceSection/>
    </div>
  )
}
