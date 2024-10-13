import React from 'react'
import j from '../../assets/Images/1.jpg'
import k from '../../assets/Images/2.jpg'
import l from '../../assets/Images/3.jpg'
import { FaSearchengin } from "react-icons/fa";

function First1() {
  return (
    <>
        <div className='min-h-screen  '>
      
      <h1 className='text-5xl font-bold mb-4 pt-11'> Find your Perfect Escape </h1>
      
      <div className='relative  bg-white border-black overflow-hidden border-2 rounded-full h-11 w-96 text-1xl pt-2 text-center mb-10 flex justify-between ml-96'>
        <input className='ml-5 border outline-none pb-4  border-none  h-10 w-96' placeholder='Search'  />
        <FaSearchengin className='mr-4 w-7 h-7 ' />
        </div>
      <div className='flex justify-evenly mt-4'>
        <div className='h-80 w-64 bg-black rounded-3xl '>
         <img  className="object-cover w-full h-80 rounded-3xl overflow-hidden hover:scale-105  transition-transform duration-500 transform" src={j} alt="" sizes="" srcSet="" />
   
         <p className='mt-2 font-medium text-xl'>Best of India</p>
        
        </div>
        <div  className='h-80 w-64 bg-black rounded-3xl  '>
        <img  className="object-cover w-full h-80 rounded-3xl  overflow-hidden hover:scale-105  transition-transform duration-500 transform" src={k} alt="" sizes="" srcSet="" />
        <p className='mt-2 font-medium text-xl'>Best of International</p>
        </div>
        <div  className='h-80 w-64 bg-black rounded-3xl'>
        <img  className="object-cover w-full h-80 rounded-3xl  overflow-hidden hover:scale-105  transition-transform duration-500 transform" src={l} alt="" sizes="" srcSet="" />
        <p className='mt-2 font-medium text-xl'>Special Package</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default First1


