import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Contact from '../components/Contact'
import axios from 'axios';

function Home() {
  const [coursList, setCoursList] = useState([]);

  useEffect(() => {
    const getCoursList = async () => {
      const response = await axios.get('http://localhost:1000/api/admin/cours');
      setCoursList(response.data.cours);
    }
  
    getCoursList();
  }, [])


  return (
    <>
    <Header/>
<div className="flex flex-col">
 <div className='flex justify-between m-10'>
  <h1 className='font-bold text-3xl'>Discover Our Courses</h1>
  <button className='rounded-2xl bg-[#AF2F64] px-4 py-1 text-sm text-white font-bold'>View More </button>
 </div>
 <div className='flex gap-4 m-4 flex-wrap items-center justify-center'>
  {
    coursList.map((cours,i)=>(
      <Card cours={cours} key={i}/>
    ))
  }

 </div>

</div>

<Contact/>
    </>
  )
}

export default Home