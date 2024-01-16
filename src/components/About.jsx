import React from 'react'
import Protective from '../assets/protective.jpg'
import officeone from '../assets/unnamed.jpg'

const About = () => {
  return (
    <div >
        <div className='py-10 '>
            <h1 className='  font-extrabold text-center text-4xl'>
                Who we are
            </h1>
            <p className='text-center py-3'>
                Learn more about us below.
            </p>
          
        </div>


      <div className=' p-6 md:p-12 grid md:grid-cols-2'>

        <div className=' md:pl-12'>
          <img src={Protective} alt="" className='rounded-md shadow-md h-[90%]'/>
        </div>
        <div className='my-auto'>
          <p className='text-2xl mx-auto  py-5 font-extrabold '>
            Mission
          </p>
          <p className='mx-auto pr-6 md:pr-16  text-justify'>
          Sibongakonkhe Investments (PTY) Ltd is best service providers, pioneer best business practice across the globe with a customer-orientation and quality approach, offering exceptionally a wide range of services just-in-time.
          </p>
        </div>
      </div>

      <div className=' grid md:grid-cols-2 p-6 md:p-12 bg-gray-100 '>
      <div className='my-auto'>
          <p className='text-2xl px-0 md:px-16 py-5 font-extrabold '>
           Vision
          </p>
          <p className='md:pb-0 pb-6 px-0 md:px-16 text-justify'>
          To be a first class suppliers and service maintenance provider towards 2022 and beyond, drawing customers from all over the country. We intend achieving this by being sensitive to the needs of our customers 
          and making a meaningful contribution by providing an excellent service delivery in the medical industry.     </p>
        </div>
        <div>
          <img src={officeone} alt="" className=' rounded-md shadow-md' />
        </div>

      </div>

      <div className=' py-4'>
      <p className='text-3xl font-extrabold  text-center'>
       Our Values
      </p>
      <div className='grid sm:grid-cols-3 gap-4 p-8 text-white '>
            <div className='bg-blue-800 shadow-lg rounded-lg p-4 '>
            <p className=' place-content-center flex'>
                    
                </p>
                <h1 className='text-center font-bold text-2xl p-4'>
                Integrity
                </h1>
                <p className='text-center pt-2'>
                We uphold high integrity in all our business activities. We seek to create, maintain and enhance good relationships with all customers.
                </p>
                
            </div>
            <div className='bg-blue-600 shadow-lg rounded-xl p-4 '>
           
                <h1 className='text-center font-bold text-2xl p-4'>
                Service Offering
                </h1>
                <p className=' text-center pt-2'>
                       All of our services offered are driven by a quest to meet and exceed the needs and expectation of the customers. The organization recognizes the nature and desire of its clientele and is committed to continuous improvement based on the feedback obtained from customers.
                </p>
            </div>
            <div className='bg-blue-700 shadow-lg rounded-xl p-4 '>
           
                <h1 className='text-center text-2xl font-bold p-4'>
                Knowledge
                </h1>
                <p className='text-center pt-2'>
                In order to make a meaningful contribution, highly experienced personnel conduct our services, research, and strategic 
                management audit with emphasize on total quality management and continuous improvement.   
                </p>
            </div>
        </div>
      </div>



{/*  
 <div className="relative flex overflow-x-hidden text-white">
    <div className=" py-12 animate-marquee whitespace-nowrap flex">
    <div className=' bg-blue-600 p-4 '>
              
                <p className=' text-center font-bold text-xl my-2'>
                Micro Projects Programme
                </p>
                <p className='my-2'>
                P.O Box 2122
                </p>
                <p className='my-2'>
                MBABANE
                </p>
                <p className='my-2'>
                Tel: 2404 0199   
                </p>
                <p className='my-2'>
                Cell: 7618 0155
                </p>
                <p className='my-2'>
                Nkosingiphile Dlamini (Procurement Officer)
                </p>


            </div>
            <div className=' bg-blue-700 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
             Ministry of Defence
              </p>
              <p className='my-2'>
              P.O. Box 1923
              </p>
              <p className='my-2'>
              MBABANE
              </p>
              <p className='my-2'>
              Tel: 2510 1016      
              </p>
              <p className='my-2'>
              Cell: 7612 4116
              </p>
              <p className='my-2'>
              Mr Sabelo Dlamini (Planner)
              </p>


          </div>
          <div className=' bg-blue-800 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
              University Of Eswatini
              </p>
              <p className='my-2'>
              Private Bag
              </p>
              <p className='my-2'>
              KWALUSENI
              </p>
              <p className='my-2'>
              Tel: 2517 0500     
              </p>
              <p className='my-2'>
              Cell: 7611 8561
              </p>
              <p className='my-2'>
              Mr Bonkhe Masuku (Stores Controller)
              </p>


          </div>
          <div className=' bg-blue-900 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
            Matsapha Town Board
              </p>
              <p className='my-2'>
              P.O. Box 1790
              </p>
              <p className='my-2'>
              MATSAPHA
              </p>
              <p className='my-2'>
              Tel: 2518 6637/ 8265         
              </p>
              
              <p className='my-2'>
              Gugu Dlamini (Stores Clerk)
              </p>


          </div>
          <div className=' bg-blue-600 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
              William Pitcher College
              </p>
              <p className='my-2'>
              P.O. Box 87
              </p>
              <p className='my-2'>
              MANZINI
              </p>
              <p className='my-2'>
              Tel: 25052081 / 2505 4672        
              </p>
              <p className='my-2'>
              Cell: 7624 3358
              </p>
              <p className='my-2'>
              Mr Sandile Mamba (Storeman)
              </p>


          </div>
          <div className=' bg-blue-700 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
            World Vision
              </p>
              <p className='my-2'>
              P.O. Box 2870
              </p>
              <p className='my-2'>
              MBABANE
              </p>
              <p className='my-2'>
              Tel: 2404 1102           
              </p>
              <p className='my-2'>
              Cell: 7694 6088
              </p>
              <p className='my-2'>
              Mr. Ntokozo Dlamini (Procurement)
              </p>


          </div>
          <div className=' bg-blue-800 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
              Eswatini Housing Board (EHB)
              </p>
              <p className='my-2'>
              P. O. Box 798
              </p>
              <p className='my-2'>
              MBABANE
              </p>
              <p className='my-2'>
              Tel: 2405 5016                 
              </p>
              <p className='my-2'>
              Cell: 7806 0101
              </p>
              <p className='my-2'>
              Mr Lwazi Dlamini (Procument Officer)
              </p>


          </div>
    </div>
 
    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
    <div className=' bg-blue-600 p-4 '>
              
              <p className=' text-center font-bold text-xl my-2'>
              Micro Projects Programme
              </p>
              <p className='my-2'>
              P.O Box 2122
              </p>
              <p className='my-2'>
              MBABANE
              </p>
              <p className='my-2'>
              Tel: 2404 0199   
              </p>
              <p className='my-2'>
              Cell: 7618 0155
              </p>
              <p className='my-2'>
              Nkosingiphile Dlamini (Procurement Officer)
              </p>


          </div>
          <div className=' bg-blue-700 p-4 '>
            
            <p className=' text-center font-bold text-xl my-2'>
           Ministry of Defence
            </p>
            <p className='my-2'>
            P.O. Box 1923
            </p>
            <p className='my-2'>
            MBABANE
            </p>
            <p className='my-2'>
            Tel: 2510 1016      
            </p>
            <p className='my-2'>
            Cell: 7612 4116
            </p>
            <p className='my-2'>
            Mr Sabelo Dlamini (Planner)
            </p>


        </div>
        <div className=' bg-blue-800 p-4 '>
            
            <p className=' text-center font-bold text-xl my-2'>
            University Of Eswatini
            </p>
            <p className='my-2'>
            Private Bag
            </p>
            <p className='my-2'>
            KWALUSENI
            </p>
            <p className='my-2'>
            Tel: 2517 0500     
            </p>
            <p className='my-2'>
            Cell: 7611 8561
            </p>
            <p className='my-2'>
            Mr Bonkhe Masuku (Stores Controller)
            </p>


        </div>
        <div className=' bg-blue-900 p-4 '>
            
            <p className=' text-center font-bold text-xl my-2'>
          Matsapha Town Board
            </p>
            <p className='my-2'>
            P.O. Box 1790
            </p>
            <p className='my-2'>
            MATSAPHA
            </p>
            <p className='my-2'>
            Tel: 2518 6637/ 8265         
            </p>
            
            <p className='my-2'>
            Gugu Dlamini (Stores Clerk)
            </p>


        </div>
        <div className=' bg-blue-600 p-4 '>
            
            <p className=' text-center font-bold text-xl my-2'>
            William Pitcher College
            </p>
            <p className='my-2'>
            P.O. Box 87
            </p>
            <p className='my-2'>
            MANZINI
            </p>
            <p className='my-2'>
            Tel: 25052081 / 2505 4672        
            </p>
            <p className='my-2'>
            Cell: 7624 3358
            </p>
            <p className='my-2'>
            Mr Sandile Mamba (Storeman)
            </p>


        </div>
        <div className=' bg-blue-700 p-4 '>
            
            <p className=' text-center font-bold text-xl my-2'>
          World Vision
            </p>
            <p className='my-2'>
            P.O. Box 2870
            </p>
            <p className='my-2'>
            MBABANE
            </p>
            <p className='my-2'>
            Tel: 2404 1102           
            </p>
            <p className='my-2'>
            Cell: 7694 6088
            </p>
            <p className='my-2'>
            Mr. Ntokozo Dlamini (Procurement)
            </p>


        </div>
        <div className=' bg-blue-800 p-4 '>
            
            <p className=' text-center font-bold text-xl my-2'>
            Eswatini Housing Board (EHB)
            </p>
            <p className='my-2'>
            P. O. Box 798
            </p>
            <p className='my-2'>
            MBABANE
            </p>
            <p className='my-2'>
            Tel: 2405 5016                 
            </p>
            <p className='my-2'>
            Cell: 7806 0101
            </p>
            <p className='my-2'>
            Mr Lwazi Dlamini (Procument Officer)
            </p>


        </div>
</div>
</div> */}


    </div>
  )
}

export default About