import React from 'react';

const Catagory = ({ jobsCatagoryData }) => {
  const jobsCategory = jobsCatagoryData.category

  return (
    <div className='my-container'>
      <div className='text-center'>
        <h3 className='lg:text-4xl md:text-3xl text-xl font-semibold mb-2 md:font-bold'>Job Category List</h3>
        <p className='md:text-md text-sm text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {jobsCategory.map((jobCategory, index) => (
            <div key={index} className="max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="border-2 rounded-sm p-2 bg-gray-50 shadow-sm w-1/3">
              <img src={jobCategory.logo} alt="icon image" />
              </div>
              <a href="#">
                <h5 className="mb-2 md:text-xl text-md font-semibold tracking-tight text-gray-900 dark:text-white mt-4">{jobCategory.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{jobCategory.jobs_available}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Catagory;