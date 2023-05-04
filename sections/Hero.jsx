'use client';

import styles from "../styles";
import {motion} from "framer-motion";
import {slideIn, staggerContainer, textVariant} from "../utils/motion";
import Image from 'next/image'
import {useState} from "react";
const Hero = () => {

    return (
        <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
            <motion.div initial='hidden' whileInView='show'
                        variants={staggerContainer}
                        viewport={{once: false, amount: 0.25}}
                        className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <div className='flex justify-center items-center flex-col relative z-10'>
                    <motion.h1 className={styles.heroHeading} variants={textVariant(1.1)}>
                        Metaverse
                    </motion.h1>
                    <motion.div className='flex flex-row justify-center items-center' variants={textVariant(1.2)}>
                        <h1 className={styles.heroHeading}>Ma</h1>
                        <div className={styles.heroDText}/>
                        <h1 className={styles.heroHeading}>ness</h1>
                    </motion.div>
                </div>
                <motion.div className='relative w-[110%]  h-[300px]' variants={slideIn('right', 'spring', 0.2, 1)}>
                    <div className='absolute rounded-tl-[180px] w-full z-[0] h-[300px] hero-gradient -top-[30px]'/>
                    <Image className='rounded-tl-[180px]' style={{objectFit: 'cover'}} src='/cover.png' alt='cover'
                           fill/>
                </motion.div>
                <motion.a variants={textVariant(1.4)} className='absolute right-[30px] bottom-[30px]' href="#explore">
                    <div
                        className='sm:w-[150px] w-[130px] sm:h-[150px] h-[130px] relative z-10 flex justify-end pr-[40px] sm:-mt-[70px] -mt-[50px]'>
                        <Image cache="max-age=2592000" src='/stamp.png' alt='stamp' fill/>
                    </div>
                </motion.a>
            </motion.div>
        </section>
    )
};

export default Hero;
