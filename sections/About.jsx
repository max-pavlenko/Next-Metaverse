'use client';

import styles from "../styles";
import {fadeIn, sectionVariants} from "../utils/motion";
import {motion} from "framer-motion";
import {TypingText} from "../components";
import {useRouter} from "next/router";

const About = () => {

    return (
        <section className={`relative ${styles.paddings}`}>
            <div className='gradient-02'/>
            <motion.div {...sectionVariants} className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
                <TypingText title='| About Metaverse' textStyles='text-center'/>
                <motion.p className='text-secondary-white text-[16px] text-center' variants={fadeIn('up', 'tween', 0.2, 1)}>
                    <span className='font-extrabold text-white'>Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit. <span className='font-extrabold text-white'>Accusantium</span> adipisci aperiam nobis porro provident reiciendis repellendus sed voluptatibus.
                    Ad beatae enim, explicabo itaque modi nostrum placeat <span className='font-extrabold text-white'>repellendus</span> rerum voluptatem? Nesciunt.
                    Ad beatae enim, explicabo itaque modi nostrum placeat repellendus rerum <span className='font-extrabold text-white'>voluptatem</span>? Nesciunt.
                </motion.p>
                <motion.img className='h-[28px] w-[18px] object-contain mt-[28px]' variants={fadeIn('up', 'tween', 0.3, 1)} src="/arrow-down.svg" alt="arrow down"/>
            </motion.div>
        </section>
    );
}

export default About;
