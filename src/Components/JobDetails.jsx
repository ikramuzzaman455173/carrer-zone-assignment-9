import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HeroSection from './HeroSection';

const JobDetails = () => {
  // const [jobDetails, setjobDetails] = useState("")
  const data = useLoaderData()
  let {id} = useParams()
  const category = data.find(item => item.id === parseInt(id));
  console.log(`category`,category);

  return (
    <div>
      <HeroSection>Job Details</HeroSection>
      <h3 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '24px' }}>This Is Our job details Components :{id}</h3>

    </div>
  );
};

export default JobDetails;