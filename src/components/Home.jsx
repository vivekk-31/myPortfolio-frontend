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

  const toggleSection=()=>{
     const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  

  return (
    <>
    <div className='container flex-grow md:flex justify-around flex-none md:min-h-full '>
      <div className="left md:px-15 md:my-15  md:flex-none md:justify-normal flex justify-center py-10  ">
      <img src={Portfolio} alt="" className=' md:h-100 md:w-100 md:rounded-full h-45 w-45 rounded-full' />
      </div>
      <div className="right flex flex-col justify-center items-center text-center flex-grow md:flex-none">
        <h1 className='md:text-7xl font-semibold text-4xl'>Vivek</h1>
        <h3 className='md:text-4xl text-2xl md:py-1'> <span ref={typedRef}></span></h3>
        <h4 className='md:text-xl font-semibold text-sm mx-3'>Crafting ideas into clean interfaces.
        One line of code at a time.</h4>
        <h5 className='md:text-sm text-sm'>In silence, I shape the logic of things.</h5>
        <Button name={"Know More"} toggleFunction={toggleSection}/>
      </div>
    </div> 
    </>
  )
}

export default Home
