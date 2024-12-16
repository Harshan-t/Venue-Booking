import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar'

import Titlebar from '../assets/Titlebar.png'
import { IoMdCalendar } from "react-icons/io";
import Venuepng from '../assets/Venuepng.png'

function VenueContainer({ venue, capacity, location, type }) {

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col bg-white shadow-sm min-w-[750px] w-[55vw] h-[24vh] border border-[#eaedf0] rounded-xl mb-4 p-[30px]'>
                <div className='flex'>
                    <img src={Venuepng} alt="" className='mr-7' />
                    <div className='flex'>
                        <div className='flex flex-col justify-evenly w-[280px]'>
                            <div className='font-semibold text-lg'>
                                {venue}
                            </div>
                            <div className='flex'><div className='flex justify-between w-[160px]'><span>Maximum Capacity</span> <span className='mr-2'>:</span></div> {capacity}</div>
                        </div>
                        <div className='flex flex-col justify-evenly ml-[20px]'>
                            <div className='flex'><div className='flex justify-between w-[160px]'><span>Location</span> <span className='mr-2'>:</span></div> {location}</div>
                            <div className='flex'><div className='flex justify-between w-[160px]'><span>Type</span> <span className='mr-2'>:</span></div> {type}</div>
                        </div>
                    </div>
                </div>
                <hr className='border m-2 mt-5' />
                <Link
                    to='/book'
                    className='flex cursor-default justify-end'
                    state={{ name: venue, capacity: capacity, Location: location }}
                >
                    <div className='flex w-[100px] cursor-pointer'><IoMdCalendar size={'25px'} />Book Now</div>
                </Link>
            </div>
        </div>
    )
}

export default function Venue() {

    const [Venues, setVenues] = useState([])
    const setVenueDetails = async () => {
        const response = await axios.get('http://localhost:8000/venue')
        setVenues(response.data.venues)
    }

    useEffect(() => {
        setVenueDetails()
    }, [])

    return (
        <div>
            <div className='min-w-[1000px]'>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='min-w-[1500px] w-[2000px] min-h-[200px] relative' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>Venue List</div>
                    <div className='absolute top-28 left-24 text-white'>Home &gt; Venues</div>
                </div>

                <div className='flex justify-center mt-8'>
                    <div className='flex items-center bg-white shadow-sm min-w-[830px] w-[65vw] h-[90px] p-8 border border-[#eaedf0] rounded-xl'>
                        {Venues.length} Venues Available
                    </div>
                </div>

                <div className='flex flex-col justify-center mt-8'>
                    {Venues.map((venue, index) => (
                        <VenueContainer key={index} venue={venue.name} capacity={venue.capacity} location={venue.location} type={venue.type} />
                    ))}
                </div>

            </div>
        </div>
    );
}