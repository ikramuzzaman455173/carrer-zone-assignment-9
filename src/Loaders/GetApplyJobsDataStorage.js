import { getStoredCart } from "../utils/fakeDb"

export const jobPostData = async () => {
  const jobpost = async () => {
    const postData = await fetch('/jobsData.json')
    const JobpostSData = await postData.json()
    console.log(JobpostSData);
  }
}

