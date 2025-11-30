import React from 'react'
import { albumsData } from '../../assets/assets'
import Albumitems from '../albumitems/Albumitems'
import { songsData } from '../../assets/assets'
import Songlist from '../songlist/Songlist'
import { Outlet } from 'react-router-dom'
import {musicData} from '../../assets/assets'

import banner from '../../assets/banner3.png'





const Home = () => {
  return (
    <div className='text-white  '>
    <div className=' flex item-center justify-start  gap-3 pl-4'>
      <p className=' rounded-full  text-black bg-white px-4 py-2 cursor-pointer '> All</p>
      <p className=' rounded-full text-white bg-black px-4 py-2 cursor-pointer'> Music</p>
      <p className=' rounded-full text-white bg-black px-4 py-2  cursor-pointer'> Podcasts</p>
    </div>

    <div className='mt-4'>
    <h1 className='font-bold text-2xl ml-2'>Featured Charts</h1>
    <div className='flex overflow-auto mt-3 gap-3 justify-around'>
      {albumsData.map((items,index)=>(<Albumitems key={index}  id={items.id} image={items.image} name={items.name} desc={items.desc} />))}
    </div>
    </div>
    <div className='mt-4'>
    <h1 className='font-bold text-2xl ml-2'>Today's Biggest Hits</h1>
    <div className='flex overflow-auto mt-3 gap-3 justify-around'>
      {songsData.map((items,index)=>(<Songlist key={index}  id={items.id} image={items.image} name={items.name} desc={items.desc} />))}
    </div>
    </div>

    <div className='flex justify-center mt-4  box-shadow: 0 4px 8px 2px rgba(245, 9, 9, 0.3), 0 6px 12px 4px rgba(128, 128, 128, 0.2)'>
      <img  src={banner} alt="banner img "></img>
    </div>

    <div className='mt-4'>
    <h1 className='font-bold text-2xl ml-2'>Bollywood songs </h1>
    <div className='flex overflow-auto mt-3 gap-3 justify-around'>
      {musicData.map((items,index)=>(<Songlist key={index}  id={items.id} image={items.image} name={items.name} desc={items.desc} />))}
    </div>
    </div>
   


    <Outlet/>
     </div>
  )
}

export default Home