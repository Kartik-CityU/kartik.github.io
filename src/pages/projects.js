import Head from 'next/head'
import React from 'react'
import Layout from '@/components/layout' 
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import HKSPC from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl
        '>
            
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div>
                <span>{type}</span>
                <Link href={link} target="_blank">
                  <h2>{title}</h2>  
            </Link>
            <p>{summary}</p>

            <div>
                <Link href={github} target="_blank"><GithubIcon/></Link>
                <Link href={link} target='_blank'>Visit Project</Link>
            </div>
            </div>

        </article>
    );
};


const projects = () => {
  return ( 
    <>
        <Head>
            <title>Kartik | Project Page</title>
            <meta name='description' content='any description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!" />

                        <div className='grid grid-cols-12 gap-24'>
                            <div className='col-span-12 '>
                                <FeaturedProject
                                title="HKSPC Hong Kong"
                                img ={HKSPC}
                                summary="The HKSPC Hong Kong website is a multilingual platform that I developed as a Back End Developer during my internship at Document on Ready Ltd. It features a hierarchical structure for easy navigation and offers an intuitive user interface. The website includes a dynamic content management system, ensuring up-to-date information. Security measures are in place, and an integrated donation portal allows users to contribute securely. Overall, the website serves to promote the mission of the Hong Kong Society for the Protection of Children and raise awareness about child protection in Hong Kong."
                                link ="https;//hkspc.org"
                                github="/"
                                type = "Featured Project"
                                
                                />
                            </div>

                            <div className='col-span-6 '>
                                Project-1
                            </div>

                            <div className='col-span-6 '>
                                Project-2
                            </div>

                            <div className='col-span-12 '>
                                Featured Project
                            </div>

                            <div className='col-span-6 '>
                                Project-3
                            </div>

                            <div className='col-span-6 '>
                                Project-4
                            </div>

                        </div>

            </Layout>
        </main>

    </>
  );
};

export default projects