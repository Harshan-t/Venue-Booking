import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../assets/Titlebar.png";
import UserNavbar from "../components/UserNavbar";
import { Link } from "react-router-dom";

function UserSettings() {
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

                <div className="flex justify-center">
                    <div className="relative flex flex-col mt-5 mb-5 p-7 rounded-lg w-[1200px] shadow-lg bg-white border border-grey-400">
                        <div>
                            <label htmlFor="venue" class="block mb-2 text-xl font-[600] text-gray-900">NICKNAME</label>
                            <input type="text" id="venue" placeholder="Enter New Nickname" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                        </div>
                        <div>
                            <label htmlFor="venue" class="block mb-2 text-xl font-[600] text-gray-900">OLD PASSWORD</label>
                            <input type="password" id="venue" placeholder="Enter Old Password" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                        </div>
                        <div>
                            <label htmlFor="venue" className="block mb-2 text-xl font-[600] text-gray-900">NEW PASSWORD</label>
                            <input type="Password" id="venue" placeholder="Enter your Name" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-[560px] p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                        </div>
                        <div>
                            <label htmlFor="venue" class="block mb-2 text-xl font-[600] text-gray-900">Confirm Password</label>
                            <input type="Password" id="venue" placeholder="Select Venue" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-[590px] p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                        </div>

                        <div className="flex justify-end mt-4">
                            <Link to="/home">
                                <button type="submit" class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full h-full sm:w-auto px-4 py-2.5 text-center">Submit</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSettings;