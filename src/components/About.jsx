import React from 'react'
import '../App.css';
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import JavaScript from '../assets/JavaScript.svg'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import express from '../assets/express.svg'
import mongodb from '../assets/mongodb.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import Button from './Button';
import AboutSkills from './AboutSkills';

const handleDownload = () => {
  const anchor = document.createElement('a');
  anchor.href = '/public/VivekKumarSinghResume.pdf'; 
  anchor.download = 'VivekKumarSinghResume.pdf';
  document.body.appendChild(anchor); 
  anchor.click();
  document.body.removeChild(anchor); 
};


const About = ({name, toggleFunction, title, name1, name2, name3, name4, source1, source2, source3, source4}) => {
  return (
    <>
    
      <div className="px-4 max-w-5xl mx-auto mt-10 min-h-full md:px-30 mb-10">
        <div className="about ">
          <h1 className='md:text-5xl text-4xl  font-semibold mb-4 flex justify-center items-center'>Who am I?</h1>
          <p className="text-lg px-6 flex justify-center">I'm a developer who enjoys turning ideas into clean, functional interfaces. I work with HTML, CSS, JavaScript, and React, and I'm diving deeper into backend tools like Node.js and MongoDB. Writing better code with every project, learning constantly, and keeping things simple and meaningful.</p>
        </div>
        <div className="education mt-5">
          <h1 className='md:text-5xl text-4xl font-semibold mb-4 flex justify-center'>Education</h1>
          <h1 className='flex justify-center md:flex-none md:justify-normal text-xl font-semibold px-6 text-center mb-3 md:mb-1'>Bachelor of Computer Applications - 2024</h1>
          <p className='text-lg px-6 flex justify-center'>Completed my Bachelor’s in Computer Applications, but my real education came from building, breaking, and rebuilding projects on my own. Everything I know, I learned by doing. Curiosity, late nights, and real-world problem-solving taught me more than any classroom ever could.</p>
          <div className="flex justify-center">
          <Button name={"Download Resume"} toggleFunction={handleDownload}/></div>
        </div>

        <div className="skills mt-10 px-4">
          <h1 className='md:text-5xl text-4xl font-semibold mb-10 flex justify-center'>Skills</h1>

          <div className="flex flex-col gap-6">

            {/* Frontend */}
           <AboutSkills title={"Frontend: "} name1={"HTML"} name2={"CSS"} name3={"JavaScript"} name4={"React"} source1={html} source2={css} source3={JavaScript} source4={react}/>

            {/* Backend */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-wrap">
              <span className="text-xl font-semibold min-w-[100px] flex justify-center ">Backend:</span>
              <div className="flex gap-10 flex-wrap justify-center sm:items-center pt-4 sm:pt-0">
                <div><img src={nodejs} alt="Node.js" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_30px_#234d20] rounded-2xl transition duration-400" /><span className="block text-center mt-1">Node.js</span></div>
                <div><img src={express} alt="Express.js" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:dark:shadow-[0_0_25px_#A9A9A9] hover:shadow-[0_0_25px_#000000] rounded-2xl transition duration-400" /><span className="block text-center mt-1">Express.js</span></div>
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-wrap">
              <span className="text-xl font-semibold min-w-[100px] flex justify-center">Databases:</span>
              <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                <div><img src={mongodb} alt="MongoDB" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_25px_#006400] rounded-2xl transition duration-400" /><span className="block text-center mt-1">MongoDB</span></div>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-wrap md:mb-10">
              <span className="text-xl font-semibold min-w-[100px] flex justify-center">Tools:</span>
              <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                <div><img src={git} alt="Git" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_25px_#FF0000] rounded-2xl transition duration-400" /><span className="block text-center mt-1">Git</span></div>
                <div><img src={github} alt="GitHub" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:dark:shadow-[0_0_25px_#A9A9A9] hover:shadow-[0_0_25px_#000000] rounded-2xl transition duration-400" /><span className="block text-center mt-1 ">GitHub</span></div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default About
