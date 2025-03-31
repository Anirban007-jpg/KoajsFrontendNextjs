import ArticleComponent from '@/components/ArticleComponent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'


export const metadata = {
    title: "FINANCIA | ARTICLES PAGE",
    description: "About the Company",
};

const page = () => {
  return (
    <>
        <Navbar />
            <ArticleComponent />
        <Footer />
    </>
  )
}

export default page