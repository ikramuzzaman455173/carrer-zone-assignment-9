import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import SingleJobDetails from './SingleJobDetails';
import { addDb } from '../utils/fakeDb';

const JobDetails = () => {
  // const [jobDetails, setjobDetails] = useState("")
  const data = useLoaderData()
  let {id} = useParams()
  const category = data.find(item => item.id === parseInt(id));


  const handleApply = (jobApply) => {
    console.log(`jobApply`, jobApply);
    const exists = data.find((pd) => pd.id === jobApply.id);
    if (!exists) {
      alert('Already Apply The This Jobs !')
      return
    } else {
      const remaining = data.filter((pd) => pd.id !== jobApply.id);
      console.log(remaining,'reamiing');
    }
    addDb(jobApply.id);
  }

  return (
    <div>
      <HeroSection>Job Details</HeroSection>
      <SingleJobDetails category={category} handleApply={handleApply} />

    </div>
  );
};

export default JobDetails;
