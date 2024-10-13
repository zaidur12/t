import React from "react";
import xx from '../../assets/Images/xx.jpg'
import yy from '../../assets/Images/yy.jpg'
import zz from '../../assets/Images/zz.jpg'

function Second() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <h1 className="text-5xl font-bold mb-4 pt-14 text-white ">
          
        Best of International
        </h1>
        <div className="flex justify-evenly mt-10 pt-9">
          <div className="h-80 w-64 bg-black rounded-3xl ">
            <img
              className="object-cover w-full h-80 rounded-3xl overflow-hidden hover:scale-105  transition-transform duration-500 transform"
              src={xx}
              alt=""
              sizes=""
              srcSet=""
            />
            <p className="mt-2 font-medium text-xl text-white">Denmark</p>
          </div>
          <div className="h-80 w-64 bg-black rounded-3xl">
            <img
              className="object-cover w-full h-80 rounded-3xl overflow-hidden hover:scale-105  transition-transform duration-500 transform"
              src={zz}
              alt=""
              sizes=""
              srcSet=""
            />
            <p className="mt-2 font-medium text-xl text-white">Switzerland</p>
          </div>
          <div className="h-80 w-64 bg-black rounded-3xl">
            <img
              className="object-cover w-full h-80 rounded-3xl overflow-hidden hover:scale-105  transition-transform duration-500 transform"
              src={yy}
              alt=""
              sizes=""
              srcSet=""
            />
            <p className="mt-2 font-medium text-xl text-white">Taiwan</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Second;
