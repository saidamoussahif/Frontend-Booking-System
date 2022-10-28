import React from 'react'


const FisrtSection = () => {
  return (
    <>
<div className='bg-blue-900 text-white h-screen flex justify-center'>
    <div>
    <h1 className='text-white text-3xl pt-8 font-bold font-[Poppins] text-center'> A lifetime of discounts? It'S Genius.</h1>
   <p className='text-white mt-12 mr-12 text-center'>
     Get rewarded for your travels unlock instant savings of 10% or more with a free Supratour account
   </p>
    </div>
  <div className='w-4/5 h-20 border-2 border-yellow-400 p-4 flex justify-center items-center absolute left-1/5 top-96 rounded'>
    <div className='text-white p-4 text-base'>
    <span className='text-2xl text-white p-4'>
    <ion-icon name="trail-sign-outline"></ion-icon>
    </span>
       <input type='text' placeholder='where are you going?' className='rounded-md border-2 p-1' />
    </div>
    <div className='flex justify-center items-center backdrop:text-white p-4 text-base'>
    <span className='text-2xl text-white p-4'>
    <ion-icon  name="calendar-number-outline"></ion-icon>
    </span>
      <span>Date</span>
    </div>
    <div className='text-white p-4 text-base'>
    <span className='text-2xl text-white p-4'>
    <ion-icon name="body-outline"></ion-icon>
    </span>
       <input type='number' placeholder='Enter number of seats' className='rounded-md border-2 p-1' />
    </div>
    <button className='bg-yellow-400 w-32 h-12 rounded pt-0'>
            Search
    </button>
 </div> 
 </div>
    </>
  )
}

export default FisrtSection
