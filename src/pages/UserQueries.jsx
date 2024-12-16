import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../assets/Titlebar.png";
import UserNavbar from "../components/UserNavbar";
import { Link } from "react-router-dom"

function UserQueries() {
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
                    <div className="relative flex flex-col mt-5 mb-5 p-7 rounded-lg w-[1200px] shadow-lg bg-white border border-grey-400">
                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="venue" className="block mb-2 text-xl font-[600] text-gray-900">NAME</label>
                                <input type="text" id="venue" placeholder="Enter your Name" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-[560px] p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                            </div>
                            <div>
                                <label htmlFor="venue" class="block mb-2 text-xl font-[600] text-gray-900">VENUE</label>
                                <input type="text" id="venue" placeholder="Select Venue" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-[560px] p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="venue" class="block mb-2 text-xl font-[600] text-gray-900">SUBJECT</label>
                            <input type="text" id="venue" placeholder="Enter Subject" class="bg-gray-50 mb-8 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none focus:border-[#1a73e8] focus:shadow-md" required />
                        </div>
                        <div>
                            <label htmlFor="venue" class="text-xl font-[600] text-gray-900 block mb-2">COMMENTS</label>
                            <textarea placeholder="Enter your Queries" className='bg-[#f9fafb] overflow-hidden resize-none border rounded-lg w-full h-[130px] border-[#d1d5db] p-3 focus:outline-none focus:border-[#1a73e8] focus:shadow-md'></textarea>
                            <div className='flex justify-end text-sm text-gray-500'>Maximum 500 characters</div>
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

export default UserQueries;