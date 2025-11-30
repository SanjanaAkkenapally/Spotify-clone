import React, { useContext } from 'react'
import Sidebar from "../sidebar/Sidebar"
import Player from '../player/Player'
import Display from '../display/Display'
import logo from "../../assets/spotify-logo.webp"
import { PlayerContext } from '../playercontext/PlayerContext'



const Layout = () => {

  const {audioRef,track} = useContext(PlayerContext)


  return (
    <div className="h-screen bg-black " >
      <div className='h-[7%] flex justify-center'>
        <div className='flex items-center gap-2 justify-center'>
        <img  className='w-8' src={logo} alt='logo'></img>
          <h1 className='text-white text-3xl font-bold'>  Spotify</h1>
          </div>
      </div>
    <div className="h-[83%] flex">
     <Sidebar/>
    
     <Display/>
 
    </div>
    <div >
        <Player/>
    </div>
    <audio  ref={audioRef} src={track.file} preload='auto'></audio>
     

   </div>
  
 


  )
}

export default Layout