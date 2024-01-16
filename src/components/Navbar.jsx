import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [nav, setNav] = useState(false);

  const HandleNav =()=> 
  {
      setNav (!nav);
      if(!setNav)
      {
        document.body.style.overflow = 'hidden'
      }
      else
      {
        document.body.style.overflow = 'scroll'
      }
  }
  const closeMenu =()=> setNav(false);
  return (
    <div className=''>
        <div className='hidden md:flex justify-between shadow-md bg-blue-900 p-4'>
            <h1 className='uppercase text-red-500 font-bold'>
             <Link to="/sibongakonkhe/">Sibongakonkhe</Link>    
            </h1>



            <ul className='flex font-bold text-white'>
                <li className='mx-4'> <Link to="/sibongakonkhe/">Home</Link> </li>
                <li className='mx-4'> <Link to="/sibongakonkhe/about">About</Link> </li>
                <li className='mx-4'> <Link to="/sibongakonkhe/services">Services</Link> </li>
                <li className='mx-4'> <Link to="/sibongakonkhe/contact">Contact</Link> </li>

            </ul>
        </div>

        
        <div onClick={HandleNav} className='block  md:hidden '>
              { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={ 25}/>}
              
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 bg-[#000300] uppercase border-r w-[65%] border-r-gray-900 ease-in-out duration-500 z-10' : "fixed left-[-100%] z-10"}>
            <h1 className=' text-white mt-8 mx-6 font-bold font-krinkesregular text-xl'>
       Sibongakonkhe
        </h1>
            <ul className=' pt-24 font-bold text-white'>
               <li className='mx-6 pb-4'> <Link to="/sibongakonkhe/" onClick={closeMenu}>Home</Link> </li>
               <li className='mx-6 pb-4'><Link to="/sibongakonkhe/about" onClick={closeMenu}>About</Link> </li>
               <li className='mx-6 pb-4'><Link to="/sibongakonkhe/services" onClick={closeMenu}>Services</Link> </li> 
               <li className='mx-6 pb-4'><Link to="/sibongakonkhe/contact" onClick={closeMenu}>Contact</Link> </li> 
               
            </ul> 
            </div>
    </div>
  )
}

export default Navbar