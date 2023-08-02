import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Switch } from "@material-tailwind/react";

export default function Settings() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="bg-white rounded-lg px-6 py-">
      <div className='py-4'>
        <h2 className="text-base font-semibold leading-7 text-gray-900"> Settings </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600"> Some setting for the panel. </p>
      </div>
    </div>
  )
}
