import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../util/motion';

//each project contains: name, color, description, image, source-code link
const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max:45, 
          scale: 1, 
          speed: 450,
        }}
        className="bg-charcoal p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          {/*make github icon appear on top of the image, link to respository when clicked*/}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer"
            > 
              <img 
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Name and description of the project */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>
        {/* loop through the tags for each project and add the specified color for each tag */}
        <div className='mt-4 flex flex-wrap gap-2'> 
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )

}

//tilt cards to display github projects
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I get it, you just want to see the code </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Feel free to look through the projects I&apos;ve worked on (that I&apos;m at liberty to post).
          Yes, its all over the place. What can I say? I like to dabble! Its the best way to learn!
        </motion.p>
      </div>  
      
      {/* Loop over projects and put it in a project card */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=>(
          //grab the key to the project
          <ProjectCard key={`project-${index}`} 
          //and evertything else belonging to that key
            index = {index}
            {...project}
          />
        ))}
      </div>
     

    </>
  );
};
//export default SectionWrapper(Works, "")
export default SectionWrapper(Works, ""); 
