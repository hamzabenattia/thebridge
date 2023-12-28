import { Link } from "react-router-dom"
import Card from "../../components/Card"
import DeleteModel from "../../components/Models/DeleteModel"
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const getCoursList = async () => {
      setIsLoaded(true);

      const response = await axios.get('http://localhost:1000/api/admin/cours');
      setData(response.data.cours);
      setIsLoaded(false);

    }
  
    getCoursList();
  }, [])



  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold mb-5 ">All Cours List:</h1>
      {
        isLoaded ? <h1>Loading...</h1> :      <div className="flex flex-wrap gap-9">

        {
          data?.map((cours) => (
            <div key={cours._id} className="flex flex-col">
              <Card cours={cours}/>
              <div className="flex justify-between items-center mx-10 ">
              <button className="px-5 py-1 rounded-lg bg-orange-300" >View</button>
              <Link to={`/dashboard/edit/${cours._id}`}>
                <button className="px-5 py-1 rounded-lg bg-orange-300" >Edit</button>
              </Link>
              <button 
             onClick={ () => setOpenModal(true)}
              className="px-5 py-1 rounded-lg bg-orange-300" >Delete</button>
              </div>
              <DeleteModel openModal={openModal} setOpenModal={setOpenModal} cours={cours}/>

            </div>
          ))
        }


      </div>
      }
 
     
      
    </div>
   


  )
}

export default Dashboard