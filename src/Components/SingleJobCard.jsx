import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { MdOutlineAttachMoney } from 'react-icons/md';
const SingleJobCard = ({ jobPost }) => {
  console.log(jobPost);
  const {companyLogo,companyName,jobTitle,fulltime,remoteOrOnsite,location,salary } = jobPost
  return (
          <div className="max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="border-1 w-1/2 h-16 rounded-sm p-2 bg-gray-50 shadow-sm">
              <img src={companyLogo} alt="icon image" />
            </div>
            <h5 className="mb-2 mt-5 md:text-xl text-md font-semibold tracking-tight text-gray-900 dark:text-white mt-4">{jobTitle}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{companyName}</p>
            <div className='flex'>
              <button type='button' className='btn-outlined '>
              {remoteOrOnsite}
              </button>
              <button type='button' className='btn-outlined'>
                {fulltime}
              </button>
            </div>
            <div className="grid md:grid-cols-2 mt-4">
              <div className='flex items-center mb-2'><span className='px-1'><TfiLocationPin/></span>  {location}</div>
              <div className='flex items-center'><span className='px-1'><MdOutlineAttachMoney/></span> {salary}</div>
            </div>
            <button type="button" className="gradient-btn mt-4">View Details</button>
          </div>
  );
};

export default SingleJobCard;