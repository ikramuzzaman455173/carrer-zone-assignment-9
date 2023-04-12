import React from 'react'
import { Link } from 'react-router-dom'
import { TfiLocationPin } from 'react-icons/tfi';
import { MdOutlineAttachMoney } from 'react-icons/md';
const SingleAppliedJobs = ({ appliedJob }) => {
  const { companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltime, id } = appliedJob

  return (
    <>
      <div className="max-w-4xl md:mx-auto mx-10 mb-10 p-8 sm:flex sm:space-x-6 bg-slate-50 text-gray-800 border-2 rounded-md">
        <div className="flex-shrink-0 justify-between w-full md:mb-6 h-28 sm:h-32 sm:w-32 sm:mb-0">
          <img src={companyLogo} alt="logo image" className=" w-full border-2 h-24 rounded" />
        </div>
        <div className="flex flex-col w-1/2">
          <div><h3 className='text-md font-semibold mb-1'>{jobTitle}</h3></div>
          <div><h3 className='text-sm font-bold mb-1'>{companyName}</h3></div>
          <div className='flex relative'>
            <button type='button' className='btn-outlined'>
            {remoteOrOnsite}
            </button>
            <button type='button' className='btn-outlined'>
              {fulltime}
            </button>
          </div>
          <div className="flex items-center lg:flex-row md:flex-col mt-5">
            <div className="grid md:grid-cols-2 mb-4">
              <div className='flex items-center pb-2'><span className='px-1'><TfiLocationPin /></span>  {location}</div>
              <div className='flex items-center'><span className='px-1'><MdOutlineAttachMoney /></span> {salary}</div>
            </div>

          </div>
        </div>
        <div className="flex items-center md:justify-end justify-start md:w-1/3 w-full text-center">
          <Link to={`../jobdetails/${id}`}>
          <button className='gradient-btn'>View Details</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SingleAppliedJobs