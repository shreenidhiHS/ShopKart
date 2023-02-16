import React,{useState} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { UpdateCall } from '../../API/APICall';
import Navbar from '../Navbar/Navbar';



const UpdateProd = (props) => {
const prod = useParams()
const id = prod.id;



const [data, setData] = useState(props.data);
  const { register, handleSubmit } = useForm();
  
  const handleRegister = (data) => {
    setData(data)
    getData(data)
  }

   async function getData(data) {
    const ProdData = await UpdateCall(id,data);
    return setData(ProdData);
    
  }
  console.log(data)

  return (
    <div>
        <Navbar Home={true} />
        <h1 className='from-head'>Update product</h1>
        <div className='form'>
            <form onSubmit={handleSubmit((data) =>{
              handleRegister(data)
            })} >
            <input className="p-name"
            type="text"
            placeholder="title"
            {...register("title",{required:"This is required"})}
          />
          <input className="p-price"
            type="text"
            placeholder="price"
            
            {...register("price",{required:"This is required"})}
          />

          <input className="p-image"
            type="text"
            placeholder="image-url"
            label="Image"
            {...register("image",{required:"This is required"})}
          />
          <input className="p-category"
            type="text"
            placeholder="category"
            {...register("category",{required:"This is required"})}
          />
           <input className="p-description"
            type="text"
            placeholder="description"
            {...register("description",{required:"This is required"})}
          />
  
          <button className="submitbtn" type="submit">UPDATE</button>
            </form>

        </div>
      
    </div>
  )
}

export default UpdateProd
