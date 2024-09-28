"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 65) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-slate-900 p-4 fixed w-full transition-transform duration-300${
        showNav ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex space-x-10'>
          <Link href='#Home'>
            <span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Home</span>
          </Link>
        </div>
        <div className='hidden md:flex space-x-10'>
          <Link href='#About'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>About</span></Link>
          <Link href='#Experience'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Experience</span></Link>
          <Link href='#Projects'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Projects</span></Link>
          <Link href='#Contact'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Contact</span></Link>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={30} className='text-white' /> : <IoMenu size={30} className='text-slate-200' />}
          </button>
        </div>
      </div>
      {navbar && (
        <div className='flex flex-col items-center mt-4 space-y-4 md:hidden'>
          <Link href='#About'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>About</span></Link>
          <Link href='#Experience'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Experience</span></Link>
          <Link href='#Projects'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Projects</span></Link>
          <Link href='#Contact'><span className='rounded px-4 py-2 hover:text-slate-500 cursor-pointer text-lg'>Contact</span></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
