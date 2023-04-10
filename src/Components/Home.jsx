import React from 'react';
import Jobcatagory from './Jobcatagory';
import JobCard from './JobCard';
import Header from './Header';

const Home = () => {
  // const jobsCatagoryData = useLoaderData()

  return (
    <>
      <Header/>
      <Jobcatagory/>
      <JobCard/>
    </>
  );
};

export default Home;