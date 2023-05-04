'use client';
import { fadeIn } from "../utils/motion";
import { motion } from 'framer-motion';
import Styles from '../styles';

const ExploreCard = ( {title, imgUrl, active, onClick, index, activeWorldID} ) => (
    <motion.div
        className={`relative min-w-[150px] overflow-hidden h-[700px] flex transition-[flex] duration-[.75s] cursor-pointer ${active ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[.5] flex-[2]'}`}
        variants={fadeIn('right', 'spring', index * 0.3, 0.5)} onClick={onClick}>

        <img src={imgUrl} alt={title} className="w-full h-full object-cover absolute rounded-[22px]"/>
        {!active ? (
            <h3 className={`font-semibold self-center whitespace-nowrap w-full my-auto text-center sm:text-[26px] text-[18px] text-white absolute lg:bottom-20 lg:left-[40%] lg:translate-x-[-90%] lg:rotate-[-90deg] lg:origin-[top]`}>{title}</h3>
        ) : (
            <div className='absolute whitespace-nowrap overflow-hidden justify-start w-full flex-col bottom-0 p-8 rounded-b-[24px] bg-[rgba(0,0,0,0.5)]'>
                <div className={`w-[60px] ${Styles.flexCenter} h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
                    <img src="/headset.svg" alt="headset" className='w-1/2 h-1/2 object-contain'/>
                </div>
                <p className='hidden lg:block text-[16px] leading-[20px] uppercase text-white'>
                    Enter the metaverse
                </p>
                <h3 className='mt-6 font-semibold text-[24px] text-white'>{title}</h3>
            </div>
        )}

    </motion.div>
);

export default ExploreCard;
