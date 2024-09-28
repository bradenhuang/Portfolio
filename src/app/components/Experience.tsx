import React from 'react'

const Experience = () => {
  return (
    <section id='Experience' className='bg-slate-900 p-8 w-full flex justify-center'>
      <div className='w-full max-w-5xl text-white'>
        <div className='mb-8 text-center text-3xl md:text-5xl font-bold'>
          Experience
        </div>
        <div className='bg-slate-800 p-6 rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row justify-between items-start'>
          <div className='text-lg md:text-xl font-semibold'>
              Software Developer · ECSSEN Career School
            </div>
            <div className='text-sm md:text-base text-gray-400'>
              June — August 2024
            </div>
          </div>
          <div className='mt-4 text-base md:text-lg'>
            Developed and designed components for the BCharity website to handle user request posts. Worked on migration from deprecated libraries and resolved user bugs.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
