import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../util/motion'; 
import { SectionWrapper } from '../hoc';

//function to bring const data from services in the const file to service card
const ServiceCard = ({ index, name, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        /* Card will fade in from the right and spring in with 0.5s delay */
        variant={fadeIn("right", "spring", 0.5 * index, 1, 0.75)}
        className='card rounded-[20px]' 
        
      >
        <div
          options={{
            max: 45, 
            scale: 1, 
            speed: 450
          }}
          className='bg-white rounded-[20px] h-[220px] py-5 px-12 flex justify-evenly items-center flex-col border-4 border-tertiary'
        >
          <img src={icon} alt={name} 
            className='w-16 h-16 object-contain'/>
            <h3 className='text-charcoal text-[20px] font-bold text-center'>{name}</h3>
        </div>
      </motion.div>
    

    </Tilt>
  )
}

const Tech = () => {
  return (
    //use react fragment instead of div to clear out the DOM and focus on this section 
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>You're still here?  Sweet let me show you some of my sweet...</p>
        <h2 className={styles.sectionHeadText}>Skills and Certs</h2>
      </motion.div>
      <div className='mt-10 flex flex-wrap gap-10'>
        {technologies.map((tech, index) => (
          <ServiceCard key={tech.name} index= {index} {...tech}/>
        ))}

      </div>


    </>
  )
}
//export the wrapped about section
export default SectionWrapper(Tech, "")