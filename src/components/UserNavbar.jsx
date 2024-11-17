import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineLiveHelp } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import '../styles/UserNavbar.css';

function UserNavbar() {


    return (
        <div>
            <div className="flex justify-center mt-7">
                <NavLink to='/user/dashboard' className="nav-link flex flex-col justify-center items-center bg-white text-[20px] font-medium rounded-xl shadow-lg min-w-44 h-32 p-4 mr-[50px] cursor-pointer hover:text-white hover:bg-[#cbccee]">
                    <MdOutlineDashboardCustomize className='size-[28px]' />
                    Dashboard
                </NavLink>
                <NavLink to='/user/bookings' className="nav-link flex flex-col justify-center items-center bg-white text-[20px] font-medium rounded-xl shadow-lg min-w-44 h-32 p-4 mr-[50px] cursor-pointer hover:text-white hover:bg-[#cbccee]">
                    <FaRegCalendarAlt className='size-[24px]' />
                    My bookings
                </NavLink>
                <NavLink to='/user/help' className="nav-link flex flex-col justify-center items-center bg-white text-[20px] font-medium rounded-xl shadow-lg min-w-44 h-32 p-4 mr-[50px] cursor-pointer hover:text-white hover:bg-[#cbccee]">
                    <MdOutlineLiveHelp className='size-[25px]' />
                    Help
                </NavLink>
                <NavLink to='/user/settings' className="nav-link flex flex-col justify-center items-center bg-white text-[20px] font-medium rounded-xl shadow-lg min-w-44 h-32 p-4 cursor-pointer hover:text-white hover:bg-[#cbccee]">
                    <RiUserSettingsLine className='size-[24px] stroke-[0.5px]' />
                    Profile Settings
                </NavLink>
            </div>
        </div>
    )
}

export default UserNavbar;