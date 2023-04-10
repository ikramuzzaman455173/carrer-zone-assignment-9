import React, {  useEffect, useState } from 'react';
import SingleJobCard from './SingleJobCard';

const JobCard = () => {
  const [data, setData] = useState([])
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`jobsData.json`);
      const jobpostData = await res.json();
      setData(jobpostData);
    };
    loadData();
  }, [data]);
  return (
    <div className='my-container'>
      <div className='text-center'>
        <h3 className='lg:text-4xl md:text-3xl text-xl font-semibold mb-2 md:font-bold'>Featured Jobs</h3>
        <p className='md:text-md text-sm text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
      {
        data&&data.slice(0,showAll?6:4).map(jobPost=><SingleJobCard key={jobPost.id} jobPost={jobPost}/>)
        }
      </div>
      </div>
      {!showAll && (
        <a className='m-10 flex justify-center items-center'  onClick={handleShowAll}>
          <button className='gradient-btn'>See All Jobs</button>
        </a>
      )}
    </div>
  );
};

export default JobCard;