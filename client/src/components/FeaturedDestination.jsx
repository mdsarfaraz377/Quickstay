import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const FeaturedDestination = () => {
  const { rooms, navigate } = useAppContext()

  // Duplicate rooms to create seamless loop
  const loopRooms = [...rooms, ...rooms];

  return rooms.length > 0 && (
    <div id='experience' className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 overflow-hidden'>

      <Title title='Featured Destinations' subTitle='Explore our curated selection of top-tier properties worldwide. Experience unmatched luxury, comfort, and breathtaking views.' />

      {/* Infinite Scroll Container */}
      <div className='w-full mt-14 overflow-hidden relative'>
        <div className='flex gap-8 animate-scroll w-max'>
          {loopRooms.map((room, index) => (
            // Ensure unique keys for duplicated items by combining id and index
            <div key={`${room._id}-${index}`} className="w-[300px] flex-shrink-0 transition-transform hover:scale-105 duration-300">
              <HotelCard room={room} index={index} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
        className='mt-16 px-8 py-3 text-sm font-semibold text-white
        rounded-full bg-gradient-to-r from-blue-600 to-blue-800 
        shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer'>
        View All Destinations
      </button>
    </div>
  )
}

export default FeaturedDestination
