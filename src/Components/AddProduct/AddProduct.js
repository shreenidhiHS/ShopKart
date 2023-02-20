import React,{useEffect, useState} from 'react'
import { AddCall } from '../../API/APICall';
import { useForm } from "react-hook-form";
import "./AddProduct.scss"
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dataActions } from '../redux-store/DataSlice';


function AddProduct() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [id, setId] = useState({});
  const [verify , setVerify] = useState(false);
  const { register, handleSubmit } = useForm();
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)


  const handleRegister = (Formdata) => {
    setData(Formdata);
    setDataToApi(Formdata);
    dispatch(dataActions.addproduct(Formdata))
  }

   async function setDataToApi(Formdata) {
    const prodData = await AddCall(Formdata);
    setVerify(true)
    console.log(prodData.id);
    
    
  }
  if(verify)
  {
    return navigate("/product")
  }

  
  
  
  

  return (
    <div>
        <Navbar Home={true}
                logout={true}
        
        />
        {isLoggedIn && (
          <div className='add-page'>
            <h1 className='from-head'>Add a new product</h1>
            <div className='form'>
            <form  onSubmit={handleSubmit((data)=>{
              handleRegister(data)
            })}>
            <input className="p-name"
            type="text"
            placeholder="title"
            {...register("title" , {required:"This is required"})}
            
          />
          <input className="p-name"
            type="text"
            placeholder="id"
            {...register("id" , {required:"This is required"})}
            
          />
          <input className="p-price"
            type="text"
            placeholder="price"
            {...register("price",{required:"This is required"})}
          />
          <input className="p-image"
            type="text"
            placeholder="image-URL"
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
          <button className="submitbtn" type="submit">Submit</button>
            </form>
            
        </div>
        {verify && 
          <>
          <p className='added-text'>{data.title} Added Successfully</p>
          </>
        }
        </div>

        )}
        {!isLoggedIn && (
          <Link to="/"><h1>Plase Login :)</h1></Link>
        )}
        
      
    </div>
  )
}

export default AddProduct
