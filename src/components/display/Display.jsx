import React from 'react'
import Displaynavbar from '../displaynavbar/Displaynavbar'
import { Outlet } from 'react-router-dom'


const Display = () => {
   
  return (
    <div className='  bg-[#121212] my-2 mr-2 text-white  w-[100%] overflow-auto lg:w-[75%] lg:ml-0  sm: w-[100%] ml-2'>
    <Displaynavbar/>

    <Outlet/>
    
   
 
    </div>
  
     
  )
}

export default Display