import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'



import AboutUs from '@/components/AboutUs';

export const metadata = {
    title: "FINANCIA | ABOUT PAGE",
    description: "About the Company",
};

  
const page = () => {
  return (
    <>
    <Navbar />
      <AboutUs />
    <Footer/>
    </>
  )
}

export default page