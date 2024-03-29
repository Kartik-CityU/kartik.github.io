import React from 'react'
import {motion} from "framer-motion"

const Skill =({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
    '
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x, y:y, transition: {duration: 1.5}}}
    viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};



const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
    
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light
                '
                whileHover={{scale:1.05}}
                >
                  Dev
                </motion.div>

                <Skill name="C++" x = "-25vw" y= "2vw"/>
                <Skill name="PHP" x = "-5vw" y= "-10vw"/>
                <Skill name="Java" x = "24vw" y= "6vw"/>
                <Skill name="Python" x = "0vw" y= "12vw"/>
                <Skill name="ReactJS" x = "-20vw" y= "-15vw"/>
                <Skill name="NextJS" x = "15vw" y= "-12vw"/>
                <Skill name="WordPress" x = "32vw" y= "-5vw"/>
                <Skill name="DSA" x = "0vw" y= "-20vw"/>
                <Skill name="OS" x = "-25vw" y= "18vw"/>
                <Skill name="BootStrap" x = "18vw" y= "18vw"/>
      </div>
    </>
  );
};

export default Skills