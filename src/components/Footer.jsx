import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"

import React from 'react'

function Footer() {
  return (
    <footer className="text-white py-10 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center text-lg">
                        Flavor<span className="text-yellow-300">Fusion</span>
                    </p>
                </div>

                <div className="">
                    <p className="text-yellow-300">QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Chiefs
                        </a>
                    </div>
                </div>

                <div>
                    <p className="text-yellow-300">LEGAL</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            License Agreement
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Copyright Information
                        </a>
                        <a
                            href="#"
                            className="block md:inline-block py-2 hover:text-yellow-300"
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-yellow-300">SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href="#"
                            className="p-1.5 rounded-sm text-white hover:text-yellow-300 hover:scale-110"
                        >
                            <FaFacebook size={24} />
                        </a>

                        <a
                            href="#"
                            className="p-1.5 rounded-sm text-white hover:text-yellow-300 hover:scale-110"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            className="p-1.5 rounded-sm text-white hover:text-yellow-300 hover:scale-110"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="#"
                            className="p-1.5 rounded-sm text-white hover:text-yellow-300 hover:scale-110"
                        >
                            <FaYoutube size={24} />
                        </a>
                    </div>

                    <Button
                        title="Sign up"
                        btnType="button"
                        containerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-yellow hover:text-yellow-300 hover:border-yellow-300 rounded-md min-w-[130px]'
                    />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <span className="text-white">Made by Elon Jiel &copy; 2024</span>
            </div>
        </footer>
  )
}

export default Footer