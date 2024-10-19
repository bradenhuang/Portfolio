import React from 'react'

const Experience = () => {
  return (
    <section id='Experience' className='bg-slate-900 p-8 w-full flex justify-center'>
      <div className='w-full max-w-5xl text-white'>
        <div className='mb-8 text-center text-3xl md:text-5xl font-bold'>
          Experience
        </div>
        <a href = 'https://github.com/BCharity-Net/good'>
          <div className='bg-slate-800 p-6 rounded-lg shadow-lg hover:bg-slate-700' >
            <div className='flex flex-col md:flex-row justify-between items-start'>
            <div className='text-lg md:text-xl font-semibold'>
                Software Developer · ECSSEN Career School
              </div>
              <div className='text-sm md:text-base text-gray-400'>
                June — August 2024
              </div>
            </div>
            <div className='mt-4 text-base md:text-lg'>
              Worked on the developement of the BCharity website, a decentralized platform built with Lens Protocol to help charities maintain clarity in their operations.
            </div>
            <div className='mt-4 text-base md:text-lg'>
              <div className='font-bold'>Key Contributions:</div>
              <ul className='list-disc list-inside'>
                <li>Developed and designed components for the BCharity website to handle user request posts</li>
                <li>Successfully migrated the application from deprecated Lens Protocol V1 to Lens V2</li>
                <li>Identified and fixed bugs to enhance user experience</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Experience
