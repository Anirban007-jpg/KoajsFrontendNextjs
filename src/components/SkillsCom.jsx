'use client'
import React, { useRef } from 'react'
import Layout from './Layout'
import { motion, useScroll } from 'framer-motion'
import Liicon from './Liicon'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div viewport={{ once: true }} initial={{ x: 0, y: 0 }} animate={{ x: x, y: y }} transition={{ duration: 1.5 }} whileHover={{ scale: 1.05 }} className='cursor-pointer flex items-center justify-center rounded-full font-semibold bg-black text-white absolute py-3 px-6 shadow-black'>{name}</motion.div>
    )
}

const Details = ({ position, company, time, companyLink, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 mt-26 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Liicon reference={ref} />
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1.0, type: "spring" }}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a target='_blank' className='text-pink-500 capitalize' href={companyLink}>@{company}</a></h3>
                <span className='capitalize font-medium text-black/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}
const SkillsCom = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] });
    return (
        <>
            <Layout className='!mt-[-180px] '>
             
                <div className='my-64'>
                    <h2 className='font-bold text-6xl mt-[-30px] mb-2 w-full text-center'>How This Website Works!</h2>
                    <div ref={ref} className='w-[75%] mx-auto relative'>
                        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-18 bottom-2 w-[4px] h-full bg-black origin-top' />
                        <ul className='w-full flex flex-col items-start justify-between ml-4'>
                            <Details position="Software Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization." companyLink="www.google.com" />
                            <Details position="Software Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization." companyLink="www.google.com" />
                            <Details position="Software Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization." companyLink="www.google.com" />

                        </ul>
                    </div>
                </div>
                <h2 className='font-bold text-6xl mt-10 mb-10 w-full text-center'>Skills</h2>
                <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circular'>
                    <motion.div className='cursor-pointer flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black' whileHover={{ scale: 1.05 }}>Web</motion.div>
                    <Skill name="TailwindCSS" x='-5vw' y='-10vw' />
                    <Skill name="Javascript" x='-20vw' y='2vw' />
                    <Skill name="Koa" x='20vw' y='6vw' />
                    <Skill name="MongoDb" x='0vw' y='12vw' />
                    <Skill name="SQL" x='15vw' y='-12vw' />
                    <Skill name="Next" x='18vw' y='18vw' />
                    <Skill name="Typescript" x='32vw' y='-5vw' />
                    <Skill name="ORM" x='-25vw' y='18vw' />
                </div>
            </Layout>
        </>
    )
}

export default SkillsCom