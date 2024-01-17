import React, {useState,useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.jpg'
const Navbar = () => {
  const [color, setColor] = useState('#1e3a8a');
  const [textColor, setTextColor] = useState('white');
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#1e3a8a');
        setTextColor('#ffffff');
      } else {
        setColor('#1e3a8a');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);


  return (
    <div  style={{ backgroundColor: `${color}` }} className='fixed  left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='justify-between mx-2 md:mx-8 p-4 flex '>
            <p className=' uppercase '><Link to="/sibongakonkhe/"><img src={logo2} alt=""  className='h-[40px] rounded-full'/></Link></p>


            <ul style={{ color: `${textColor}` }} className='hidden font-bold md:flex'>
            <li className='mx-4 my-2'> <Link to="/sibongakonkhe/">Home</Link>  </li>
                <li className='mx-4 my-2'> <Link to="/sibongakonkhe/about">About</Link>  </li>
                <li className='mx-4 my-2'> <Link to="/sibongakonkhe/services">Services</Link> </li>
                <li className='mx-4 my-2'> <Link to="/sibongakonkhe/contact">Contact</Link> </li>
            </ul>


            <div onClick={handleNav} className='block my-2 sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={22} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={22} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center text-white w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to="/sibongakonkhe/">Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link to="/sibongakonkhe/about">About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link to="/sibongakonkhe/services">Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
            <Link to="/sibongakonkhe/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        </div>
 

    </div>
  )
}

export default Navbar