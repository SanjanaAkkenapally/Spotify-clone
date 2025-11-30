import React from 'react'
import spotifyimg from '../../assets/spotifimg.png'

const Acount = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#1AA34A] via-[#1AA34A] via-10% to-[#242424] flex justify-center  text-white" >
      <div className='w-[25rem] h-[30rem] mt-14 bg-black rounded  py-5  flex flex-col items-center'>
        <div className='flex items center gap-2 mt-3'>
      <img src={spotifyimg} className='w-8 filter brightness-0 invert' alt=''/>
      <h1 className='font-bold text-2xl'>Spotify</h1>
      </div>
      <h2 className='font-bold text-xl my-4'>Music for everyone</h2>
      <div className=' '>
      <input type='text' className=' bg-[#242424] py-1 px-2 ' placeholder='Email or username' ></input>
      <i className="  bi bi-envelope-at-fill filter brightness-0 invert text-xl pl-2"></i>
      </div>
      <div className='mt-2'>
      <input type='text' className=' bg-[#242424] py-1 px-2  ' placeholder='Password' ></input>
      <i className=" bi bi-eye-slash filter brightness-0 invert text-xl pl-2"></i>
      </div>
      <div className='flex items-center gap-24 my-1'>
        <p className=' flex justify-start font-normal text-xs'>Remember me</p>
        <i className="bi bi-toggle-on filter brightness-0 invert text-xl flex justify-end"></i>

      </div>
      <button href=' ' className=' my-4 bg-white text-black px-20 rounded-full py-2 ' > LOG IN </button>
      <div className=''>
      <p className="h-[1px] bg-white "></p>
       <p className="mx-4 text-white">or</p>
      <p className="h-[1px] bg-white"></p>
      </div>
      <button href=' ' className='bg-[#1877F2] px-6 py-2  rounded-full my-3 ' > <b className='pr-2'>f</b>LOG IN WITH FACEBOOK</button>
      <div className='flex items-center gap-2'>
        <p>Don't have an account?</p>
        <p className='font-bold underline text-sm'>SIGN UP</p>
      </div>
      <div className=' gap-4 flex items-center text-xs mt-3 underline'>
        <p>Reset Password </p>
        <p> Settings</p>
      </div>
      
    </div>
    </div>
  )
}

export default Acount