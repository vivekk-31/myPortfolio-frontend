import React from 'react'

const ContactButton = ({ isSubmitting }) => {
    return (
      <button
        type="submit"
        disabled={isSubmitting}
        className={`sm:h-12 sm:w-45 h-10 w-40 rounded-lg mt-4 font-bold transition duration-300 border
          ${isSubmitting 
            ? "bg-gray-400 text-white cursor-not-allowed" 
            : "cursor-pointer active:scale-95 hover:shadow-[0_0_25px_#8A9A5B] dark:hover:shadow-[0_0_25px_#D3D3D3]"}`}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    );
  };
  
  export default ContactButton;
  

