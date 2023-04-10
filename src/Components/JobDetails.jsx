import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData()
  // console.log(`job`,job);

  return (
    <div>
      <h3 style={{textAlign:'center',color:'#2c3e50',fontSize:'24px'}}>This Is Our job details Components</h3>

    </div>
  );
};

export default JobDetails;