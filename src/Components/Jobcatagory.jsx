import React, { useEffect, useState } from 'react';
import SingleJobCatagory from './SingleJobCatagory';

const Catagory = () => {
  const [jobCategorys, setJobCategory] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`job-catagory.json`);
      const jobPosts = await res.json();
      setJobCategory(jobPosts);
    };
    loadData();
  }, []);

  return (
    <div className='my-container'>
      <div className='text-center'>
        <h3 className='lg:text-4xl md:text-3xl text-xl font-semibold mb-2 md:font-bold'>Job Category List</h3>
        <p className='md:text-md text-sm text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {
            jobCategorys.map((jobCategory)=><SingleJobCatagory jobCategory={jobCategory} key={jobCategory.id}/> )
          }
        </div>
      </div>
    </div>
  );
};

export default Catagory;