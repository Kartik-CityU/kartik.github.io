import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/image.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView  = useInView(ref, {once: true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])
       
    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
      })

    }, [springValue, value])
    


    return <span ref={ref}></span>
};

const about = () => {
  return (
    <>
        <Head>
            <title>Kartik Sharma | About Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16 dark:bg-dark'>
            <AnimatedText text="Passion Fuels Purpose! " className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                        Biography
                    </h2>

                    <p className='font-medium'>
                    Welcome to my personal website! My name is Kartik Sharma, and I am a passionate software engineer with a strong track record of success in the field. With a keen interest in software development and a diverse range of experiences, I am excited to share my journey and accomplishments with you.
                    </p>

                    <p className=' my-4 font-medium'>
                    Throughout my academic pursuits and internships, I have cultivated a solid foundation in various programming languages and software applications. Proficient in C++, Java, Python, PHP, and JavaScript, I have undertaken challenging projects that have honed my skills and allowed me to consistently deliver high-quality solutions.
                    </p>

                    <p className='my-2 font-medium'>
                    My expertise lies in Data Structures, Algorithms, and Object-Oriented Programming. Leveraging these skills, I have optimized system performance and successfully tackled complex problems. By implementing efficient algorithms in various projects, I not only ensure quick data retrieval but also minimize resource usage. Additionally, my experience with Microsoft Azure has equipped me with the ability to deploy and manage cloud-based applications securely and efficiently.
                    </p>

                    {/* <p className=' my-2 font-medium'>
                    Beyond technical aptitude, I possess excellent teamwork, communication, and problem-solving abilities. Thriving in collaborative environments, I have effectively contributed to cross-functional teams to achieve project goals. My strong analytical and critical thinking skills, coupled with the ability to adapt quickly to new technologies, enable me to add significant value in any software engineering role.
                    </p> */}

                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light
                '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={profilePic} alt="KartikChad" className='h-1/3 w-auto rounded-xl-3 '/>
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between'>
                    
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={50}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={40}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75'> projects completed</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={4}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75'>years of experience</h2>
                    </div>

                </div>
            </div>

            <Skills/>
            <Education/>
            <Experience/>
            </Layout>
        </main>
    </>
  );
};

export default about