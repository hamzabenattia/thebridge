import React from 'react'
import image from '../assets/image1.jpg';
import logo from '../assets/LogoBridge.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex flex-col">
    <div className=" flex justify-between items-center">
      <img className="m-5" src={logo} alt="logo" />
      <Link to="/dashboard/all"><button className='bg-[#AF2F64] h-8 rounded-2xl text-white px-8 py-1 font-semibold my-2'>Dashboard</button></Link>


    </div>
    <div className='relative inline-block'>
      <img width="100%" src={image} className='h-96 object-cover' alt="logo" />
      <div className="bg-gray-500 bg-opacity-50 absolute  right-0 left-0 top-0  bottom-0 mx-auto my-auto  p-5  w-fit h-fit flex flex-col items-center justify-center ">
        <p className='text-2xl text-black font-bold'>Improve your skills on your own</p>
        <p className='text-2xl text-black font-bold'>To prepare for a better future</p>
        <button className='bg-[#AF2F64] rounded-2xl text-white px-8 py-1 font-semibold my-2'>
          REGISTER NOW
        </button>
      </div>
    </div>
  </div>
  )
}

export default Header