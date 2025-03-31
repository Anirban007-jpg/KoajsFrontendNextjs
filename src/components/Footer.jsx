import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = ({className=""}) => {
  return (
    <footer className={`${className} w-full flex flex-row border-t-2 border-solid border-gray-500 font-bold text-lg`}>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>
                Build with <span className='text-pink-500 text-2xl px-1'>&#9825;</span><Link href="/" className='underline underline-offset-2'>Codeblocks</Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer