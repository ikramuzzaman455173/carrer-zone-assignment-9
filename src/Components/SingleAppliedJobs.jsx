import React from 'react'
import { Link } from 'react-router-dom'
import { TfiLocationPin } from 'react-icons/tfi';
import { MdOutlineAttachMoney } from 'react-icons/md';
const SingleAppliedJobs = ({ appliedJob }) => {
  // console.log(`jobPost`, appliedJob);
  const { companyLogo, companyName, jobTitle, location, salary, remoteOrOnsite, fulltime, id } = appliedJob

  return (
    <>
      <div className="max-w-4xl md:mx-auto mx-10 mb-10 p-8 sm:flex sm:space-x-6 bg-slate-50 text-gray-800 border-2 rounded-md">
        <div className="flex-shrink-0 justify-between w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
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
            {/* <div className="flex-content gap-1 lg:flex-row md:flex-col">
                <img src="../assets/Icons/Frame-4.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <p className='text-sm'>{location}</p>
            </div>

          <div className="flex-content gap-1  pl-4">
                <img src="../assets/Icons/Frame.png" className='w-4 h-4 mt-1 mr-1' alt="frame png image" />
                <p className='text-sm'>{salary}.</p>
            </div> */}

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
