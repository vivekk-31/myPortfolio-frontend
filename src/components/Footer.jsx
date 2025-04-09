import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-center py-2 md:pt-3 text-base bg-[#bebdb6] text-[#323d12] dark:bg-[#323232] dark:text-gray-300">
            © {new Date().getFullYear()} Vivek | I can do this all day.
            </footer>
        </div>
    )
}
export default Footer
