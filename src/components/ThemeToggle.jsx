// ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log("the theme is: " + darkMode)
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log("the theme is: " + darkMode)
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)} className='cursor-pointer duration-300'
      >
     {darkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
    </div>
  );
}
