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
                <a href="" className="logo">FERJO</a>
            </div>
            <ul className='hidden sm:flex'>
                <li><a href="#About me">About me</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>

            <div className='sm:hidden'>
                <button onClick={toggleMenu}>
                    <img 
                    src={isMenuOpen ?
                     '/icon-menu-back.svg' :
                      '/icon-menu.svg'} 
                      alt="" />
                </button>
            </div>
            

            {isMenuOpen && (
               <div className='absolute top-16 right-4'>
               <ul>
                    <li><a href="#About me">About me</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                </div>
             
            )}
            
           

        </nav>


    )
}