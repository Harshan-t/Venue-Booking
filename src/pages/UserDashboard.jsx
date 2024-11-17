import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../assets/Titlebar.png";
import UserNavbar from "../components/UserNavbar";

function UserDashboard() {
    return (
        <div>
            <div>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='w-full relative' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>User Profile</div>
                    <div className='absolute top-28 left-24 text-white'>Home</div>
                </div>
                <UserNavbar />
                <hr className="mt-5 border-2 " />
            </div>
        </div>
    )
}

export default UserDashboard;