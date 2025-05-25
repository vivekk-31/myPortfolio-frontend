import React from 'react'

const ProjectCard = ({ projectName, projectDescription, projectPreview, link }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-6 p-4 rounded-xl shadow-md cursor-pointer max-w-md">
        <img
          src={projectPreview}
          alt="project-preview"
          className="w-full h-[225px] md:w-[380px] md:h-[400px] rounded-2xl object-cover border-3 dark:border-gray-600"
          onClick={link}
        />
        <p className="text-base border-3 md:h-[125px] rounded-2xl dark:border-gray-600 p-4 text-center">
          <span className="font-semibold text-xl" onClick={link}>
            {projectName}
          </span>
          {projectDescription}
        </p>
      </div>
    </div>
  );
};


export default ProjectCard
