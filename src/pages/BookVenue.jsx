import React from 'react'
import Navbar from '../components/Navbar'
import Titlebar from '../assets/Titlebar.png'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

function BookVenue() {
    return (
        <div>
            <div className='bg-[#F5F6FA] h-full min-h-screen'>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='w-full relative' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>Book Venue</div>
                    <div className='absolute top-28 left-24 text-white'>Home</div>
                </div>
                <div className='flex justify-center items-center h-16 '>
                    <div className='flex mr-8 '>
                        <div className='bg-[#5b5e95] rounded-3xl w-8 h-8 flex justify-center text-white text-xl mr-2'>1</div>
                        <div className='text-xl'>Time & Date</div>
                    </div>
                    <div className='flex mr-8'>
                        <div className='bg-[#6b7385] rounded-3xl w-8 h-8 text-xl flex justify-center text-white mr-2'>2</div>
                        <div className='text-[#6b7385] text-xl'>Information</div>
                    </div>
                    <div className='flex'>
                        <div className='bg-[#6b7385] rounded-3xl w-8 h-8 text-xl flex justify-center text-white mr-2'>3</div>
                        <div className='text-[#6b7385] text-xl'>Conformation</div>
                    </div>
                </div>
                <div className='text-3xl flex justify-center'>Time & Date</div>
                <div className='flex justify-center'>Book your training session at a time and date that suits your needs.</div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-white w-[50vw] p-8 rounded-lg shadow-2xl m-8'>
                        
                    </div>
                </div>

                <div className='flex justify-center mb-8 mt-2'>
                    <Link to="/home">
                        <button type="submit" class="flex items-center justify-center text-white mr-4 bg-[#504a61] hover:bg-[#6f6787] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center"><IoArrowForwardCircleOutline className='mr-1 mt-[3px] size-[20px] stroke-1 rotate-180' />Back</button>
                    </Link>
                    <Link to="/summary">
                        <button type="submit" class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center">Next<IoArrowForwardCircleOutline className='ml-1 mt-[3px] size-[20px] stroke-1' /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookVenue