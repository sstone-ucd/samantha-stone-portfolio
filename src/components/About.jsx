import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants'
import { fadeIn, textVariant } from '../util/motion'; 
import { SectionWrapper } from '../hoc';

//function to bring const data from services in the const file to service card
const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        /* Card will fade in from the right and spring in with 0.5s delay */
        variant={fadeIn("right", "spring", 0.5 * index, 1, 0.75)}
        className='w-full chili-charcoal-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45, 
            scale: 1, 
            speed: 450
          }}
          className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'/>
            <h3 className='text-charcoal text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    

    </Tilt>
  )
}

const About = () => {
  return (
    //use react fragment instead of div to clear out the DOM and focus on this section 
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30-x]'
      >
        A dynamic and versatile professional with a broad range of skills and knowledge across multiple domains. 
        Specializing in AWS EC2/S3/Transfer family, VMWare, SFTP, Office 365/Network administration and app use, HL7 interfacing, 
        C programming, web development in JavaScript, and network security.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index= {index} {...service}/>
        ))}

      </div>


    </>
  )
}
//export the wrapped about section
export default SectionWrapper(About, "about")