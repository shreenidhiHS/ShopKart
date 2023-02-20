import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Card(props){

    const navigate = useNavigate()
    function handleClick(id){
        return navigate(`/product/${id}`)
    }

    
  return (
    <>
        <div key={props.data.id} onClick={() =>handleClick(props.data.id)} className="card">
            <img src={props.data.image} alt="#" className='card-img'/>
            <div className="card-des">
                <h2>{props.data.title}</h2>
                <h2 className="price">Price: {props.data.price}</h2>
                <h2 className="price">Category: {props.data.category}</h2>
               
            </div>
        </div>
    
    </>
    
  )
}

export default Card
