import React, { useEffect,useState } from 'react'
import { Routes,Route,useParams,useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { DeleteCall, GetOne } from '../../API/APICall'
import RemoveProd from '../RemoveProduct/RemoveProd'
import { Button } from 'primereact/button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { dataActions } from '../redux-store/DataSlice'

const Productdesc = (props) => {


  const prod = useParams()
  const id = prod.id;
  const [laoding , setLoading] = useState(true);
  const dispatch = useDispatch();
  const [data ,setData] = useState([]);


//use redux
dispatch(dataActions.getSingle(id));
const singleData = useSelector((state)=> state.data.singleProd)



//calling APi for getOne product
  useEffect(()=>{
    setLoading(true)
    GetSingleProduct(id);
  },[])
   
  async function GetSingleProduct(id){
    const ProdData = await GetOne(id)
    setData(ProdData)
    setLoading(false)
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
    dispatch(dataActions.removeProduct(id));
    return navigate(`/product`)
  }
  

  return (
    <>
      <Navbar Home={true}
              logout={true}
      />
      <Link to="/product"className='btn-back'><button >Bact to Home</button></Link>
      {laoding ? (<h2>Laoding....</h2>):(
        <>
        <div className='product-desc'>
        <img src={singleData.image}/>
        <div className='text'>
          <h2>{singleData.title}</h2>
          <h3>{singleData.price} USD</h3>
          <h3>{singleData.category}</h3>
          <p>{singleData.description}</p>
        </div>
      </div>
      <div className='op-btn'>
        <button className='btn-update' onClick={() =>handleUpdate(id)}>UPDATE</button>
        <DeleteIcon label="Danger" severity="danger" className='btn-update' onClick={() =>handleRemove(id)}>REMOVE</DeleteIcon>
      </div>
      </>
      )}
      
    </>
    )
}

export default Productdesc
