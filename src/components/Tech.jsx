import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../util/motion'; 
import { SectionWrapper } from '../hoc';

//function to bring const data from services in the const file to service card
const ServiceCard = ({ index, name, icon, description, date}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={index} className='card rounded-[20px] group perspective:1000px'>
        <div className='relative h-[150px] rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'
          options={{
            max:45, 
            scale:1, 
            speed: 450
          }}
        >
          
          <div className='absolute h-full w-full bg-herb text-center rounded-2xl [backface-visibility:hidden]'>
            <img className='mt-[20px] mx-auto rounded-xl h-16 w-16 object-contain object-center' src={icon}/>
            <p>{name}</p>
          </div>

          <div className='rounded-xl h-full w-full text-herb border-2 border-herb bg-white text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <p className='mt-[20px] font-bold'> { name } </p>
            <p> {description}</p>
            <p> {date} </p>
          </div>
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