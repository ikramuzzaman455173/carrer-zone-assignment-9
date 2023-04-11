// add data to local storage

const addDb = (id) => {
  let applyJob = {}
  //get previous shopping data for stoarge
  const storeJob = localStorage.getItem("job-post")
  if (storeJob) {
    // applyJob= JSON.parse(storeJob)
    applyJob = JSON.parse(storeJob)
  }
  // add quanTity products
  const quanTity = applyJob[id]
  if (quanTity) {
    const newQuantity = quanTity
    applyJob[id]=newQuantity
  } else {
    applyJob[id] = 1
  }
  localStorage.setItem('job-post',JSON.stringify(applyJob))
}


const getStoredCart = () => {
  let applyJob = {}
  //get previous shopping data for stoarge
  const storeJob = localStorage.getItem("job-post")
  if (storeJob) {
    applyJob=JSON.parse(storeJob)
  }
  return applyJob
}


export { addDb, getStoredCart}
