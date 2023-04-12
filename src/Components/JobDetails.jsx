import { useLoaderData, useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import SingleJobDetails from './SingleJobDetails';
import { addDb } from '../utils/fakeDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredCart } from '../utils/fakeDb';
const JobDetails = () => {
  const data = useLoaderData()
  let { id } = useParams()
  const category = data.find(item => item.id === parseInt(id));

  const handleApply = (jobApply) => {
    const getStoreData = getStoredCart();
    for (const id in getStoreData) {
      const addedProduct = jobApply.id === parseInt(id);
      if (addedProduct) {
        toast.error("You Are Already Apply This Job !!!");
        return
      }
    }
    toast.success("Wow You Are Apply This Job !!!");
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
