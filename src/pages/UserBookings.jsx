import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../assets/Titlebar.png";
import UserNavbar from "../components/UserNavbar";

function UserBookings() {
    return (
        <div>
            <div>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='size-2/5' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>User Profile</div>
                    <div className='absolute top-28 left-24 text-white'>Home</div>
                </div>
                <UserNavbar />
            </div>
        </div>
    )
}

export default UserBookings;