import React from 'react'
import {FaWhatsapp,FaEnvelope,FaFacebook} from 'react-icons/fa6'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
            <div className=' block  items-center mt-5 p-8'>

<ul className=' justify-center mx-auto flex'>
  <a href="#" target="_blank" rel="noopener noreferrer"><li className='mx-4'><FaWhatsapp size={30}/></li></a>  
    <li className='mx-4'><FaEnvelope size={30}/></li>
   <a href="#" target="_blank" rel="noopener noreferrer"><li className='mx-4'><FaFacebook size={30}/></li></a> 
</ul>
</div>

<hr />
<div className=' block items-center uppercase font-bold'>
    <ul className='grid md:flex justify-center'>
   <li className='m-4'><Link to="/sibongakonkhe/">Home</Link></li> 
   <li className='m-4'><Link to="/sibongakonkhe/about">About</Link> </li>
   <li className='m-4'><Link to="/sibongakonkhe/services">Services</Link></li>   
       <li className='m-4'><Link to="/sibongakonkhe/contact">Contact</Link></li> 
    </ul>
 </div>

    <p className=' block  text-center pb-4'>
       &copy; {new Date().getFullYear()} Sibongakonkhe.
    </p>
    </div>
  )
}

export default Footer