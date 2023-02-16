import React from 'react'
import "./removeproduct.scss"
import { useParams } from 'react-router'
import Navbar from '../Navbar/Navbar'

const RemoveProd = () => {
  const prod = useParams()
  const id = prod.id;

  return (
    <>
      <Navbar Home={true} />
      <div className='rmc'>
      <p>Item {id} Removed successfully</p>
  </div>
    </>
    
  )
}

export default RemoveProd
