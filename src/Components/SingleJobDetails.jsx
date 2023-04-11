import React from 'react'

const SingleJobDetails = ({ category }) => {
  const {jobDescription,jobResponsibility,jobTitle,location,salary,contactInformation,experiences,educationalRequirements  }=category
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div><strong>Job Description: </strong> <span className='font-md text-gray-500'>{jobDescription}</span></div><br />
            <div><strong>Job Responsibility: </strong> <span className='font-md text-gray-500'>{jobResponsibility}</span></div><br />
            <div><strong>Educational Requirements: </strong><br /><br /> <span className='font-md text-gray-500'>{educationalRequirements}</span></div><br />
            <div><strong>Experiences: </strong><br /><br /> <span className='font-md text-gray-500'>{experiences}</span></div><br />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5 divide-y-2">Job Details</h2>
            <hr className='w-full mx-auto mb-2' />
            <div className="relative mb-4">
              <div className="flex-content gap-1">
                <img src="../assets/Icons/Frame.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <strong>Salary:</strong>
                <p className='text-md'>{salary}</p>
              </div>
              <div className="flex-content gap-1 mb-2">
                <img src="../assets/Icons/Frame-1.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <strong>Job Title:</strong>
                <p className='text-md'>{jobTitle}</p><br /><br />
              </div>

              <h2 className="text-gray-900 text-lg font-medium title-font mb-5 divide-y-2">Contact Information</h2>
              <hr className='w-full mx-auto mb-2' />
            </div>

            <div className="relative mb-4">
              <div className="flex-content gap-1 mb-3">
                <img src="../assets/Icons/Frame-2.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <strong>Phone:</strong>
                <p className='text-md'>{contactInformation.phone}</p>
              </div>

              <div className="flex-content gap-1 mb-2">
                <img src="../assets/Icons/Frame-3.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <strong>Email:</strong>
                <p className='text-md'> {contactInformation.email}</p>
              </div>

              <div className="flex-content gap-1 mb-2">
                <img src="../assets/Icons/Frame-4.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <strong>Address:</strong>
                <p className='text-md'>{location}</p>
              </div>
              </div>

            <button className="gradient-btn">Apply Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleJobDetails
