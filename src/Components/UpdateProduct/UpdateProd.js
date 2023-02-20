import React,{useEffect, useState} from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { GetOne, UpdateCall } from '../../API/APICall';
import Navbar from '../Navbar/Navbar';
import "./update.scss"
import { useDispatch } from 'react-redux';
import { dataActions } from '../redux-store/DataSlice';

const UpdateProd = (props) => {

const prod = useParams()
const id = prod.id;
const dispatch = useDispatch();
const [formData , setFormData] = useState({});
const [verify , setVerify] = useState(false);
const navigate = useNavigate();

//default value text
useEffect(()=>{
  getFormData(id);
})
 async function getFormData(id){
  const temp = await GetOne(id)
  setFormData(temp);
  
}

//handleform

const [data, setData] = useState({});
const { register, handleSubmit } = useForm();

//
  
  const handleRegister = (data) => {
    const sendData ={
      id : id,
      data: data
    }
    dispatch(dataActions.updateProduct(sendData))
    setData(data)
    getData(data)
    console.log(data)
  }

   async function getData(data) {
    const ProdData = await UpdateCall(id,data);
    console.log(ProdData)
    setVerify(true)
    
  }
  
  if(verify)
  {
    return navigate("/product")
  }
  
  

  return (
    <div>
        <Navbar Home={true} />
        <h1 className='from-head'>Update product</h1>
        <div className='form'>
            <form onSubmit={handleSubmit((data) =>{
              handleRegister(data)
            })} >
            <label className='form-label'>Title</label>
            
            <input className="p-name"
            type="text"
            defaultValue={formData.title}
            placeholder={formData.title}
            {...register("title")}
          />
          <label className='form-label'>Price</label>
          <input className="p-price"
            type="text"
            placeholder="price"
            defaultValue={formData.price}
            {...register("price")}
          />
          <label className='form-label'>Image-URL</label>
          <input className="p-image"
            type="text"
            placeholder="image-url"
            label="Image"
            defaultValue={formData.image}
            {...register("image")}
          />
          <label className='form-label'>category</label>
          <input className="p-category"
            type="text"
            defaultValue={formData.category}
            placeholder={formData.category}
            {...register("category")}
          />
          <label className='form-label'>DesCription</label>
           <input className="p-description"
            type="text"
            defaultValue={formData.description}
            placeholder={formData.description}
            {...register("description")}
          />
  
          <button className="submitbtn" type="submit">UPDATE</button>
            </form>

        </div>
        {verify && 
          <>
          <p className='added-text'>{data.title} Updated Successfully</p>
          </>
        }
      
    </div>
  )
}

export default UpdateProd
