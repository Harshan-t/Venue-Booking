import React from 'react';
import Navbar from '../components/Navbar.jsx'
import '../styles/StaffPages.css'
import myImage from '../assets/Image.png'
import joinus from '../assets/joinus.png'

function Landingpage() {
    return (
        <div >
            <Navbar />
            <div className='flex justify-center items-center mt-20'>
                <div className='max-w-xl min-w-xl tracking-wide font-sans flex flex-col'>
                    <div className='text-orange font-bold text-4xl'>Venue & Event booking Space</div>
                    <div className='font-bold text-6xl mt-4'>Experience Seamless Venue and Event Booking at your Fingertips......</div>
                    <div className='mt-5 text-sm'>The website is a one-stop platform for students to book venues and events on campus, simplifying the process and ensuring efficient utilization of resources.</div>
                    <button type="button" class="text-white bg-blueblack rounded-full py-2.5 text-center mt-5 size-1/5">Book Now</button>
                </div>
                <div className='max-w-xl min-w-xl'>
                    <img src={myImage} alt='Image' />
                </div>
            </div>
            <div>
                <div className='flex justify-center font-bold text-6xl mt-12 text-black bg-gradient-to-r from-black via-[#404040] to-white text-opacity-0 bg-clip-text'>How It Works</div>
                <div className='flex justify-center text-[#737373] text-3xl mt-5'>Simplifying the booking process for coaches, venues, and athletes.</div>
                <div className='flex justify-evenly'>
                    <div class="flex flex-col items-center my-6 bg-white rounded-xl shadow-2xl w-96 text-center p-5 py-7">
                        <div className='bg-grey p-4 rounded-xl'><img src={joinus} alt="" /></div>
                        <div className='font-bold'>Join us</div>
                        <div>Quick and Easy Registration: Get started on our software platform with a simple account creation process.</div>
                        <button type="button" class="text-black border-grey-2 border-2 bg-grey rounded-lg py-2.5 text-center mt-5 size-3/5">Sign in</button>
                    </div>
                    <div class="flex flex-col items-center my-6 bg-white rounded-xl shadow-2xl w-96 text-center p-5 py-7">
                        <div className='bg-grey p-4 rounded-xl'><img src={joinus} alt="" /></div>
                        <div className='font-bold'>About us</div>
                        <div>Quick and Easy Registration: Get started on our software platform with a simple account creation process.</div>
                        <button type="button" class="text-black border-grey-2 border-2 bg-grey rounded-lg py-2.5 text-center mt-5 size-3/5">Sign in</button>
                    </div>
                    <div class="flex flex-col items-center my-6 bg-white rounded-xl shadow-2xl w-96 text-center p-5 py-7">
                        <div className='bg-grey p-4 rounded-xl'><img src={joinus} alt="" /></div>
                        <div className='font-bold'>Join us</div>
                        <div>Quick and Easy Registration: Get started on our software platform with a simple account creation process.</div>
                        <button type="button" class="text-black border-grey-2 border-2 bg-grey rounded-lg py-2.5 text-center mt-5 size-3/5">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;