'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";
import { useState } from "react";

const Explore = () => {
    const [activeWorldID, setActiveWorldID] = useState(exploreWorlds[0].id);

    function handleWorldClick( worldID ) {
        setActiveWorldID(worldID);
    }

    return (
        <section className={styles.paddings}>
            <motion.div id="explore" className={`${styles.innerWidth} flex flex-col mx-auto`} {...sectionVariants} viewport={{
                            once: true,
                            amount: 0.25
                        }}>
                <TypingText title="| The worlds" textStyles="text-center text-secondary-white"/>
                <TitleText>Choose the world you want<br/> to explore</TitleText>
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map(( world, i ) => (
                        <ExploreCard {...world} index={i} activeWorldID={activeWorldID}
                                     active={world.id === activeWorldID} onClick={() => handleWorldClick(world.id)}
                                     key={world.id}>

                        </ExploreCard>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;
