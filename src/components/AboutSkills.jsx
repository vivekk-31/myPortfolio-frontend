import React from 'react'

const AboutSkills = ({title, name1, name2, name3, name4, source1, source2, source3, source4}) => {
  return (
    <div>
       <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-wrap">
                    <span className="text-xl font-semibold min-w-[100px] flex justify-center">{title}</span>
                    <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                      <div><img src={source1} alt="HTML" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_20px_#e44d26] rounded-2xl transition duration-400" /><span className="block text-center mt-1">{name1}</span></div>
                      <div><img src={source2} alt="CSS" className="h-13 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_20px_#00bfff] rounded-2xl transition duration-400" /><span className="block text-center mt-1">{name2}</span></div>
                      <div><img src={source3} alt="JavaScript" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_25px_#FFFF00] rounded-2xl transition duration-400" /><span className="block text-center mt-1">{name3}</span></div>
                      <div><img src={source4} alt="React" className="h-12 w-12 sm:h-15 sm:w-15 mx-auto hover:shadow-[0_0_25px_#008080] rounded-2xl transition duration-400" /><span className="block text-center mt-1">{name4}</span></div>
                    </div>
                  </div>
    </div>
  )
}

export default AboutSkills
