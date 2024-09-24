import {motion} from 'framer-motion'; 
import {styles} from '../styles'; 
import {BirdCanvas} from './canvas';

const Hero = () => {
  return (
    //create a canvas (background) for the hwhol home page screen and auto adjust the margins
    <section className='relative w-full h-screen mx-auto grid grid-cols-2'>
      <div >
      {/*Circle and line graphic:  Use the padding settings from the sytles.js file and tailwind css for other properties*/}
      <div className={`${styles.pagddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* circle graphic near introduction */}
          <div className='w-5 h-5 rounded-full bg-[#000053]' />
          {/* line portion of graphic near introduction */}
          <div className='w-1 sm:h-80 h-40 herb-gradient' />
        </div>
      {/* Introduction */}
      <div>
        <h1 className={`${styles.heroHeadText} text-[#3C3C3C]`}>Welcome, <span className='text-[#000053]'>lovely to see you!</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-charcoal max-w-5xl`}>
          Im an innovative thinker with a passion for integrating cutting-edge technology and seamless user experiences to drive impactful solutions.
          <br className='sm:block hidden'  /> Feel free to pet Kevin before you scroll!  
        </p>
      </div>
      </div>
      </div>
      {/* Add the 3-D animated image from the bird component*/}
      <BirdCanvas />
      {/* Add the animated scrolling mouse link to the about section */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
            {/* Use motion to create the boucing effect in the scrolling mouse */}
            <motion.dev 
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-tertiary md-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero