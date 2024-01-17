import React from 'react'
import {FaPhone, FaLocationPinLock, FaEnvelopeCircleCheck} from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='p-4 '>
        
        <div className='pb-10 pt-20 '>
            <h1 className='  font-extrabold text-center text-4xl'>
                Contact Us
            </h1>
            <p className='text-center py-3'>
                Got a question? find our contact details below
            </p>
        </div>

        <div className=' grid md:grid-cols-3 shadow-lg text-white'>

            <div className=' bg-blue-600 p-4 '>
               <center><FaPhone size={30} className='text-red-300'/></center> 
                <p className=' text-center font-bold text-xl my-2'>
                    Call
                </p>
                <p className='my-2'>
                    Contact Person: Mr. Bongani Bhembe
                </p>
                <p className='my-2'>
                Tel : <a href="tel:+268 2518 5988">+268 2518 5988</a> 
                </p>
                <p className='my-2'>
                Cell : +268 7602 3418 / 7635 0169
                </p>
                <p className='my-2'>
                Fax : +268 2518 4847
                </p>
                <p className='my-2'>
                Email : <a href="mailto:sibongainvest@gmail.com">sibongainvest@gmail.com</a>
                </p>


            </div>

            <div className=' p-4 bg-blue-700'>

              <center><FaEnvelopeCircleCheck size={30} className=' text-red-300'/></center>  
                <p className='my-2 text-center font-bold text-xl'>
                    Mail
                </p>
                <p className='my-2'>
              The Managing Director
                </p>
                <p className='my-2'>
                SIBONGAKONKHE INVESTMENTS (PTY) LTD
                </p>
                <p className='my-2'>
                P.O. Box 2708
                </p>
                <p className='my-2'>
                Manzini 
                </p>
                <p className='my-2'>
                    Eswatini
                </p>

            </div>

            <div className='p-4 bg-blue-800 text-white'>
               <center><FaLocationPinLock size={30} className=' text-red-300'/></center> 
                <p className=' text-center font-bold text-xl my-2'>
                    Location
                </p>
                <p className='my-2'>
                Plot 162 Riveridge Complex
                </p>
                <p className='my-2'>
                King Sobhuza Avenue 2nd Street
                </p>
                <p className='my-2'>
                Matsapha Industrial Site
                </p>
        
            </div>

            {/* <div className='p-4 bg-blue-800 text-white'>
               <center><FaCreditCard size={30} className=' text-red-300'/></center> 
                <p className=' text-center font-bold text-xl my-2'>
                    Banking Details
                </p>
                <p className='my-2'>
                Bank Name: Standard Bank  
                </p>
                <p className='my-2'>
                Account Type: Business Current Account 
                </p>
                <p className='my-2'>
                Account No: 9110001884703  
                </p>
                <p className='my-2'>
                Branch Name: Matsapha  
                </p>
                <p className='my-2'>
                Branch Code: 66-34-64  
                </p>
                <p className='my-2'>
                Swift Code: SBICSZM  
                </p>
            </div> */}

        </div>
       
    </div>
  )
}

export default Contact