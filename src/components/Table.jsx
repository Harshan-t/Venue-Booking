import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Table({ staffmail }) {

    const [details, setdetails] = useState([])

    const setDetail = async () => {
        const result = await axios.get('http://localhost:8000/bookings')
        setdetails(result.data.bookings.filter(booking => booking.Staff === staffmail))
    }
    
    useEffect(() => {
        setDetail()
    },[staffmail])

    return (
        <div className='flex justify-center'>
            <table className="w-[1200px] text-sm text-left rounded-xl">
                <thead className="text-xs text-gray-700 uppercase bg-[#f5f5f5] rounded-xl">
                    <tr className="">
                        <th scope="col" className="px-6 py-3">Venue name</th>
                        <th scope="col" className="px-6 py-3">location</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Participants</th>
                        <th scope="col" className="px-6 py-3">Capacity</th>
                        <th scope="col" className="px-6 py-3">status</th>
                    </tr>
                </thead>
                <tbody >
                    {details.length > 0 ? (
                        details.map((detail, index) => (
                            <tr key={index} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {detail.Venue_Name}
                                </th>
                                <td className="px-6 py-4">{detail.Location}</td>
                                <td className="px-6 py-4">{new Date(detail.Booking_Date).toLocaleDateString()}</td>
                                <td className="px-6 py-4">{detail.Booked_Capacity}</td>
                                <td className="px-6 py-4">{detail.Venue_Capacity}</td>
                                <td className="px-6 py-4">
                                    {detail.Status === "Approved" && (
                                        <span className="inline-flex items-center justify-center bg-[#ccf0eb] text-sm text-[#00b69b] font-medium px-2 py-1 w-[90px] rounded-lg">
                                            Approved
                                        </span>
                                    )}
                                    {detail.Status === "Rejected" && (
                                        <span className="inline-flex items-center justify-center bg-[#fcd7d4] text-sm font-medium text-[#ef3826] px-2 py-1 w-[90px] rounded-lg">
                                            Rejected
                                        </span>
                                    )}
                                    {detail.Status === "Awaiting" && (
                                        <span className="inline-flex items-center justify-center bg-[#ffeddd] text-sm font-medium text-[#ffa756] px-2 py-1 w-[90px] rounded-lg">
                                            Awaiting
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                No Bookings available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;