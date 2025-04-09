import React from 'react'
import Footer from './Footer'
import ContactButton from './ContactButton'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import instagram from '../assets/instagram.svg'
import x from '../assets/x.svg'
import linkedIn from '../assets/linkedIn.svg'
import github from '../assets/github.svg'


const Contact = () => {

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const visitInstagram = () => {
    window.open("https://www.instagram.com/vivekk.31/#", "_blank");
  }

  const visitLinkedIn = () => {
    window.open("https://www.linkedin.com/in/vivek-singh-29a916249/", "_blank");
  }

  const visitGitHub = () => {
    window.open("https://github.com/vivekk-31", "_blank");
  }

  const visitX = () => {
    window.open("https://x.com/vivekkk31", "_blank");
  }

  const onSubmit = async (data) => {
    const toastId = toast.loading('Submitting...');

    try {
      const res = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success('Message sent!', { id: toastId });
      } else {
        toast.error('Failed to send.', { id: toastId });
      }
    } catch (err) {
      toast.error('Something broke.', { id: toastId });
    }

  };

  return (
    <>
      <div className="px-4 max-w-4xl mx-auto min-h-full md:px-10 md:mb-20 mt-10">
        <h1 className="md:text-5xl text-4xl font-semibold mb-4 text-center md:mb-10"> Contact Me</h1>

        <form className="flex flex-col gap-6 bg-[#F2F0E6] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:min-w-[100%]">
            <label className="md:w-24 font-semibold">Name:</label>
            <div className="flex flex-col flex-1">
              <input type="text" className="bg-[#E2DFD2] text-black dark:bg-[#262626] dark:text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a6b27] focus:dark:ring-[#4b4b4b]" placeholder="Enter your name"
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters are allowed in name" }
                })} />
              {errors.name && <div className='text-red-700 mt-1 text-sm'>{errors.name.message}</div>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="md:w-24 font-semibold">Email:</label>
            <div className="flex flex-col flex-1">
              <input type="email" className="bg-[#E2DFD2] text-black dark:bg-[#262626] dark:text-gray-300 p-2 rounded-md focus:outline-none focus:ring-[#5a6b27] focus:dark:ring-[#4b4b4b]" placeholder="Enter your email"
                {...register("email", {
                  required: { value: true, message: "Please enter your email" },
                  pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Please enter a valid email" }
                })} />
              {errors.email && <div className='text-red-700 mt-1 text-sm'>{errors.email.message}</div>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <label className="md:w-24 font-semibold mt-2">Message:</label>
            <div className="flex flex-col flex-1">
              <textarea className="bg-[#E2DFD2] text-black dark:bg-[#262626] dark:text-gray-300 p-2 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:dark:ring-[#4b4b4b]" placeholder="Your message"
                {...register("message", { required: { value: true, message: "Please enter your message" } })} />
              {errors.message && <div className='text-red-700 mt-1 text-sm'>{errors.message.message}</div>}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ContactButton isSubmitting={isSubmitting} />
          </div>

          <div className="social">
            <div className="flex justify-center sm:flex-row sm:items-center gap-6 sm:gap-20 flex-wrap">

              <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                <img src={instagram} alt="instagram"className="h-10 w-10 sm:h-13 sm:w-13 mx-auto hover:shadow-[0_0_20px_#e44d26] rounded-2xl transition duration-500 ease-in-out cursor-pointer" onClick={visitInstagram}/>
              </div>

              <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                <img src={github} alt="github" className="h-10 w-10 sm:h-13 sm:w-13 mx-auto dark:hover:shadow-[0_0_20px_#D9D9D6] hover:shadow-[0_0_20px_#63666A] rounded-2xl transition duration-500 ease-in-out cursor-pointer" onClick={visitGitHub}/>
              </div>

              <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                <img src={linkedIn}   alt="linkedin"  className="h-10 w-10 sm:h-13 sm:w-13 mx-auto hover:shadow-[0_0_20px_#50ABE7] rounded-2xl transition duration-500 ease-in-out cursor-pointer" onClick={visitLinkedIn} />
              </div>

              <div className="flex gap-10 flex-wrap justify-center pt-4 sm:pt-0">
                <img src={x}  alt="x" className="h-10 w-10 sm:h-13 sm:w-13 mx-auto dark:hover:shadow-[0_0_20px_#D9D9D6] hover:shadow-[0_0_20px_#63666A] fill-[#F2F0E6] rounded-2xl transition duration-500 ease-in-out cursor-pointer dark:invert"  onClick={visitX}/>
              </div>
            </div>
          </div>

        </form>
      </div>

      <Footer />
    </>
  )
}

export default Contact
