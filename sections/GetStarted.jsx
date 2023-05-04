'use client';
import styles from '../styles/index';
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
    <section className={`${styles.paddings} relative`}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
                    viewport={{once: false, amount: .25}}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
            <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
                <img src="/get-started.png" alt="Get started" className="w-[90%] h-[90%] object-contain"/>
            </motion.div>
            <motion.div className="" variants={fadeIn('right', 'tween', .2, 1)}>
                <TypingText textStyles='text-center lg:text-start' title="How Metaverse works"/>
                <TitleText>
                    Get started with just few clicks
                </TitleText>
                <div className="mt-[31px] flex flex-col max-w-[370px] gap-6">
                    {startingFeatures.map((startingFeature, i) => (
                        <StartSteps feature={startingFeature} stepNumber={i+1} key={startingFeature}/>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default GetStarted;
