'use client';
import React, { useState } from 'react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <nav className='relative flex justify-between items-center m-4'>
            <div>
                <a href="" className="logo">
                    <span className='block sm:hidden'>FERJO</span>
                    <span className='hidden sm:block'>FERNANDEZ JONATHAN</span>
                </a>
            </div>
            <ul className='hidden sm:flex'>
                <li className='pr-8'><a href="#About me">About me</a></li>
                <li className='pr-8'><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>

            <div className='sm:hidden'>
                <button onClick={toggleMenu}>
                    <img 
                    src={isMenuOpen ?
                     '/icon-menu-back.svg' :
                      '/icon-menu.svg'} 
                      alt=""
                      className='transform transition-transform duration-75 ease-in-out'
                      style={{ transform: isMenuOpen ? "rotate(360deg)" : "rotate(0deg)" }}
                      />
                </button>
            </div>
            

            {isMenuOpen && (
               <div className='absolute top-16 right-4 mr-2  transition-all duration-700 ease-in-out'>
               <ul className='animate-fade-in'>
                    <li className='p-2'><a href="#About me">About me</a></li>
                    <li className='p-2'><a href="#Projects">Projects</a></li>
                    <li className='p-2'><a href="#Contact">Contact</a></li>
                </ul>
                </div>
             
            )}
            
           

        </nav>


    )
}