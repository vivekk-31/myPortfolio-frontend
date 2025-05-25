import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
import todo from '../assets/todo-preview.webp'
import spotify from '../assets/spotify-preview.png'
import portfolio from '../assets/portfolio-preview.jpg'
import geet from '../assets/geet-preview.png'

const projectsData = [
  {
    projectName: "My Task: ",
    projectDescription: "A responsive to-do list app built with React and Tailwind CSS. Users can add, edit, complete, and delete tasks, with data stored in local storage. Built it to practice React",
    projectPreview: todo,
    link: () => window.open("https://todo-list-zeta-wheat-17.vercel.app/", "_blank")
  },
  {
    projectName: "Spotify Clone: ",
    projectDescription: "A responsive Spotify clone built with HTML, CSS, and JavaScript, featuring music playback and playlist navigation. Built it to practice JavaScript",
    projectPreview: spotify,
    link: () => window.open("https://github.com/vivekk-31/Spotify-Clone/", "_blank")
  },
  {
    projectName: "Personal Portfolio: ",
    projectDescription: "A modular portfolio built with React, styled using Tailwind CSS, and backed by Express which showcases my work and my background .",
    projectPreview: portfolio
  },
  {
    projectName: "Geet: ",
    projectDescription: "A MERN stack music player with React and Express which supports user authentication, song upload, and music streaming.",
    projectPreview: geet,
    link: () => window.open("https://geet-vivekk.vercel.app/", "_blank")
  }
]

const Projects = () => {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 2)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const dotCount = Math.ceil(projectsData.length / itemsPerPage)

  // Slide by index * itemsPerPage (for desktop), or index (mobile swipe)
  const slideToIndex = (index, isSwipe = false) => {
    const logicalIndex = isSwipe ? index : index * itemsPerPage
    const offset = logicalIndex * (100 / projectsData.length)
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${offset}%)`
    }
    setCurrentIndex(logicalIndex)
  }

  // Swipe gesture support (swipe one project at a time on mobile)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX
    }

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        const next = (currentIndex + 1) % projectsData.length
        slideToIndex(next, true)
      } else if (touchEndX > touchStartX + 50) {
        const prev = (currentIndex - 1 + projectsData.length) % projectsData.length
        slideToIndex(prev, true)
      }
    }

    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentIndex])

  useEffect(() => {
    slideToIndex(Math.floor(currentIndex / itemsPerPage))
  }, [itemsPerPage])

  return (
    <div className='px-4 max-w-6xl mx-auto min-h-full md:px-8 md:mb-20' ref={containerRef}>
      <h1 className='text-4xl md:text-5xl font-semibold text-center mb-10'>Projects</h1>

      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ width: `${projectsData.length * (100 / itemsPerPage)}%` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2"
              style={{ width: `${100 / projectsData.length}%` }}
            >
              <ProjectCard
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectPreview={project.projectPreview}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation (page-based, not per card) */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: dotCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => slideToIndex(index)}
            className={`h-3 w-3 rounded-full ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? 'dark:bg-black scale-125 bg-[#5a6b27]'
                : 'bg-gray-400'
            } transition-transform duration-300`}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
