import React from 'react';

function Table({ }) {

    const details = [
        { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", capacity: "300", no_of_participants: "100", status: "Approved" },
        { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", capacity: "300", no_of_participants: "90", status: "Rejected" },
        { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", capacity: "300", no_of_participants: "80", status: "Approved" },
        { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", capacity: "300", no_of_participants: "120", status: "Awaiting" },
        { name: "SF seminar-hall 1", location: "Sunflower-block", date_time: "10-10-2024", capacity: "300", no_of_participants: "134", status: "Awaiting" }
    ]

    return (
        <div className='flex justify-center'>
            <table className="w-[1200px] text-sm text-left rounded-xl">
                <thead className="text-xs text-gray-700 uppercase bg-[#f5f5f5] rounded-xl">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center ">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                                />
                                <label htmlFor="checkbox-all" className="sr-only">Select all</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">Venue name</th>
                        <th scope="col" className="px-6 py-3">location</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Capacity</th>
                        <th scope="col" className="px-6 py-3">Participants</th>
                        <th scope="col" className="px-6 py-3">status</th>
                    </tr>
                </thead>
                <tbody>
                    {details.length > 0 ? (
                        details.map((product, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id={`checkbox-table-${index + 1}`}
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor={`checkbox-table-${index + 1}`} className="sr-only">Select {product.name}</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">{product.location}</td>
                                <td className="px-6 py-4">{product.date_time}</td>
                                <td className="px-6 py-4">{product.capacity}</td>
                                <td className="px-6 py-4">{product.no_of_participants}</td>
                                <td className="px-6 py-4">
                                    {product.status === "Approved" && (
                                        <span class="inline-flex items-center justify-center bg-[#ccf0eb] text-sm text-[#00b69b] font-medium px-2 py-1 w-[90px] rounded-lg">
                                            Approved
                                        </span>
                                    )}
                                    {product.status === "Rejected" && (
                                        <span class="inline-flex items-center justify-center bg-[#fcd7d4] text-sm font-medium text-[#ef3826] px-2 py-1 w-[90px] rounded-lg">
                                            Rejected
                                        </span>
                                    )}
                                    {product.status === "Awaiting" && (
                                        <span class="inline-flex items-center justify-center bg-[#ffeddd] text-sm font-medium text-[#ffa756] px-2 py-1 w-[90px] rounded-lg">
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