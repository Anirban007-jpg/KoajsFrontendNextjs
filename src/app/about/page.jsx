import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'



import AboutUs from '@/components/AboutUs';
import SkillsCom from '@/components/SkillsCom';

export const metadata = {
    title: "FINANCIA | ABOUT PAGE",
    description: "About the Company",
};

  
const page = () => {
  return (
    <>
    <Navbar />
      <AboutUs />
      <SkillsCom />
    <Footer className='!mt-[280px]'/>
    </>
  )
}

export default page