import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../components/Navbar'
import Titlebar from '../assets/Titlebar.png'

import { IoArrowForwardCircleOutline } from "react-icons/io5"

function BookVenue() {
    const location = useLocation()
    const data = location.state || {}

    const [Venue, setVenue] = useState(data.name)
    const [Venuelocation, setVenuelocation] = useState(data.Location)
    const [st_time, setst_time] = useState()
    const [ed_time, seted_time] = useState()
    const [Date, setDate] = useState()
    const [no_par, setno_par] = useState()
    const [max_cap, setmax_cap] = useState(data.capacity)
    const [Desc, setDesc] = useState()
    const [options, setoptions] = useState([])

    const setOptionsDetails = async () => {
        const response = await axios.get('http://localhost:8000/venue')
        const names = response.data.venues.map(venue => venue.name)
        setoptions(names)
    };

    useEffect(() => {
        setOptionsDetails()
    }, []);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('http://localhost:8000/venue')
            const selectedvenue = response.data.venues.find(venue => Venue === venue.name)
            if (selectedvenue) {
                setmax_cap(selectedvenue.capacity)
                setVenuelocation(selectedvenue.location)
            }            
        }
        fetchdata()
    }, [Venue]);

    return (
        <div>
            <div className='bg-[#F5F6FA] h-full min-h-screen'>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='min-w-[1500px] w-[2000px] min-h-[200px] relative' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>Book Venue</div>
                    <div className='absolute top-28 left-24 text-white'>Home</div>
                </div>

                <div className='flex justify-center items-center h-16 '>
                    <div className='flex mr-8'>
                        <div className='bg-[#5b5e95] rounded-3xl w-8 h-8 text-xl flex justify-center text-white mr-2'>1</div>
                        <div className=' text-xl'>Information</div>
                    </div>
                    <div className='flex'>
                        <div className='bg-[#6b7385] rounded-3xl w-8 h-8 text-xl flex justify-center text-white mr-2'>2</div>
                        <div className='text-[#6b7385] text-xl'>Conformation</div>
                    </div>
                </div>

                <div className='text-3xl flex justify-center mt-6'>Select A venue</div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-white w-[780px] p-8 rounded-lg shadow-2xl m-8'>

                        <form>
                            <div>
                                <div className='text-2xl font-[500] mb-2'>
                                    Booking Form
                                </div>
                                <hr className='mb-8'></hr>
                                <div>
                                    <label htmlFor="date" class="block mb-2 text-date font-medium text-gray-900">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        class="bg-gray-50 placeholder-red-50::placeholder border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md"
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='flex justify-between'>
                                    <div className='w-[345px]'>
                                        <label htmlFor="st_time" class="block mb-2 mt-4 text-base font-medium text-gray-900">Start time</label>
                                        <input
                                            type="time"
                                            id="st_time"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md"
                                            onChange={(e) => setst_time(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-[345px]'>
                                        <label htmlFor="ed-time" class="block mb-2 mt-4 text-base font-medium text-gray-900">End Time</label>
                                        <input
                                            type="time"
                                            id="ed-time"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md"
                                            onChange={(e) => seted_time(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="venue" class="block mb-2 mt-4 text-base font-medium text-gray-900">Venue</label>
                                    <select
                                        type="text"
                                        id="venue"
                                        value={Venue}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md"
                                        onChange={(e) => setVenue(e.target.value)}
                                        required
                                    >
                                        {options &&
                                            options.map(element => (
                                                <option key={element} value={element}>{element}</option>
                                            ))
                                        }
                                    </select>
                                    <div >
                                        <label htmlFor="capacity" class="block mb-2 mt-4 text-base font-medium text-gray-900">Location</label>
                                        <input
                                            type="text"
                                            id="capacity"
                                            placeholder='Location'
                                            value={Venuelocation}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 cursor-default focus:outline-none"
                                            readOnly
                                        />
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-[345px]'>
                                            <label htmlFor="capacity" class="block mb-2 mt-4 text-base font-medium text-gray-900">No. of Participants</label>
                                            <input
                                                type="number"
                                                id="participants"
                                                placeholder='Enter the no. of Participants'
                                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md"
                                                onChange={(e) => setno_par(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className='w-[345px]'>
                                            <label htmlFor="capacity" class="block mb-2 mt-4 text-base font-medium text-gray-900">Maximum Capacity</label>
                                            <input
                                                type="number"
                                                id="capacity"
                                                placeholder='Maximum Capacity'
                                                value={max_cap}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 cursor-default focus:outline-none"
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="venue" class="block mb-2 mt-4 text-base font-medium text-gray-900">Event Description</label>
                                    <textarea
                                        placeholder='Enter Event Description'
                                        className='bg-[#f9fafb] overflow-hidden resize-none border rounded-lg w-full h-[130px] border-[#d1d5db] p-3 focus:outline-none focus:border-[#1a73e8] focus:shadow-md'
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                    <div className='flex justify-end text-sm text-gray-500'>Maximum 500 characters</div>
                                </div>
                            </div>
                        </form>
                        <div className='flex justify-between mt-5'>
                            <Link to="/home">
                                <button type="submit" class="flex items-center justify-center text-white mr-4 bg-[#504a61] hover:bg-[#6f6787] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center"><IoArrowForwardCircleOutline className='mr-1 mt-[3px] size-[20px] stroke-1 rotate-180' />Back</button>
                            </Link>
                            <Link to="/conformation" state={{
                                venue: Venue,
                                location: Venuelocation,
                                Date: Date,
                                st_time: st_time,
                                ed_time: ed_time,
                                no_par: no_par,
                                max_cap: max_cap,
                                Desc: Desc
                            }}>
                                <button type="submit" class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center">Next<IoArrowForwardCircleOutline className='ml-1 mt-[3px] size-[20px] stroke-1' /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookVenue