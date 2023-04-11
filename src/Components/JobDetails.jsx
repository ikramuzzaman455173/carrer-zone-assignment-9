import { useLoaderData, useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import SingleJobDetails from './SingleJobDetails';
import { addDb } from '../utils/fakeDb';

const JobDetails = () => {
  const data = useLoaderData()
  let {id} = useParams()
  const category = data.find(item => item.id === parseInt(id));

  const handleApply = (jobApply) => {
    // const exists = data.find((pd) => pd.id !== jobApply.id);
    // if (!exists) {
    //   console.log(exists);
    //   return
    // } else {
    //   const remaining = data.filter((pd) => pd.id === jobApply.id);
    //   console.log(remaining);
    //   alert('Applied This Job')
    // }
    addDb(jobApply.id);
  }

  return (
    <div>
      <HeroSection>Job Details</HeroSection>
      <div className='my-5'><SingleJobDetails category={category} handleApply={handleApply} /></div>
    </div>
  );
};

export default JobDetails;