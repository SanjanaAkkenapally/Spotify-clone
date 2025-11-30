import React from 'react'
import home from '../../assets/homeicon.svg'
import search from '../../assets/search.svg'
import stack from '../../assets/stack.png'
import arrow from '../../assets/arrow-right.svg'
import plus from '../../assets/plus.svg'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {

  const navigate=useNavigate();
  return (

    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div  onClick={()=>navigate('/')} className='ml-2 flex items-center gap-3'>
                <img src={home} className='w-6 filter brightness-0 invert ' alt='imagehome' />
             
                <h1 className='font-bold'>Home</h1>
            </div>
            <div className='ml-2 mt-4 flex items-cente gap-3'>
                <img src={search} className='w-6 filter brightness-0 invert' />
                <h1 className='font-bold'>Search</h1>
            </div>
        </div>
        {/* your library */}
        <div className=' bg-[#121212] h-[85%] rounded flex flex-col  '>
          <div className='  mt-2 flex item-center gap-2 justify-around'>
            <img src={stack} className='w-8 ' alt='stack img'/>
            <h1 className='gap-2 font-bold'>Your Library</h1>
            <img src={arrow} className='w-8 filter brightness-0 invert ml-32 ' alt='stack img'/>
            <img src={plus} className='w-8 filter brightness-0 invert' alt='stack img'/>
            </div> 
            <div className=' bg-[#242424] px-4 mt-6 leading-loose mx-2 rounded'>
              <h1 className='font-bold'>Create your first playlist</h1>
              <h2 className='font-light'> it's easy we'll help you</h2>
              <button type='button' className=' px-2 my-2 bg-white text-black rounded-full'>Create Playlist</button>

            </div>
            <div className=' bg-[#242424] px-4 mt-6 leading-loose mx-2 rounded'>
              <h1 className='font-bold'>Let's find some padcasts to follow</h1>
              <h2 className='light'>  we'll keep you updates on new episodes</h2>
              <button type='button' className='px-2  my-2 bg-white text-black rounded-full'>Browse podcasts</button>

            </div>

        </div>

    </div>
  )
}

export default Sidebar