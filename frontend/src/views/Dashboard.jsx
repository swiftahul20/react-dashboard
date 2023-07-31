import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Dashboard() {
  const serverURI = 'http://ec2-3-27-95-22.ap-southeast-2.compute.amazonaws.com:8000';
  const [profiles, setprofiles] = useState("")

  useEffect(() => {
    getProfileCount();
  }, []);

  const getProfileCount = async () => {
    try {
      const response = await axios.get(`${serverURI}/users`);
      setprofiles(response.data.length);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className='w-full h-32 border border-gray-200 drop-shadow-sm rounded-lg bg-white'>
        <p className='text-md text-gray-600 px-8 pt-8 pb-3 tracking-widest'> Total Profile </p>
        <span className='text-3xl font-bold text-black px-8 tracking-wide'> {profiles} </span>
      </div>
      <div className='w-full h-32 border border-gray-200 drop-shadow-sm rounded-lg bg-white'>
        <p className='text-md text-gray-600 px-8 pt-8 pb-3 tracking-widest'> Total -- </p>
        <span className='text-3xl font-bold text-black px-8 tracking-wide'> -- </span>
      </div>
      <div className='w-full h-32 border border-gray-200 drop-shadow-sm rounded-lg bg-white'>
        <p className='text-md text-gray-600 px-8 pt-8 pb-3 tracking-widest'> Total -- </p>
        <span className='text-3xl font-bold text-black px-8 tracking-wide'> -- </span>
      </div>
    </div>
  )
}
