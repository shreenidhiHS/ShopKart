import React from 'react'
import { Route,Link,Routes, useNavigate } from 'react-router-dom';
import Contact from '../Contact/Contact.js'
import "./Navbar.scss"
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/AuthSlice.js';




export default function Navbar(props){

const Navigator = useNavigate()    
function handleClick(){
  return Navigator("/AddProduct");
}

const temp = JSON.parse(localStorage.getItem("Id"))

const dispatch = useDispatch();
function handleLogout(){
  dispatch(authActions.logout())
}

  return (
    <div>
    <nav>
        <h1>ShopKart</h1>
        <ul>
            
            {props.display &&
            <li className='Link-text'>Hi {temp.FirstName}</li>
            }
            
            {props.Home ?(<li className='Link-text'><Link to="/Product" className='Link-text'> Home </Link></li>):(<p></p>)}
            <br/>
            {props.display &&
            <button className='btn-add' onClick={handleClick}>
              ADD-ITEM
            </button>
            }
            {props.contact ? (<li className='Link-text'><Link to="/Contact" className='Link-text'> Contact </Link></li>):(<p></p>)}
            {props.logout ? <li className='Link-text'><Link to="/" className='Link-text' onClick={handleLogout}>Logout</Link></li> : <p></p>} 
        </ul>
    </nav>
    </div>
  )
}


