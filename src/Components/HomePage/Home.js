import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();
    function handleClick(){
        return navigate("/product")
    }
  return (
    <div>
      <h1>Welcome to Shop</h1>
      <p>Login</p>
      <h1 onClick={handleClick}>See All products</h1>
    </div>
  )
}
