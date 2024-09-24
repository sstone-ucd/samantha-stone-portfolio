
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../util/motion';
import { hobbies, favorites } from '../constants';

const FavoritesCard = ({ pic }) => {
  return (
    <div className="overflow-hidden">
      <img className='mr-3 rounded-2xl h-52 w-52 object-cover object-center' src={pic} alt='Favorite' />
    </div>
  );
};


const Personal = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <div className='flex flex-wrap justify-center'>
        {favorites.map((favs) => (
          <FavoritesCard key={favs.fav} pic={favs.pic} />   
        ))}
      </div>



    </>
  );
};

export default SectionWrapper(Personal, "");

