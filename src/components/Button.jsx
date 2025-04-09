import React from 'react'

const Button = ({name, toggleFunction}) => {
  return (
    <div>
      <button className=' sm:h-12 sm:w-45 h-10 w-40 rounded-lg mt-4 cursor-pointer active:scale-95 hover:dark:shadow-[0_0_25px_#D3D3D3] hover:shadow-[0_0_25px_#8A9A5B] transition duration-400 border font-bold' onClick={toggleFunction}>{name}</button>
    </div>
  )
}

export default Button
