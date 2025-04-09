import React from 'react'

const ProjectCard = ({projectName, projectDescription, projectPreview, link}) => {
  return (
    <div>
      <div className="flex flex-col md:flex items-center gap-6 p-4 rounded-xl shadow-md cursor-pointer">
            <img 
              src={projectPreview} 
              alt="todo-preview" 
              className='w-full h-[225px] md:w-[380px] md:h-[420px] rounded-2xl object-cover border-3 dark:border-gray-600' onClick={link}
            />
            
            <p className="text-base md:w-[380px] border-3 rounded-2xl dark:border-gray-600 p-4"> <span className='font-semibold text-xl'>{projectName} </span>
            {projectDescription}
            </p>
          </div>
      
    </div>
  )
}

export default ProjectCard
