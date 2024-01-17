import React , {useState} from 'react'
import safety from '../assets/safety.jpg'
import fence from '../assets/fence.jpg'
import laboratory from '../assets/laboratory.png'
import pipes from '../assets/pipes.jpg'
import Telecomm from '../assets/Telecomm.png'
import stationery from '../assets/stationery.jpg'
import hospital from '../assets/hospital.jpg'
import ele from '../assets/ele.jpg'
import build from '../assets/build.jpg'
import tools from '../assets/tools.jpg'
import blinds from '../assets/blinds.jpg'
import plumbing from '../assets/plumbing.jpg'
import {motion} from 'framer-motion'
const WhatWeDo = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleCardClick =(index)=>
    {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }
  
    const cardVariants={
   
      expanded :
      {
        width: '400px'
      },
      collapsed:
      {
        width: '200px'
      }
    }
    const cardImages =[fence,laboratory,pipes,Telecomm,stationery,safety,hospital,ele,build,tools,blinds,plumbing]
    const cardDescription = ["Fencing", "Lab Equipments", "Pipes",
     "Telecommunications equipment","Stationery","Protective clothing",
     "Hospital furniture","Electrical","Building Materials","Tools","Blinds","Plumbing"
    ]
  return (
    <div className='bg-gray-100 '>
                <div className='pt-24 pb-5 '>
            <h1 className='  font-extrabold text-center text-4xl'>
                What we supply
            </h1>
            <p className='text-center py-3'>
                Some of the works we do
            </p>
          
        </div>

        <div className=' rounded-md w-full grid justify-center gap-5 md:gap-4 md:flex '>

{[0,1,2,3,].map((index)=>
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
<br />
<div className=' rounded-md w-full grid justify-center gap-5 md:gap-4 md:flex '>

{[4,5,6,7,].map((index)=>
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
<br />
<div className=' rounded-md w-full grid justify-center gap-5 md:gap-4 md:flex '>

{[8,9,10,11].map((index)=>
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

<div className=' shadow-2xl p-8 m-8'>

    <p className=' text-center text-2xl font-sans my-4 font-bold'>
                      Other Services  
    </p>
<div className=' grid md:grid-cols-3 '>

<ul >
        <li>Hardware</li>
        <li>Fencing</li>
        <li>protective clothing</li>
        <li>cleaning materials</li>
        <li>medical supplies</li>
    </ul>

    <ul>
        <li>consumables</li>
        <li>chemicals</li>
        <li>linen</li>
        <li>educational equipment</li>
        <li>teaching aid</li>
       
    </ul>
    <ul>
        <li>storage equipment</li>
        <li>krost shelving products</li>
        <li>office & school furniture</li>
        <li>promotional materials</li>
        <li>general suppliers</li>
    </ul>
</div>


</div>
<p className='text-center p-8'>
We also offer services of  construction, fencing and general civil works.
</p>




    </div>
  )
}

export default WhatWeDo