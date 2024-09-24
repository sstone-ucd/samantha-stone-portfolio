import { useState, useRef } from "react"; 
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc'; 
import { slideIn } from "../util/motion";
import {LotusCanvas } from "./canvas";
import {favorites } from '../constants';


const Contact = () => {
  const formRef = useRef();
  //set the state of the form
  const [form, setForm] = useState({
    name: "", 
    email: "", 
    message: "",
  }); 
  const [loading, setLoading] = useState(false); 
  const handleChange = (e) => {
    const {name, value } = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true); 
    emailjs.send(
      'service_dxvzr2e',
      'template_z4xwxs4', 
      {
        from_name:form.name, 
        to_name: 'Sam Stone', 
        from_email: form.email, 
        to_email: 'patt.erson@live.com', 
        message: form.message, 
      }, 
      'zL80r01t0JObc9WIS'
      )
      .then(()=>{
        setLoading(false); 
        alert('Thanks for your message!  I will get back to you ASAP');
        
        //reset the form
        setForm({
          name:"", 
          email:"", 
          message:"",
        })

      }, (error)=>{
        setLoading(false)
        console.log(error)
        alert('Something went wrong!  Please try again!')
      })
  }

  const FavoritesCard = ({ pic }) => {
    return (
      <div className="overflow-hidden">
        <img className='mr-3 rounded-2xl h-52 w-52 object-cover object-center' src={pic} alt='Favorite' />
      </div>
    );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-secondary p-8 rounded-2xl">
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>
        
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Who goes there? </span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-white py-4 px-6 rounded-lg placeholder:text-slate-400 text-secondary outlined-none border-none font-medium"
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Drop your email </span>
              <input 
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-white py-4 px-6 rounded-lg placeholder:text-slate-400 text-secondary outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Your Message</span>
              <textarea 
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Lets hear it!"
                className="bg-white py-4 px-6 rounded-lg placeholder:text-slate-400 text-secondary outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit" 
              className="bg-charcoal py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}

            </button>

          </form>
        
        </motion.div>

        
        <div className='flex flex-wrap flex-col justify-center'>
          {favorites.map((favs) => (
            <FavoritesCard key={favs.fav} pic={favs.pic} />   
          ))}
        </div>

        {/* 3-D Image      
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] max-w-[350px]"
        >
          <LotusCanvas />

        </motion.div>
         */}

    </div>
  )
}

export default SectionWrapper(Contact, "contact")