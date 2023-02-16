import React, { useEffect,useState } from 'react'
import { Routes,Route,useParams,useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { DeleteCall, GetOne } from '../../API/APICall'
import RemoveProd from '../RemoveProduct/RemoveProd'

const Productdesc = (props) => {
  const prod = useParams()
  const id = prod.id;

  const [data ,setData] = useState([]);
  useEffect(()=>{
    GetSingleProduct(id);
  },[])
   
  async function GetSingleProduct(id){
    const ProdData = await GetOne(id)
    setData(ProdData)
  }
  console.log(data)

  const navigate = useNavigate()
  function handleUpdate(id){
    return navigate(`/UpdateProd/${id}`)
  }
  async function handleRemove(id){
    const prodId = id;
    const result = await DeleteCall(prodId)
    console.log(result)
    return navigate(`/RemoveProd/${id}`)
  }
  

  return (
    <>
      <Navbar Home={true}
              logout={true}
      />
      <Link to="/"className='btn-back'><button >Bact to Home</button></Link>
      <div className='product-desc'>
      <img src={data.image}/>
      <div className='text'>
        <h2>{data.title}</h2>
        <h3>{data.price} USD</h3>
        <h3>{data.category}</h3>
        <p>{data.description}</p>
      </div>
    </div>
    <div className='op-btn'>
      <button className='btn-update' onClick={() =>handleUpdate(id)}>UPDATE</button>
      <button className='btn-update' onClick={() =>handleRemove(id)}>REMOVE</button>
    </div>
    
    
    </>
    )
}

export default Productdesc
