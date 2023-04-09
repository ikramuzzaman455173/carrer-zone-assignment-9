import React from 'react';
import Catagory from './Catagory';
import JobCard from './JobCard';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header/>
      <Catagory />
      <JobCard/>
    </>
  );
};

export default Home;