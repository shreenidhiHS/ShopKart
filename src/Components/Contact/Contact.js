import React from 'react'
import  styles from "./Contact.scss"
import Navbar from '../Navbar/Navbar'


export default function  Contact(){



  return (
    <>
      <Navbar  display={false}
              logout={false}
              contact={false}
              Home={true}
      />
      <div className='contact'>
      <h1>Contact-us</h1>
      <p>Shreenidhi Bhat</p>
      <p>React-developer</p>
      <ul>
        <li>Email: fakeemail@gmail.com</li>
        <li>Phone: 123456789</li>
        <li>adderes: qwertyuiosdfgh</li>
      </ul>
    </div>
    </>
    
  )
}

