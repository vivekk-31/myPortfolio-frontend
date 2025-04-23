import React from 'react'
import Boundary from './Boundary'
import todo from '../assets/todo-preview.avif'
import spotify from '../assets/spotify-preview.png'
import portfolio from '../assets/portfolio-preview.jpg'
import ProjectCard from './ProjectCard'

const visitTodo=()=>{
  window.open("https://todo-list-zeta-wheat-17.vercel.app/", "_blank");
}

const visitSpotify=()=>{
  window.open("https://github.com/vivekk-31/Spotify-Clone/", "_blank");
}

const Projects = ({projectName, projectDescription, projectPreview, link}) => {
  return (
    <>
    <div className='px-4 max-w-5xl mx-auto min-h-full md:px-35 md:mb-20'>
  <h1 className='md:text-5xl text-4xl font-semibold mb-4 text-center md:mb-10'>Projects</h1>

  <div className="flex flex-col md:flex-row md:justify-center gap-12 md:mx-20">
    
    {/* Project 1 */}
    <ProjectCard projectName={"Todo List:"} projectDescription={"A responsive to-do list app built with React and Tailwind CSS. Users can add, edit, complete, and delete tasks, with data stored in local storage for persistence."} projectPreview={todo} link={visitTodo}/>
    
    {/* Project 2 Placeholder */}
    <ProjectCard projectName={"Spotify Clone:"} projectDescription={"A responsive Spotify clone built with HTML, CSS, and JavaScript, featuring music playback, playlist navigation, and an intuitive interface."} projectPreview={spotify} link={visitSpotify}/>

     {/* Project 3 Placeholder */}
     <ProjectCard projectName={"Personal Portfolio:"} projectDescription={"This responsive and modular web portfolio built with React, styled using Tailwind CSS, and backed by Express. Designed to highlight my skills, and details."} projectPreview={portfolio}/>
    
  </div>
</div>

    </>
  )
}

export default Projects
