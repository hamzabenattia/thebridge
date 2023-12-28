import { Button, FileInput, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios from 'axios'

function AddItem() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [success, setSuccess] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);



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
    setIsLoaded(true)
  
    try {
      const response = await axios.post('http://localhost:1000/api/admin/cours/', {name,price,image} , {withCredentials: true} );

setSuccess(response.data.msg)
setIsLoaded(false)

    } catch (error) {
      console.error('Error uploading image:', error);
      setIsLoaded(false)

    }
  };


  return (
    <div className='flex flex-col m-7' >
      <h1 className='text-4xl font-bold m-4'>Add Cours</h1>
      
      <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Cours Name" />
        </div>
        <TextInput onChange={(e)=>setName(e.target.value)} id="name" type="text" placeholder="React/NodeJs" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Cours Price" />
        </div>
        <TextInput onChange={(e)=>setPrice(e.target.value)} id="price" type="number" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="image" value="Cours Image" />
        </div>
        <FileInput onChange={handleDataChange} id="image" />
      </div>
      <div className="flex items-center gap-2">
       {success && <p className="text-green-500">{success}</p>}
      </div>
      {isLoaded && <p className="text-gray-600">Loading...</p>}
      <Button onClick={handleSubmit} color='cyan' type="submit">Add new cours</Button>
    </form>

       
    </div>
  )
}

export default AddItem