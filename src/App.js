import React,{useState , useEffect} from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom";
import Footer from './Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
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



export default function App() {
  
  

 
  const [loading ,setLoading] = useState(false)
  const [prodcut , setProduct] = useState([])

  useEffect(() =>{
    setLoading(true)
    GetAllProduct();
  },[]);

  const GetAllProduct = async ()=>{
    try {
      const prod =  await GetCall();
     setProduct(prod)
     setLoading(false)
    } catch(e){
      console.log(e)
    }
    
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" 
        element={
        <Product 
          loading={loading}
          prodcut={prodcut}
        />
        } 
        />
        <Route exact path={"/product/:id/*"}
        element={ 
            <Productdesc 
            product={prodcut}
            />
        }
        />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdateProd/:id" element={<UpdateProd  data={prodcut}/>} />
        <Route path="/RemoveProd/:id" element={<RemoveProd />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
      
      <Footer />
    </div>
  )
}


