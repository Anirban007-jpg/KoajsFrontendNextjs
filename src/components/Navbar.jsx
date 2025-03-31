'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Twitter, { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'
import { motion } from 'framer-motion'



const CustomLink = ({href, title, className=""}) => {
    const router = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] group-hover:w-full transition-[width] ease duration-300 inline-block bg-black absolute left-0 -bottom-0.5 ${router === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}
const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium items-center flex justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mr-4'/>
            <CustomLink href="/projects" title="Projects" className='mr-4'/>
            <CustomLink href="/articles" title="Articles" className='mr-4'/>
            <CustomLink href="/articles" title="Login" className='mr-4'/>
            <CustomLink href="/articles" title="Register" className='mr-4'/>
        </nav>
       
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                <Twitter />
            </motion.a>
            <motion.a href="/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                <GithubIcon />
            </motion.a>
            <motion.a href="/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                <LinkedInIcon />
            </motion.a>
            <motion.a href="/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'>
                <PinterestIcon />
            </motion.a>
            <motion.a href="/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'>
                <DribbbleIcon/>
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[50%]'>
            <Logo />
        </div>
        
    </header>
  )
}

export default Navbar