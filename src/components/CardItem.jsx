import React, { useEffect, useState } from 'react';
import { GoPeople } from 'react-icons/Go';
import { BiGasPump } from 'react-icons/Bi';
import { BsSpeedometer } from 'react-icons/Bs';
import { PiSteeringWheel } from 'react-icons/Pi';
import { AiOutlineHeart } from 'react-icons/Ai';

const CardItem = ({ value, searchText }) => {
  const [show, setShow] = useState('hidden');

  let car = value.carName+" "+value.carModel;
  useEffect(() => {
      if(car.includes(searchText)){
      setShow('flex')
    }else if(searchText===undefined){
      setShow('flex')
    }
     else {
      setShow('hidden')
    }
  })
  return (
    <>
      <div className={` h-[35rem] ${show} w-[30%] mx-4 my-2 rounded-2xl p-2 flex-col shadow-2xl`}>
        <div className="flex items-center h-96">
          <img src={value.imgUrl} alt="" className='w-full rounded-2xl' />
        </div>
        <div className="flex flex-col space-y-2 p-2">
          <div className="flex justify-between">
            <span className="text-3xl font-semibold">{value.carName} {value.carModel}</span>
            <span className="border text-lg font-semibold p-1 px-3 rounded-xl border-dashed border-sky-700">{value.carYear}</span>
          </div>
          <div className="flex flex-wrap text-lg  w-72 h-20">
            <span className="w-1/2 h-10 flex items-center">
              <GoPeople className='font-extrabold text-2xl mr-2 text-sky-600   ' />4 People
            </span>
            <span className="w-1/2 flex items-center">
              <BiGasPump className='font-extrabold text-2xl mr-2 text-sky-600' />Hybrid
            </span>
            <span className="w-1/2 flex items-center">
              <BsSpeedometer className='font-extrabold text-2xl mr-2 text-sky-600' />6.1km/1-liter
            </span>
            <span className="w-1/2 flex items-center">
              <PiSteeringWheel className='font-extrabold text-2xl mr-2 text-sky-600' />automatic
            </span>
          </div>
          <div className="flex px-4  h-24 items-center">
            <span className="w-1/2"><span className="text-3xl">${value.perMonth}/</span>month</span>
            <span className="flex w-1/2 h-full items-center justify-end space-x-3">
              <span className="">
                <AiOutlineHeart className='text-xl font-bold text-sky-500 bg-gray-300 rounded-lg w-9 h-9 p-2 ' />
              </span>
              <span className="">
                <button className='w-24 h-10 text-white bg-sky-400 rounded-lg'>Rent now</button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardItem