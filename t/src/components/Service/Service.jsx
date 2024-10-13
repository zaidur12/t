import React from 'react'
import m from '../../assets/Images/m.jpg'
import Card from '../Card/Card'
import tm from '../../assets/Images/tm.jpg'
import z from '../../assets/Images/z.jpg'
function Service() {
  return (
    <>
    <div className='w-full h-[500px] '>
     <img className="h-[500px] w-full object-cover" src={m} alt="" srcset="" />
    </div>
    <div className='min-h-screen mb-8'> 
      <h1 className='text-5xl font-bold mt-6'>LET'S START PLANNING!</h1>
      <p className='mt-4'>Planning your trip should be as fun as the trip itself, don’t you think?<br /> We do! That’s why we offer complete travel support,<br /> so you can have a blast from the moment you start planning.</p>
    <Card 
      img={tm} 
      h="Domestic Tour Packages" 
      p="Travel with us to the backwaters of Kerala, pristine ocean-side villages of Goa, majestic forts of Rajasthan and breath taking mountains of Himachal Pradesh; there is so much to see and do in India and we are here to help you travel to the best destinations within the country. Whether you are looking for culture or adventure or something in between, our easy-to-customize packages have something for everyone."
      img1={z} 
      h1="International Tour Packages" 
      p1="Is visiting Japan during the cherry blossom season on your bucket list? Or perhaps a safari experience for your family in Africa or diving in the Great Barrier Reef with your friends? Get in touch with us to get the best deals on international packages for destinations and experiences of your choice. If you wish to create your own itinerary, our easy-to-customize packages are perfect for you. You choose the country; we will sort out the rest for you."
    />
        <Card 
      img={tm} 
      h="Domestic Tour Packages" 
      p="Travel with us to the backwaters of Kerala, pristine ocean-side villages of Goa, majestic forts of Rajasthan and breath taking mountains of Himachal Pradesh; there is so much to see and do in India and we are here to help you travel to the best destinations within the country. Whether you are looking for culture or adventure or something in between, our easy-to-customize packages have something for everyone."
      img1={z} 
      h1="International Tour Packages" 
      p1="Is visiting Japan during the cherry blossom season on your bucket list? Or perhaps a safari experience for your family in Africa or diving in the Great Barrier Reef with your friends? Get in touch with us to get the best deals on international packages for destinations and experiences of your choice. If you wish to create your own itinerary, our easy-to-customize packages are perfect for you. You choose the country; we will sort out the rest for you."
    />
        <Card 
      img={tm} 
      h="Domestic Tour Packages" 
      p="Travel with us to the backwaters of Kerala, pristine ocean-side villages of Goa, majestic forts of Rajasthan and breath taking mountains of Himachal Pradesh; there is so much to see and do in India and we are here to help you travel to the best destinations within the country. Whether you are looking for culture or adventure or something in between, our easy-to-customize packages have something for everyone."
      img1={z} 
      h1="International Tour Packages" 
      p1="Is visiting Japan during the cherry blossom season on your bucket list? Or perhaps a safari experience for your family in Africa or diving in the Great Barrier Reef with your friends? Get in touch with us to get the best deals on international packages for destinations and experiences of your choice. If you wish to create your own itinerary, our easy-to-customize packages are perfect for you. You choose the country; we will sort out the rest for you."
    />
    </div>
    

    
    </>
  )
}

export default Service
