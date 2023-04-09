import Lottie from 'lottie-react'
import React from 'react'
import Hiring from '../../public/animate-header.json'

const Header = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='lg:max-w-lg lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <h2 className='max-w-lg  mb-6 font-sans text-3xl md:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            One Step Closer To Your <span className='gradient-text font-extrabold mb-3'>Dream Job</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='inline-flex items-center w-full h-full'>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Started</button>
          </div>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={Hiring} loop={true} />
        </div>
      </div>
    </div>
  )
}

export default Header