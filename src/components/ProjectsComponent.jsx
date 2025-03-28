'use client'
import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import { GithubIcon } from './Icons'

const FeaturedProject = ({type, title, summary, img , link, github}) => {
    return(
        <article>
            <Link href={link} target='_blank'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div>
                <span>{type}</span>
                <Link href={link} target='_blank'>
                    <h2>{title}</h2>
                </Link>
                <p>{summary}</p>
                <div>
                    <Link href={github} target='_blank'><GithubIcon /></Link>
                    <Link href={link} target='_blank'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const ProjectsComponent = () => {
  return (
    <main className='flex w-full mb-16 flex-col items-center justify-center'>
        <Layout>
            <AnimatedText text="Imagination Trumps Knowledge!" />
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                    F<FeaturedProject 
                        title="Crypto Screener Application"
                        summary=""
                        link="/"
                        type="Featured Project"
                        img={adda}
                    />
                </div>
                <div className='col-span-6'>
                    Project 1
                </div>
                <div className='col-span-6'>
                    Project 1
                </div>
            </div>
        </Layout>
    </main>
  )
}

export default ProjectsComponent