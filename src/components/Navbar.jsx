
import React, {useEffect, useState} from 'react'; 
import { Link } from 'react-router-dom';
import { styles } from '../styles'; 
import { navLinks } from '../constants'; 
import {logo, menu, close} from '../assets';
import { act } from '@react-three/fiber';

const Navbar = () => {
  //used to determine if the current page is active or not
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false); 
  return (
    <nav
      className={
        //grab device padding from styles.js for each screen size and use tailwind to format className
        `${styles.paddingX} w-full flex items-center py-5 pt-10 fixed z-20 bg-secondary`}
        >
          <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link
              to="/"
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                //scroll to the top of the page
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
              <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                sstone &nbsp;
                <span className='sm:block hidden'> | Samantha Stone </span></p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((link)=>(
                <li
                  key={link.id}
                  //check if we are on the page (if page id is active)
                  className={`${
                    active === link.title
                    //if active or hover over highlight nav bar link to be white, otherwise grey
                    ? "text-charcoal"
                    : "text-white"
                  } hover:text-charcoal text-[18px] font-medium cursor-pointer`}
                  onClick={()=> setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>


            {/*mobile navigation bar that can toggle open and closed*/}
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img 
              //if user has toggled the nav menu then close if opened or open if closed 
                src={toggle ? close:menu} 
                alt="menu" 
                className='w-[28px] h-[28px] object-contain cursor-pointer' 
                onClick={() => setToggle(!toggle)}
                />
                {/*if the menu has not been toggled then show the hidden icon for the menu, otherwise show the flex icon */}
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                  <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {navLinks.map((link)=>(
                      <li
                        key={link.id}
                        //check if we are on the page (if page id is active)
                        className={`${
                          active === link.title
                          //if active or hover over highlight nav bar link to be white, otherwise grey
                          ? "text-white"
                          : "text-secondary"
                        }font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={()=> {
                          //close the togle when a link is clicked
                          setToggle(!toggle); 
                          setActive(link.title);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              
             
            </div>
            
          </div>
    </nav>
  )
}

export default Navbar