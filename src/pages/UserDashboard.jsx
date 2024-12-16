import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../assets/Titlebar.png";
import UserNavbar from "../components/UserNavbar";
import Table from "../components/Table";

function UserDashboard() {
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
                {/* <div className="flex justify-center"><hr className="mt-7 mb-7 border-[1.6px] border-[#d1d1d1] w-[1300px]" ></hr></div> */}

                <div className="flex justify-center mt-7">
                    <div className="bg-white min-w-[700px] w-[1100px] h-[230px] border-white shadow-lg rounded-xl p-6 flex items-center">
                        <div className="bg-[#999bbe] min-w-[100px] w-[130px] h-[140px] ml-8 border-white rounded-xl">
                            {/* image */}
                        </div>
                        <div className="ml-5 flex flex-col">
                            <div className="text-2xl font-[700] mb-3 mt-[-10px]"> Prof. Dumbledore</div>
                            <div className=" text-[#6b7385]">Depatment of Artificial Intelligence and data science</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center"><hr className="mt-7 mb-7 border-[2px] border-[#d1d1d1] w-[1300px]" ></hr></div>

                <div className="flex justify-center mb-4">
                    <div className="bg-white min-w-[700px] w-[1100px] h-[240px] border-white shadow-lg rounded-xl py-6 px-6">
                        <div className="text-2xl font-[600] mb-6">Today's Events</div>
                        <hr className="border" />

                        <div className="mt-4 flex justify-evenly font-[500]">
                            <div>
                                Venue
                            </div>
                            <div>
                                Start time
                            </div>
                            <div>
                                End time
                            </div>
                            <div>
                                No. of Participants
                            </div>
                            <div>
                                Location
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center"><hr className="mt-7 mb-7 border-[2px] border-[#d1d1d1] w-[1300px]" ></hr></div>
                <div className="flex justify-center">
                    <div className="relative shadow-lg bg-white mt-5 mb-5 p-10 rounded-lg w-[1300px]">
                        <div className="text-2xl font-[600] mb-6">My Bookings</div>
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;