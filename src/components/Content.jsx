import React from 'react'


const Content = (props) => {

  return (
    <div name="home" className="w-full h-screen pl-72 p-10 bg-gray-50">
      <h3> {props.data} </h3>
      <div className="grid grid-cols-3 gap-6">
        <div className='w-full h-32 border border-gray-200 drop-shadow-sm rounded-lg bg-white'>
          <p className='text-md text-gray-600 px-8 pt-8 pb-3 tracking-widest'> Total User </p>
          <span className='text-3xl font-bold text-black px-8 tracking-wide'> 135 </span>
        </div>
        <div className='w-full h-32 border border-gray-200 drop-shadow-sm rounded-lg bg-white'>
          <p className='text-md text-gray-600 px-8 pt-8 pb-3 tracking-widest'> Total Store </p>
          <span className='text-3xl font-bold text-black px-8 tracking-wide'> 324 </span>
        </div>
        <div className='w-full h-32 border border-gray-200 drop-shadow-sm rounded-lg bg-white'>
          <p className='text-md text-gray-600 px-8 pt-8 pb-3 tracking-widest'> Total Visitors </p>
          <span className='text-3xl font-bold text-black px-8 tracking-wide'> 12,343 </span>
        </div>
      </div>
    </div>
  )
}

export default Content