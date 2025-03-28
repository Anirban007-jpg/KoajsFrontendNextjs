import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectsComponent from '@/components/ProjectsComponent';
import React from 'react'
export const metadata = {
    title: "FINANCIA | OTHER WORKS PAGE",
    description: "About the Company",
};

const page = () => {
  return (
    <>
        <Navbar />
            <ProjectsComponent />
        <Footer />
    </>
  )
}

export default page