import React, { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import {songsData} from '../../assets/assets'
import { PlayerContext } from '../playercontext/PlayerContext'

const Player = () => {

    const {track,seekBar,seekSong,seekBg,play,playerStatus,pause,time,previous,next} = useContext(PlayerContext)

  return (
    // <div  className='bg-black border border-sky-500 flex flex-col text-white justify-between px-4'>
    <div className='h-[10%] mt-2 bg-black flex justify-between items-center text-white px-4  '>
      <div className='flex gap-3 items-center hidden lg:flex  '>
       
        <img className='w-12' src={track.image} alt="Song 1" />
        <div>
        <p className=''>{track.name}</p>
        <p>{track.desc.slice(0,12)}</p>
        </div>
        
      </div>

      <div className='flex flex-col items-center gap-1 m-auto '>
        <div className='flex gap-4'>
{/* filter brightness-0 invert is used for to chage the icons color from blck to white */}
{/* text-2xl is used for to change the width of the icons  */}
          <i className="bi bi-shuffle filter brightness-0 invert text-xl   cursor-pointer"></i>
          <i onClick={previous} className="bi bi-skip-backward-fill filter brightness-0 invert text-xl  cursor-pointer"></i>
          {playerStatus ?
          
          <i  onClick ={pause} class="bi bi-pause  filter brightness-0 invert text-xl cursor-pointer"></i>
        :
        <i onClick={play} className="bi bi-play  filter brightness-0 invert text-xl cursor-pointer"></i>
        }
          <i  onClick={next} className="bi bi-skip-forward-fill  filter brightness-0 invert text-xl cursor-pointer"></i>
          <i className="bi bi-arrow-repeat  filter brightness-0 invert text-xl  cursor-pointer"></i>
          </div>
          <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div  onClick={seekSong} ref={seekBg}  className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr  ref ={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                    
                </div>
                </div>
                <div className='hidden items-center gap-2 opacity-75 lg:flex'>
                <i className="bi bi-collection-play filter brightness-0 invert text-base"></i>
                <i className="bi bi-mic filter brightness-0 invert text-base"></i>
                <i className="bi bi-music-note-list filter brightness-0 invert text-base"></i>
                <i className="bi bi-speaker-fill filter brightness-0 invert text-base"></i>
                <i className="bi bi-megaphone filter brightness-0 invert text-base"></i>
                <i className="bi bi-fullscreen-exit filter brightness-0 invert text-base"></i>

                </div>



   
    </div>
  )
}

export default Player






