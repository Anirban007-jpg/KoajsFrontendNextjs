'use client'
import { motion, useScroll } from 'framer-motion'
import React from 'react'


const Liicon = ({reference}) => {
    const { scrollYProgress } = useScroll({ target: reference, offset: ["center end", "center center"] });
    return (
        <figure className='absolute left-0 stroke-black'>
            <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
                <circle className="stroke-pink-500 stroke-1 fill-none" cx="75" cy="50" r="20" />
                <motion.circle style={{pathLength: scrollYProgress }} className="stroke-[5px] fill-white" cx="75" cy="50" r="20" />
                <circle className="stroke-1 fill-pink-500 animate-pulse" cx="75" cy="50" r="10" />
            </svg>
        </figure>
    )
}

export default Liicon