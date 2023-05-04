'use client';

import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import styles from '../styles';
import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
    <section className={`${styles.paddings} relative`}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
                    viewport={{once: false, amount: .25}}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
            <motion.div className="flex-[0.95] flex justify-center flex-col" variants={fadeIn('left', 'tween', .2, 1)}>
                <TypingText textStyles='text-center lg:text-end' title="What's new?"/>
                <TitleText classNames='text-center lg:text-end'>
                    Check it out!
                </TitleText>
                <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                    {newFeatures.map(( feature ) => (
                        <NewFeatures feature={feature} key={feature.title}/>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={planetVariants('right')} className={`flex-1 ${styles.flexCenter}`}>
                <img src="/whats-new.png" alt="What's new" className="w-[90%] h-[90%] object-contain"/>
            </motion.div>
        </motion.div>
    </section>
);

export default WhatsNew;
