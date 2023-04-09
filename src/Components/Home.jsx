import React from 'react';
import Jobcatagory from './Jobcatagory';
import JobCard from './JobCard';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const jobsCatagoryData = useLoaderData()

  return (
    <>
      <Header/>
      <Jobcatagory jobsCatagoryData={jobsCatagoryData} />
      <JobCard/>
    </>
  );
};

export default Home;