import React from 'react'
import lp from '../../assets/installapplp.jpg'

const Installapp = () => {
  return (
    <div className='text-white bg-gradient-to-b from-gray-900 to-black h-full '>
      <div className='flex flex-col items-center'> 
        <img src={lp} className='w-[70%] pt-5 pb-5 rounded ' alt=''/>

      <p className='font-bold text-2xl  text-center py-4  px-12  '> Seamlessly listen to music you love. Download the Spotify app for your computer.</p>
      <button className='rounded-full text-black font-bold text-medium bg-green-600 px-4 py-2   border-2  border-white  '  onClick={()=>window.open('https://www.spotify.com/in-en/free/</div>')}>Get our free app</button>
      </div>
    </div>
  )
}

export default Installapp