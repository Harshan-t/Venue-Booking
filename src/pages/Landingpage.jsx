import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx'

import myImage from '../assets/Image.png'
import joinus from '../assets/joinus.png'
import Book from '../assets/Book.png'
import Venue from '../assets/Venue.png'

function Landingpage() {
    const navigate = useNavigate();

    return (
        <div >
            <div className='bg-[#F5F6FA]'>
                <Navbar />
                <div className='flex justify-center items-center mt-20'>
                    <div className='max-w-xl min-w-xl tracking-wide font-sans flex flex-col'>
                        <div className='text-[#f57017] font-bold text-4xl'>Venue & Event booking Space</div>
                        <div className='font-bold text-6xl mt-4'>Experience Seamless Venue and Event Booking at your Fingertips......</div>
                        <div className='mt-5 text-sm'>The website is a one-stop platform for students to book venues and events on campus, simplifying the process and ensuring efficient utilization of resources.</div>
                        <Link to="/Book">
                            <button type="button" class="text-white bg-[#212457] rounded-full py-2.5 text-center mt-5 size-1/5">Book Now</button>
                        </Link>
                    </div>
                    <div className='max-w-xl min-w-xl ml-5'>
                        <img src={myImage} alt='Image' className='min-w-12' />
                    </div>
                </div>
                <div>
                    <div className='flex justify-center font-bold text-6xl mt-12 text-black bg-gradient-to-r from-black via-[#404040] to-white text-opacity-0 bg-clip-text'>How It Works</div>
                    <div className='flex justify-center text-[#737373] text-3xl mt-5'>Simplifying the booking process for coaches, venues, and athletes.</div>
                    <div className='flex justify-evenly'>
                        <div class="flex flex-col items-center my-6 bg-white border border-[#eaedf0] rounded-xl shadow-2xl w-96 text-center p-5 py-7">
                            <div className='bg-[#f2f2f2] p-4 rounded-xl'><img src={joinus} alt="" /></div>
                            <div className='font-bold'>Join us</div>
                            <div>Quick and Easy Registration: Get started on our software platform with a simple account creation process.</div>
                            <button type='submit' onClick={() => { navigate("/register") }} class="text-black border-[#bababa] border-2 bg-[#f2f2f2] rounded-lg py-2.5 text-center mt-5 size-3/5">Register</button>
                        </div>
                        <div class="flex flex-col items-center my-6 bg-white border border-[#eaedf0] rounded-xl shadow-2xl w-96 text-center p-5 py-7">
                            <div className='bg-[#f2f2f2] p-4 rounded-xl'><img src={Venue} alt="" /></div>
                            <div className='font-bold'>Venues</div>
                            <div className='w-64'>View our Venues with seamless experience with detailed info of venues </div>
                            <button type="button" onClick={() => { navigate("/venue") }} class="text-black border-[#bababa] border-2 bg-[#f2f2f2] rounded-lg py-2.5 text-center mt-5 size-3/5">Venues</button>
                        </div>
                        <div class="flex flex-col items-center my-6 bg-white border border-[#eaedf0] rounded-xl shadow-2xl w-96 text-center p-5 py-7">
                            <div className='bg-[#f2f2f2] p-4 rounded-xl'><img src={Book} alt="" /></div>
                            <div className='font-bold'>My Bookings</div>
                            <div>Quick and Easy Registration: Get started on our software platform with a simple account creation process.</div>
                            <button type="button" onClick={() => { navigate("/user/bookings") }} class="text-black border-[#bababa] border-2 bg-[#f2f2f2] rounded-lg py-2.5 text-center mt-5 size-3/5">History</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;