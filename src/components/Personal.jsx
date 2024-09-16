
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../util/motion';
import { hobbies, favorites } from '../constants';

const FavoritesCard = ({ pic }) => {
  return (
    <div className="overflow-hidden">
      <img className='mt-[10px] mx-auto rounded-xl h-60 w-60 object-contain object-center' src={pic} alt='Favorite' />
    </div>
  );
};


const HobbyCard = ({ hobby, note }) => {
  return (
    <ul className='list-disc list-outside pl-4'>
      <li>{hobby} &rarr; {note}</li>
    </ul>
  );
};

const Personal = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Okay, I&apos;ve reviewed your professional experience, but who are you? </p>
        <h2 className={styles.sectionHeadText}>More About Me</h2>
      </motion.div>

      <div className='mt-10 mb-20 flex flex-wrap'>
        {favorites.map((favs) => (
          <FavoritesCard key={favs.fav} pic={favs.pic} />
        ))}
      </div>
      <div className='bg-herb p-4 rounded-md'>
      <motion.p
        variants={textVariant()}
        className='mt-3 text-primary text-[17px] leading-[30px]'>
        <p>
          Growing up, I was deeply influenced by my parents&apos; unwavering work ethic, which instilled in me a profound appreciation for diligence and perseverance.
          Their example inspired me to balance employment with my studies, navigating challenges with determination and resilience.
          While this non-traditional path occasionally left me feeling like an outsider among formally educated professionals,
          I remained steadfast in my commitment to personal and academic growth.
          <br />
          <br />
          This unique journey enabled me to develop and refine both my professional and academic skills simultaneously,
          teaching me the value of embracing challenges and persevering towards my goals.
          I reflect with humor on the unrealistic timelines I once set for myself and the habit of comparing my journey to others&apos;.
          Instead, I now embrace the ongoing journey of self-discovery ahead of me.
          <br />
          <br />
          With newfound time, I&apos;ve discovered my passion for exploration, trying new things, and giving my all to whatever I pursue.
          This journey has reinforced my belief in the power of hard work and dedication, shaping me into a resilient and adaptable individual
          ready to contribute positively to any team or project.
        </p>
      </motion.p>
      </div>  


      <motion.div variants={textVariant()} className='py-5'>
        <p className={`${styles.section2SubText} ${styles.underline}`}>Hobbies</p>
        <div className='mt-3 text-tertiary text-[18px]'>
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.hobby} hobby={hobby.hobby} note={hobby.note} />
          ))}
        </div>
      </motion.div>

    </>
  );
};

export default SectionWrapper(Personal, "");

