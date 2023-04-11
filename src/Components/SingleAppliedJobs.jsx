import React from 'react'
import FilterDrowpDownMenu from './FilterDrowpDownMenu'
const SingleAppliedJobs = () => {
  return (
    <>
      <FilterDrowpDownMenu/>
      <div className="max-w-4xl mx-auto p-8 sm:flex sm:space-x-6 bg-slate-50 text-gray-800 border-2 rounded-md">
        <div className="flex-shrink-0 justify-between w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeaRiIUClz_zmb4wOQADIgdA2q7ESjS4P6w&usqp=CAU" alt="logo image" className=" w-full border-2 h-24 rounded" />
        </div>
        <div className="flex flex-col w-1/2">
          <div><h3 className='text-md font-semibold mb-1'>Technical Database Engineer</h3></div>
          <div><h3 className='text-sm font-bold mb-1'>Google llc</h3></div>
          <div className='flex relative'>
            <button type='button' className='btn-outlined'>
              Remote
            </button>
            <button type='button' className='btn-outlined'>
              Fulltime
            </button>
          </div>
          <div className="flex items-center flex-wrap">
          <div className="flex-content gap-1 mt-5">
                <img src="../assets/Icons/Frame-4.png" className='w-4 h-5 mt-1 mr-1' alt="frame png image" />
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            </div>

          <div className="flex-content gap-1 mt-2 mb-5">
                <img src="../assets/Icons/Frame.png" className='w-4 h-4 mt-1 mr-1' alt="frame png image" />
                <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
            </div>



          </div>
        </div>
        <div className="flex  items-center justify-end w-1/3 text-center">
          <button className='gradient-btn'>View Details</button>
        </div>
      </div>
    </>
  )
}

export default SingleAppliedJobs
