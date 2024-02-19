import React, { useRef } from 'react';
import { motion,  useScroll } from 'framer-motion'
import Lilcon from './Lilcon';


const Details = ({position, company, companyLink, time, address, work}) => {
   
    const ref = useRef(null);

   return (
   <li ref = {ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <Lilcon reference ={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position} <a href= {companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize' 
            >@ {company}</a> </h3>
            
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>

        </motion.div>

    </li>
    );
};


const Experience = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref, 
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light '/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                
                    position="Software Engineering Intern" company= "CIGP"
                    companyLink="www.cigp.com"
                    time = "05/2023 - 06/2023" address="Central, Hong Kong"
                    work = "Participated in the design and development of internal and customer-facing applications, Implemented an internal API to track the shared mailbox of the IT Support Team, Implemented CI/CD pipeline to automate the deployment of the updated code, Participated in CIGP’s digital growth by evaluating and implementing new technologies, Helped protect CIGP against cyber-security threats by implementing security measures and providing user training"
            
                />

                <Details
                
                    position="Backend Intern" company= "Document on Ready"
                    companyLink="www.documentonready.com"
                    time = "06/2022 - 05/2023" address="Prince Edwards, Hong Kong"
                    work = "Developed responsive web applications and campaign sites, Developed APIs and Plugins for mobile web applications and addressed new functionalities to legacy sites, Prepared documentations and user manuals for company projects."
                    
                />

                <Details
                
                    position="Data Analyst" company= "DataArt"
                    companyLink="/"
                    time = "09/2021 - 01/2022" address="Remote (Munich, Germany)"
                    work = "Designed a RESTful API backend with PHP CodeIgniter 4 using a MySQL database and deployed it on an Ubuntu server, Obtained and maintained through routine bug fixes that improved the average response time by 20%, Used tools like “Power Bi” and “VBA” to develop dashboards for administrative units, Increased the efficiency by decreasing data interpretation time by 78%, Worked with MS excel, Questionnaire pro and regulated data yield"
                
                />

            </ul>
        </div>
    </div> 
  );
};

export default Experience