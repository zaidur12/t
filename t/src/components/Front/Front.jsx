import React from 'react'
import  japan1 from '../../assets/Images/japan1.jpg'

function Front() {
  return (
    <>
      <div className='relative h-[595px] bg-black flex justify-center items-center flex-col min-h-screen'>
        <div className='absolute inset-0 w-full h-[595px] bg-cover bg-center opacity-35' style={{ backgroundImage: `url(${japan1})` }}>
        </div>
        <h1 className='font-extrabold text-white text-7xl z-40'>Explore the World</h1>
        <button className='bg-green-400 m-4 px-4 rounded-full z-40 font-semibold text-black h-12 w-60 text-2xl'>Contact Us</button>
      </div>
    </>
  )
}

export default Front
