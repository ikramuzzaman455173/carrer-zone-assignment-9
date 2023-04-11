import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import SingleJobDetails from './SingleJobDetails';

const JobDetails = () => {
  // const [jobDetails, setjobDetails] = useState("")
  const data = useLoaderData()
  let {id} = useParams()
  const category = data.find(item => item.id === parseInt(id));


  return (
    <div>
      <HeroSection>Job Details</HeroSection>
      <SingleJobDetails category={category} />

    </div>
  );
};

export default JobDetails;
