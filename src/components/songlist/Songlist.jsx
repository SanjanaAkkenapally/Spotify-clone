import React, { useContext } from 'react'
import { PlayerContext } from '../playercontext/PlayerContext'

const Songlist = ({ name, image, desc, id}) => {

   const {playWithId} =useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(id)} className="min-w-[180px] p-3 rounded-lg cursor-pointer hover:bg-[#ffffff26]">
    <div className="w-full h-[170px] ">
        <img
          src={image}
          alt="album data images"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <p className="font-bold text-sm truncate">{name}</p>
        <p className="font-light text-xs text-gray-300 ">{desc}</p>
      </div>
    </div>
  )
}
 
export default Songlist


