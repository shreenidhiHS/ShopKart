import React,{useState , useEffect} from "react"
import axios from "axios"
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from './Footer/Footer';
import NavbarTest from './Components/Navbar/Navbartest';
import Product from './Components/Product/Product';
import Contact from "./Components/Contact/Contact";
import Productdesc from "./Components/Product/Productdesc";
import AddProduct from "./Components/AddProduct/AddProduct";
import UpdateProd from "./Components/UpdateProduct/UpdateProd";
import RemoveProd from "./Components/RemoveProduct/RemoveProd";
import { GetCall } from "../src/API/APICall.js";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { Button } from 'primereact/button';
import { useDispatch } from "react-redux";
import dataActions from "./Components/redux-store/DataSlice";
import { useSelector } from "react-redux";



export default function App() {
  
  
  
  const data = useSelector((state)=> state.data.data)
  const [loading ,setLoading] = useState(false)
  const [prodcut , setProduct] = useState([])
  const dispatch = useDispatch();

  // //set API data to reducer
  // useEffect(() =>{
  //   callApi();
  // },[]);

  // async function callApi(){

  //   const response = await axios.get("https://fakestoreapi.com/products")
  //   dispatch(dataActions.addData(response.data)); 
  // }
  

  


  //calling API
  // useEffect(() =>{
  //   setLoading(true)
  //   GetAllProduct();
  // },[]);

  // const GetAllProduct = async ()=>{
  //   try {
  //     const prod =  await GetCall();
  //     setProduct(prod)
  //     setLoading(false)
  //     // dispatch(dataActions.addData(prod));
  //   } catch(e){
  //     console.log(e)
  //   }
    
  // }
  
  console.log(data)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" 
        element={
        <Product 
          loading={loading}
          prodcut={data}
        />
        } 
        />
        <Route exact path={"/product/:id/*"}
        element={ 
            <Productdesc 
            product={data}
            />
        }
        />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdateProd/:id" element={<UpdateProd  data={prodcut}/>} />
        <Route path="/RemoveProd/:id" element={<RemoveProd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar" element={<NavbarTest />} />

      </Routes>
    
      
      <Footer />
    </div>
  )
}


