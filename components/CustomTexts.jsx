'use client';
import {motion} from "framer-motion";
import {sectionVariants, textContainer, textVariant2} from "../utils/motion";


export const TypingText = ({title, textStyles}) => (
  <motion.p variants={textContainer} className={`${textStyles} text-[18px] text-secondary-white`}>
      {title.split('').map((char, i) =>{
          return (
              <motion.span variants={textVariant2} key={i}>
                  {char}
              </motion.span>
          )
      })}
  </motion.p>
);

export const TitleText = ({children, classNames}) => (
  <motion.h2 {...sectionVariants} variants={textVariant2} className={`mt-2 font-extrabold text-center md:text-[54px] text-[40px] text-white ${classNames}`}>
    {children}
  </motion.h2>
);
