import n from "../../assets/Images/n.jpg"
import p from "../../assets/Images/p.jpg"
import q from "../../assets/Images/q.jpg"
import r from "../../assets/Images/r.jpg"
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";

function Third() {
  return (
    <>
      <div className="min-h-screen bg-white">
       <h1 className="text-5xl font-bold mb-4 pt-14">Reviews</h1>
       <div className=" grid grid-cols-2 mx-28 my-14 gap-x-20 gap-y-16">
        <div className="w-[450px] h-60 rounded-2xl  bg-white drop-shadow-2xl">
          <div className="flex justify-evenly mt-6 ml-3">
            <img className="w-20 h-20 object-cover rounded-full bg-black " src={n} alt="" />
            <div className="flex flex-col">
            <h2 className="text-l font-medium px-3 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id consequuntur dolore voluptatum fugiat quaerat quasi dolorem distinctio ex debitis eius consectetur voluptas, sit soluta tenetur repudiandae perferendis sequi voluptatem?</h2>
            <div className="flex ml-2 mt-3">
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaRegStarHalfStroke className="w-8 h-8"/>
          </div>
          </div>
          </div>
        </div>
        <div className="w-[450px] h-60 rounded-2xl  bg-white drop-shadow-2xl">
          <div className="flex justify-evenly mt-6 ml-3">
            <img className="w-20 h-20 object-cover rounded-full bg-black " src={r} alt="" />
            <div className="flex flex-col">
            <h2 className="text-l font-medium px-3 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id consequuntur dolore voluptatum fugiat quaerat quasi dolorem distinctio ex debitis eius consectetur voluptas, sit soluta tenetur repudiandae perferendis sequi voluptatem?</h2>
            <div className="flex ml-2 mt-3">
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          
          </div>
          </div>
          </div>
        </div>
        <div className="w-[450px] h-60 rounded-2xl  bg-white drop-shadow-2xl">
          <div className="flex justify-evenly mt-6 ml-3">
            <img className="w-20 h-20 object-cover rounded-full bg-black " src={p} alt="" />
            <div className="flex flex-col">
            <h2 className="text-l font-medium px-3 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id consequuntur dolore voluptatum fugiat quaerat quasi dolorem distinctio ex debitis eius consectetur voluptas, sit soluta tenetur repudiandae perferendis sequi voluptatem?</h2>
            <div className="flex ml-2 mt-3">
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          
          </div>
          </div>
          </div>
        </div>
        <div className="w-[450px] h-60 rounded-2xl  bg-white drop-shadow-2xl">
          <div className="flex justify-evenly mt-6 ml-3">
            <img className="w-20 h-20 object-cover rounded-full bg-black " src={q} alt="" />
            <div className="flex flex-col">
            <h2 className="text-l font-medium px-3 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, id consequuntur dolore voluptatum fugiat quaerat quasi dolorem distinctio ex debitis eius consectetur voluptas, sit soluta tenetur repudiandae perferendis sequi voluptatem?</h2>
            <div className="flex ml-2 mt-3">
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaStar className="w-8 h-8" />
          <FaRegStarHalfStroke className="w-8 h-8"/>
          </div>
          </div>
          </div>
        </div>
        
    
       
       </div>
      </div>
    </>
  )
}

export default Third
