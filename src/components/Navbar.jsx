import React, {useState} from 'react'
import {HiMenuAlt3} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import Button from './Button'

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
        <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
            <a href="/" className="flex items-center justify-center text-white text-lg cursor-pointer">
                <p>
                Flavor<span className="text-yellow-300">Fusion</span>
                </p>  
            </a>  
            <ul className="hidden md:flex text-white gap-6">
                 <li>
                     <a href="/" className="hover:text-yellow-300">Home</a>
                 </li>
                 <li>
                     <a href="/#recipes" className="hover:text-yellow-300">Explore</a>
                 </li>
                 <li>
                     <a href="/" className="hover:text-yellow-300">Contact Us</a>
                 </li>
            </ul>

            <Button
                title="Sign In"
                containerStyle= "hidden md:block bg-transparent border border-white text-white hover:border-yellow-300 hover:text-yellow-300 rounded-full min-w-[130px]"
            />

            <button className="block md:hidden text-white text-xl" 
                onClick={() => setOpen(prev => !prev)}>
                
                {open ? <AiOutlineClose /> :
                <HiMenuAlt3 />}
            </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-5 pb-8 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="/">Contact Us</a>
            </div>
        
    </header>
  )
}

export default Navbar