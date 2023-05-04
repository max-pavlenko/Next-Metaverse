'use client';
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`py-8 relative`}
    >
        <div className="absolute w-[50%] inset-0 gradient-01"/>

        <div className={`${styles.innerWidth} px-12 mx-auto flex justify-between gap-8`}>
            <Link style={{width: 24, height: 24, position: 'relative'}} href="/media">
                <Image cache="max-age=2592000" src="/search.svg" alt="search" fill
                       className="object-contain"/>
            </Link>
            <h2 className="font-extrabold text-[24px] leading-[30[x] text-white">METAVERSUS</h2>
            <Link href="/test">
                <Image cache="max-age=2592000" src="/menu.svg" alt="menu" width={24} height={24}
                       className="object-contain"/>
            </Link>
        </div>
    </motion.nav>
);

export default Navbar;
