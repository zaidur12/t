import React from 'react'
import tt from '../../assets/Images/tt.jpg'
import y from '../../assets/Images/y.jpg'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
function Contact() {
  return (
    <>
    <div className='w-full h-[500px]'>
      <img className='w-full h-[500px] object-cover' src={tt}/>
      </div> 
      <div className='min-h-screen bg-white'>
       <h1 className='flex justify-center font-bold text-5xl mt-14'>CONNECT WITH US</h1>
       <p className='text-xl mt-4'>Let us do all the work so you can sit back,<br/>
       relax and enjoy the journey</p>
       <div className='flex  w-[1000px] h-[500px] border-2 border-gray-950 bg-white ml-24 mt-6 mb-6 rounded-2xl'>
       <img className='rounded-l-2xl w-[450px]' src={y}/>
       <div className='flex flex-col mt-8'>
         <h1 className='text-4xl font-bold flex ml-24'> Worldie Office</h1>
         <h3 className='text-3xl font-medium mt-5 text-left ml-24'>Worldie, 101,<br/>MG Road,<br/>Rajdhani,<br/> Panbazar,Guwahati<br/> Assam, 781000</h3>
      <div className='ml-24 mt-4 flex'>
      <MdEmail  className='w-8 h-8 '/>
      <h1 className='text-xl ml-3'>goo.guwahati@worldie.com</h1>
      </div>
      <div className='ml-24 mt-4 flex'>
      <IoLogoWhatsapp  className='w-8 h-8'/>
      <h1 className='text-xl ml-3'>91 90000-00000</h1>
      </div>
       <div className='ml-24 mt-4 flex gap-3'>
       <FaFacebook  className='w-8 h-8'/>
       <AiFillInstagram className='w-8 h-8'/>
      </div>
       </div>

</div>
      </div>
     
    </>
  )
}

export default Contact
