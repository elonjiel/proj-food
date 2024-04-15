import React from 'react'
import { Banner1, Banner2, Banner3 } from '../images'

const images = [Banner1, Banner2, Banner3]

function Header({title, image, type}) {
  return (
    <div className="w-full h-[100vh]">
        <div className="relative w-full h-full">
            <img src={image ?? images[Math.floor(Math.random() * images.length)]} 
            alt="Header Image" 
            className="w-full h-full object-cover"
            />
        </div>

        <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
            <h1 className="text-white text-4xl md:text-5xl font-b text-center">{title}</h1>

            {
                 type && (
                    <p className='text-base mt-7 text-center text-yellow-300 bg-slate-950/70 px-6 py-4 rounded '>Embark on a flavorful journey at FlavorFusion,
                      <br className='hidden md:block' /> where every recipe is a culinary masterpiece waiting to be explored!"</p>
                 )
            }
        </div>
    </div>
  )
}

export default Header