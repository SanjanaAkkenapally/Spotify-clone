

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { albumsData } from '../../assets/assets';
import { songsData } from '../../assets/assets';
import { PlayerContext } from '../playercontext/PlayerContext';

const Displayalbum = () => {
  const { id } = useParams(); 
  const albumId = parseInt(id, 10); 
  const albumData = albumsData.find(album => album.id === albumId);
   const {playWithId} =useContext(PlayerContext)
   
  if (!albumData) {
    return <div>Album not found!</div>;
  }

  return (
    <>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1'>
            <b>Spotify</b> • 2,323,164 likes • <b>50 songs,</b> about 1 hr 30 min
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b> Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
       
      </div>
 
      <hr />

      {songsData.map((item, index) => (
        <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
            <img className='inline w-10 mr-5' src={item.image} alt="" />
            {item.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>3 days ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  );
}

export default Displayalbum;
