import React, { useRef, useEffect, useState } from 'react'
import Typed from 'typed.js'
import Portfolio from '../assets/Portfolio.png'
import Button from './Button'

const Home = ({name, toggleFunction}) => {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current,{
      strings:["Aspiring Web Developer", "Frontend Enthusiast"],
      typeSpeed:50,
      backSpeed:40,
      backDelay:1000,
      loop:true,
      showCursor:true,
      cursorChar: "|",
    })

    return () => {
      typed.destroy(); 
    };
  }, [])

  const toggleSection = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  

  return (
  <>
    <div className='flex-grow md:flex justify-around flex-none md:min-h-full md:my-20 my-10'>
      
      {/* Left Side */}
      <div className="left flex justify-center py-10 md:w-1/2 md:items-center md:justify-center">
        <img 
          src={Portfolio} 
          alt="" 
          className='h-45 w-45 md:h-90 md:w-90 rounded-full md:rounded-full object-cover' 
        />
      </div>

      {/* Right Side */}
      <div className="right flex flex-col justify-center items-center text-center flex-grow md:w-1/2 md:px-4">
        <h1 className='md:text-7xl font-semibold text-4xl'>Vivek</h1>
        <h3 className='md:text-4xl text-2xl md:py-1'>
          <span ref={typedRef}></span>
        </h3>
        <h4 className='md:text-xl font-semibold text-sm mx-3'>
          Crafting ideas into clean interfaces. One line of code at a time.
        </h4>
        <h5 className='md:text-sm text-sm'>
          In silence, I shape the logic of things.
        </h5>
        <Button name={"Know More"} toggleFunction={toggleSection} />
      </div>
    </div>
  </>
);


}

export default Home
