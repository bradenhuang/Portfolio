/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const HomeSection = () => {
  return (
    <section id='Home' className='bg-slate-900 p-8 w-full flex justify-center pt-20'>
      <div className='flex flex-col md:flex-row justify-center items-center text-white max-w-5xl'>
        <div className='mb-4 md:mb-0 md:mr-8 text-center md:text-left'>
          <h3 className='text-xl md:text-2xl'>Hi, my name is</h3>
          <h1 className='text-4xl md:text-6xl font-bold text-cyan-200'>Braden Huang</h1>
          <div className='text-base md:text-lg mt-5'>
            I'm a third year student at the University of Calgary <br />
            pursuing a Bachelor's in Software Engineering
          </div>
        </div>
        <div>
          <Image 
            src='/headshot.jpg' 
            alt='Braden Huang' 
            width={325} 
            height={325}
            className='rounded-xl'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeSection
