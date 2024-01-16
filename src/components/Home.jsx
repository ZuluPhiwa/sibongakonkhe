import React from 'react'
import officeone from "../assets/office300.png"
import { Link } from 'react-router-dom';



const Home = () => {

  



  return (

    <div>
    <div className=' h-[60vh] md:h-[90vh] px-4 bg-gray-100'>


<div className=' px-6 md:px-12 grid md:grid-cols-2 gap-4'>
    
    <div className=' my-12 md:my-24 pr-0 md:pr-12'>

        <p className=' text-5xl  font-inter font-extrabold  text-blue-900 my-8 '>
        One-stop shop for all your supply needs.
        </p>  
        <p className='mb-8   font-semibold'>
          We are suppliers of building material, hardware, pipes, plumbing, electrical, tools, fencing, protective clothing,
           cleaning materials, medical supplies, medical equipment, laboratory equipment, consumables, chemicals, hospital furniture, linen, educational equipment, teaching aid and more.
        </p>
        <div className='flex '>
          <button className='bg-blue-900 p-2 md:p-4 mr-4 uppercase text-white font-bold'>
          <Link to="/sibongakonkhe/services">Learn More</Link>  
          </button>
          <button className='bg-blue-600 p-2 md:p-4 uppercase text-white font-bold'>
          <Link to="/sibongakonkhe/contact">Contact Us</Link> 
          </button>
        </div>
    </div>
    
    <div className='hidden md:block'>
      <img src={officeone } alt="banner" className=' h-[100%]' />
    </div>
</div>

</div>

    
      <p className='py-8'/>

      <p className='text-center font-bold text-2xl font-sans my-4'>
      Our Understanding of the client’s needs 
      </p>

      <p className=' mx-6 md:mx-96 text-center  font-thin font-sans my-4'>
      Obtaining an understanding of a client’s activities and needs is of utmost importance
       to us, as it enables us to execute our services in the most efficient and cost effective manner. Our philosophy and business approach is that no one solution is good for two different clients or for two different customer needs. We, at all times, endeavor to provide products to specific guidelines from our customers.                                                                                                 
      </p>
<p className='py-8'/>


      
{/* <div className=' py-4'>
        <p className='mb-6 text-center font-bold text-2xl'>
        Some of the items we supply
      </p>

          <div className=' rounded-md w-full grid justify-center gap-5 md:gap-0  md:flex '>

    {[0,1,2,3,4,5].map((index)=>
          (
            <motion.div key={index}
            className={` card cursor-pointer h-[200px] sm:h-[250px] 
          bg-cover  mx-2 rounded-md ${index ===expandedIndex ? 'expanded' : ''}`}
            variants={cardVariants}
            initial='collapsed'
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration:0.5}}
            onClick={()=> handleCardClick(index)}
            style={{
              backgroundImage:`url(${cardImages[index]})`}}>

                <div className='card-content h-full flex flex-col justify-end'>
                  <div className='card-footer rounded-b-md bg-gray-800 bg-opacity-75 min-h-[50px] 
                  flex flex-col items-center justify-center'>
                      {index === expandedIndex &&
                      (
                        <p className=' text-white text-center font-bold'>
                          {cardDescription[index]}
                        </p>
                      )}

                  </div>

                </div>

            </motion.div>
          ))}

    </div>
</div> */}



{/* <div className=' bg-gray-100 py-4'>
        <p className='text-center font-bold text-2xl font-sans mt-8 '>
        Our partners

      </p>
      <div className=''>
 
      <div className="relative flex overflow-x-hidden text-white">
    <div className=" py-8 animate-marquee whitespace-nowrap flex">
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
 
    <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex">
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
</div>
      </div>
</div> */}

    </div>

  )
}

export default Home