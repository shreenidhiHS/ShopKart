import React, { useEffect } from 'react'
import { useState } from 'react';
import {  useForm } from "react-hook-form";
import "./Login.scss"
import { json } from 'react-router';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux-store/AuthSlice';
import { dataActions } from '../redux-store/DataSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Login() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verify , setVerify] = useState(true);
  const {register , handleSubmit} = useForm();


  //set API data to reducer
  useEffect(() =>{
    callApi();
  },[]);

  async function callApi(){
    const response = await axios.get("https://fakestoreapi.com/products")
    dispatch(dataActions.addData(response.data)); 
  }

  //handle login data
  function handleLogin(formdata){
    const localData = JSON.parse(localStorage.getItem("Id"));

    if(localData.email === formdata.email && localData.password === formdata.password)
    {
      setVerify(true)
      dispatch(authActions.login())
      return navigate("/Product")
    }
    else{
      setVerify(false)
    }
  }

  //navigate signup if not a user
  function handlesign(){
    return navigate("/signup")
  }



  return (
    <>
      <Navbar display={false}
              logout={false}
              contact={true} 
      />
      <div className='login-form'>
      <h1 className='login-head'>WELCOME TO SHOP</h1>
      <h1 className='login-h2'>PLEASE LOGIN</h1>
      <form className='form-ele' onSubmit={handleSubmit((formdata) =>{
        handleLogin(formdata)
      })}>
      <input className="email"
        type="email"
        placeholder="E-mail"
        {...register("email",{required:"This is required"})}
      />
      <input className="password"
        type="text"
        placeholder="password"     
        {...register("password",{required:"This is required"})}
          />
        <button className='login-btn' type='submit'>Login</button>
      </form>
      
      {!verify && <p style={{color: "red"}}>Wrong ID or Password</p>}
      <p className='link' onClick={handlesign}>Not a user ? Sign-up</p>
    </div>
    </>
    
  )
}
