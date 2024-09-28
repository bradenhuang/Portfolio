import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='Contact' className='bg-slate-900 justify-center w-full flex p-8'>
      <div className='w-full max-w-5xl text-white'>
        <div className='mb-8 text-center text-3xl md:text-5xl font-bold'>
          Contact Me
        </div>
        <div className='text-center'>
          <div className='flex justify-center space-x-8'>
            <Link href='https://github.com/bradenhuang'>
              <button className='hover:text-gray-400'>
                <FaGithub size={60} />
              </button>
            </Link>
            <Link href='https://www.linkedin.com/in/braden-huang-90332518a/'>
              <button className='hover:text-gray-400'>
                <FaLinkedin size={60} />
              </button>
            </Link>
            <Link href='mailto:bradenhuang01@gmail.com'>
              <button className='hover:text-gray-400'>
                <HiOutlineMail size={60} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
