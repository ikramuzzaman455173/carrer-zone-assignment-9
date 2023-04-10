import React from 'react';

const SingleJobCatagory = ({ jobCategory }) => {
  // console.log(jobCategory);
  const {logo,name,jobs_available,}=jobCategory
  return (
      <div className="max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="border-2 rounded-sm p-2 bg-gray-50 shadow-sm w-1/3">
          <img src={logo} alt="icon image" />
        </div>
        <a href="#">
          <h5 className="mb-2 md:text-xl text-md font-semibold tracking-tight text-gray-900 dark:text-white mt-4">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{jobs_available}</p>
      </div>
  );
};

export default SingleJobCatagory;