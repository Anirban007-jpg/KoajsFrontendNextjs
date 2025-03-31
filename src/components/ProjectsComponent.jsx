'use client'
import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import { GithubIcon } from './Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Image from 'next/image'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center p-12 justify-between rounded-3xl border border-solid rounded-br-2xl border-black shadow-2xl bg-amber-50 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl' />
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-1/2 flex flex-col items-start pl-6'>
                <span className='text-pink-500 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github }) =>{
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid relative border-black bg-white p-6'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl' />
               <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-full flex flex-col items-start pl-6 mt-4'>
                <span className='text-pink-500 font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={github} target='_blank' className='w-8'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='underline text-black font-semibold'>Visit</Link>
                </div>
            </div>
        </article>
    )
}

const ProjectsComponent = () => {
    return (
        <main className='flex w-full mb-16 flex-col items-center justify-center'>
            <Layout>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16'/>
                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Crypto Screener Application"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
"
                            link="/"
                            type="Featured Project"
                            github="/"
                            img={project1}
                        />
                    </div>
                    <div className='col-span-6'>
                    <Project
                            title="Crypto Screener Application"
                            link="/"
                            type="Featured Project"
                            github="/"
                            img={project1}
                        />
                    </div>
                    <div className='col-span-6'>
                    <Project
                            title="Crypto Screener Application"
                            link="/"
                            type="Featured Project"
                            github="/"
                            img={project1}
                        />
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default ProjectsComponent