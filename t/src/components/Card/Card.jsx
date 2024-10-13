import React from 'react'

function Card(props) {
  return (
    <>
      <div className='w-[1100px] h-[500px] rounded-2xl ml-14 mt-8 flex  bg-black'>
        <div className='mt-5 ml-7  h-[450px] w-[350px] bg-white rounded-2xl'>
        <img className='overflow-hidden w-full h-full rounded-2xl' src={props.img} alt="" />
        </div>
        <div className=' w-[680px] ml-12'>
          <h1 className='text-5xl font-bold text-start text-white mr-5  mt-6'>{props.h}</h1>
          <p className='text-xl leading-loose font-thin  text-start text-white mr-5 mt-6 '>{props.p}</p>
        </div>
        </div>
        <div className='w-[1100px] h-[500px] rounded-2xl ml-14 mt-8 flex bg-fuchsia-200 '>
       <div className=' w-[680px] mr-12'>
          <h1 className='text-5xl font-bold text-start text-black ml-11  mt-6'>{props.h1}</h1>
          <p className='text-xl leading-loose font-thin  text-start text-black ml-11 mt-6 '>{props.p1}</p>
        </div>
        <div className='mt-5 mr-7  h-[450px] w-[350px] bg-white rounded-2xl'>
        <img className='overflow-hidden w-full h-full rounded-2xl' src={props.img1} alt="" />
        </div>
        </div>
    </>
  )
}

export default Card
