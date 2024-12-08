import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar'

import Titlebar from '../assets/Titlebar.png'
import { IoMdCalendar } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

function VenueContainer({ venue, capacity }) {
    const location = useLocation()
    const data = location.state

    return (
        <div className='flex justify-center'>
            <div className='p-9 bg-white shadow-sm min-w-[300px] w-[800px] h-[150px] p-8 border border-[#eaedf0] rounded-xl mb-4'>
                <img src="" alt="" />
                <div className='font-semibold text-lg'>
                    {venue}
                </div>
                <div className='flex'>Maximum Capacity :{capacity}</div>
                <Link
                    to='/book'
                    className='flex justify-end items-center cursor-pointer'
                    state={{ venue: venue }}
                >
                    <IoMdCalendar size={'25px'}/><div>Book Now</div>
                </Link>
            </div>
        </div>
    )
}

export default function Venue() {

    const Venues= [
        { venue: "Seminar Hall", capacity: "100" },
        { venue: "Lab", capacity: "50" },
        { venue: "Auditorium", capacity: "200" },
        { venue: "IOT", capacity: "250" },
    ]

    return (
        <div>
            <div>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='w-full relative' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>Venue List</div>
                    <div className='absolute top-28 left-24 text-white'>Home &gt; Venues</div>
                </div>

                <div className='flex justify-center mt-8'>
                    <div className='flex items-center bg-white shadow-sm min-w-[300px] w-[1000px] h-[90px] p-8 border border-[#eaedf0] rounded-xl'>
                        {Venues.length} Venues Available
                    </div>
                </div>

                <div className='flex flex-col justify-center mt-8'>
                    {Venues.map((venue, index) => (
                        <VenueContainer key={index} venue={venue.venue} capacity={venue.capacity} />
                    ))}
                </div>

            </div>
        </div>
    );
}