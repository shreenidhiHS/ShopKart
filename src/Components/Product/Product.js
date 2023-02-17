import React,{useState , useEffect} from "react"
import axios from "axios"
import Card from "./Card"
import { Link } from "react-router-dom"
import "./Product.scss"
import Navbar from "../Navbar/Navbar"
import { useSelector } from "react-redux"


export default function Product(props) {

const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)



  return (
    <div >
      
      {isLoggedIn ? (
        <>
          
          <Navbar display={true}
                  logout={true}
                  contact={true}
                  Home={false} 
          />
          {props.loading && <h1>Loading...</h1>}
          <div className="product">
            {props.prodcut.map((data =>(
                <Card key={data.id}
                    data={data}
                    dark={props.dark}
              />   
          )))}
          </div>
        </> 
      ):(
        <div>
          <Link to="/" className="Link-login"><p>please Login to use :)</p></Link>
        </div>
      )}
    </div>
  )
}

