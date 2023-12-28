import axios from 'axios';
import { Button, FileInput, Label, TextInput } from 'flowbite-react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Edit() {

    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [coursList, setCoursList] = useState([]);
    const params = useParams();
  
    
    const handleDataChange = (e) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const response = await axios.put('http://localhost:1000/api/admin/cours/'+params.id, {name,price,image} , {withCredentials: true} );
  
        console.log(response.data.msg)
      } catch (error) {
        console.error('Error uploading image:', error);
  
      }
    };


  
     useEffect(() => {
      const getCoursList = async () => {
        const response = await axios.get('http://localhost:1000/api/admin/cours/'+params.id);
        setCoursList(response.data.cours);
      }

    
      getCoursList();
    }, [])
  

  return (
    <div className='flex flex-col m-7' >
    <h1 className='text-4xl font-bold m-4'>Edit cours </h1>
    
    <form className="flex max-w-md flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label htmlFor="name" value="Cours Name" />
      </div>
      <TextInput defaultValue={coursList.name} onChange={(e)=>setName(e.target.value)} id="name" type="text" placeholder="React/NodeJs" required shadow />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="price" value="Cours Price" />
      </div>
      <TextInput defaultValue={coursList.price} onChange={(e)=>setPrice(e.target.value)} id="price" type="number" required shadow />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="image" value="Cours Image" />
      </div>
      <FileInput onChange={handleDataChange} id="image" />
    </div>
    
    <div>
      <div className="mb-2 block">
        <Label htmlFor="imageprev" value="Cours Image priview" />
      </div>
      <img src={coursList.image} id='imageprev' />
    </div>
    <div className="flex items-center gap-2">
     
    </div>
    <Button onClick={handleSubmit} color='cyan' type="submit">Edit this cours</Button>
  </form>

     
  </div>
  )
}

export default Edit