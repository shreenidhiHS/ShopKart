import React, { useEffect } from 'react'
import { useState } from 'react';
import {  useForm } from "react-hook-form";
import "./Login.scss"
import { json } from 'react-router';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/AuthSlice';

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verify , setVerify] = useState(true);
  const {register , handleSubmit} = useForm();

  function handleLogin(formdata){
    const localData = JSON.parse(localStorage.getItem("Id"));
    dispatch(authActions.login())

    if(localData ==null)
      {
        setVerify(false)
      }
    else if(localData.email === formdata.email && localData.password === formdata.password)
    {
      setVerify(true)
      return navigate("/Product")
    }
    else{
      setVerify(false)
    }
  }
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
      {verify ? <p></p> : <p style={{color: "red"}}>Wrong ID or Password</p>}
      <p className='link' onClick={handlesign}>Not a user ? Sign-up</p>
    </div>
    </>
    
  )
}
