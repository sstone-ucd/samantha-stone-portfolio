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
        className='mt-4 text-secondary text-[20px] leading-[30-x]'
      >
      <b>Welcome to my portfolio!</b> <br/> <br/>
      I’m passionate about combining technology and operational efficiency to create solutions that make a real impact. 
      With a background in IT management and laboratory operations, I’ve worked on a range of projects—from building user-friendly websites to streamlining complex workflows in highly regulated environments.
      I understand the challenges of running a business and the importance of turning a profit, which is why I approach every project with a business-oriented mindset, always aiming to improve efficiency and reduce costs.
      This space showcases my work, including my work experience, websites I&apos;ve developed, and platforms I work with to simplify processes, improve data accuracy, and enhance sustainability efforts. <br/> <br/>
      <b>Take a look around, and feel free to reach out if you want to collaborate or learn more about what I do!</b>
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