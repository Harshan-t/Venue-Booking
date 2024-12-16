import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../assets/Titlebar.png";
import UserNavbar from "../components/UserNavbar";
import Table from "../components/Table";
import { FaSearch } from "react-icons/fa";

function UserBookings() {
    return (
        <div>
            <div>
                <Navbar />
                <div className='relative'>
                    <img src={Titlebar} alt="" className='min-w-[1500px] w-[2000px] min-h-[200px] relative' />
                    <div className='z-50 flex justify-center absolute top-16 text-white font-bold text-4xl left-24'>User Profile</div>
                    <div className='absolute top-28 left-24 text-white'>Home</div>
                </div>
                <UserNavbar />
                <div className="flex justify-center">
                    <div className="relative shadow-lg flex justify-between bg-[#f5f5f5] border border-[#eaedf0] mt-5 mb-5 py-3 px-6 rounded-lg shadow-xl text-[#6b7385] w-[1000px]">
                        <div className="flex items-center">
                            <button type="button" className="bg-white py-3 px-6 rounded-lg hover:cursor-pointer hover:text-white hover:bg-[#cbccee] focus:text-white focus:bg-[#999bbe] mr-5">Approved</button>
                            <button type="button" className="bg-white py-3 px-6 rounded-lg hover:cursor-pointer hover:text-white hover:bg-[#cbccee] focus:text-white focus:bg-[#999bbe] mr-5">Rejected</button>
                            <button type="button" className="bg-white py-3 px-6 rounded-lg hover:cursor-pointer hover:text-white hover:bg-[#cbccee] focus:text-white focus:bg-[#999bbe]">Awaiting</button>
                        </div>

                        <div className="flex justify-start p-4">
                            <div className="flex items-center w-[300px] bg-white rounded-3xl shadow-sm p-3 ">
                                <FaSearch className="text-gray-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 w-full border-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative shadow-lg flex flex-col bg-white mt-5 mb-5 p-10 rounded-lg w-[1200px]">
                        <div className="text-2xl font-semibold mb-6">My Bookings</div>
                        <Table staffmail="Harshan" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBookings;