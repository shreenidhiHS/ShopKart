import React,{useState} from 'react'
import { AddCall } from '../../API/APICall';
import { useForm } from "react-hook-form";
import "./AddProduct.scss"
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function AddProduct() {

  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
  console.log(isLoggedIn)
  const handleRegister = (Formdata) => {
    setData(Formdata)
    setDataToApi(Formdata)
  }

   async function setDataToApi(Formdata) {
    const prodData = await AddCall(Formdata);
    return setData(prodData);
    
  }
  console.log(data)

  return (
    <div>
        <Navbar Home={true}
                logout={true}
        
        />
        {isLoggedIn && (
          <>
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
          </>

        )}
        {!isLoggedIn && (
          <Link to="/"><h1>Plase Login :)</h1></Link>
        )}
        
      
    </div>
  )
}

export default AddProduct
