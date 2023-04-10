import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { MdOutlineAttachMoney } from 'react-icons/md';
const JobCard = () => {
  return (
    <div className='my-container'>
      <div className='text-center'>
        <h3 className='lg:text-4xl md:text-3xl text-xl font-semibold mb-2 md:font-bold'>Featured Jobs</h3>
        <p className='md:text-md text-sm text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          <div className="max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="border-2 rounded-sm p-2 bg-gray-50 shadow-sm w-full">
              <img src="https://source.unsplash.com/random/800x600" alt="icon image" />
            </div>
            <h5 className="mb-2 md:text-xl text-md font-semibold tracking-tight text-gray-900 dark:text-white mt-4">Technical Database Engineer</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Google LLC</p>
            <div className='flex'>
              <button type='button' className='btn-outlined '>
                Remote
              </button>
              <button type='button' className='btn-outlined'>
                Fulltime
              </button>
            </div>
            <div className="grid md:grid-cols-2 mt-4">
              <div className='flex items-center'><span className='px-1'><TfiLocationPin/></span>  Dhaka, Bangladesh</div>
              <div className='flex items-center'><span className='px-1'><MdOutlineAttachMoney/></span> Dhaka, Bangladesh</div>
            </div>
            <button type="button" className="gradient-btn mt-4">View Details</button>



          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;