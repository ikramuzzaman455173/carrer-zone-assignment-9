import { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDb';
import FilterDrowpDownMenu from './FilterDrowpDownMenu';
import HeroSection from './HeroSection';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
  const [products, setProducts] = useState([]);
const [jobPost, setJobPost] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/jobsData.json");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(`404 page not found ${error}`);
    }
  };

  fetchData();
}, []);



useEffect(() => {
  const getStoreData = getStoredCart();
  let saveJobPost = [];
  for (const id in getStoreData) {
    const addedProduct = products.find((pd) => pd.id === parseInt(id));
    if (addedProduct) {
      saveJobPost.push(addedProduct);
    }
  }
  setJobPost(saveJobPost);
}, [products]);



  return (
    <div>
      <HeroSection>Applied Jobs</HeroSection>
      <div>
        <FilterDrowpDownMenu />
        {
          jobPost.map((appliedJob=><SingleAppliedJobs key={appliedJob.id} appliedJob={appliedJob}/>
          ))
        }
      </div>
    </div>
  );
};

export default AppliedJobs;