import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const singleData = useLoaderData();
    const { adventureCost, adventureLevel, adventureTitle, bookingAvailability, categoryName, duration, ecoFriendlyFeatures, image, includedItems, location, maxGroupSize, shortDescription, specialInstructions } = singleData;

    const [showModal, setShowModal] = useState(false);

    const handleMeetSession = () => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const startTime = 10 * 60; // 10:00 AM in minutes
        const endTime = 20 * 60; // 8:00 PM in minutes
        const currentTime = currentHour * 60 + currentMinute;

        if (currentTime >= startTime && currentTime <= endTime) {
            window.open('https://meet.google.com/', '_blank');
        } else {
            setShowModal(true);
        }
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <Helmet>
                <title>Details | Home</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-2xl p-6 hover:shadow-lg">

                <div className="md:w-1/2 w-full">
                    <img
                        className="w-full h-full object-cover rounded-lg "
                        src={image}
                        alt={adventureTitle}
                    />
                </div>

                <div className="md:w-1/2 w-full space-y-4">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <h3 className="text-3xl font-extrabold text-gray-800">{adventureTitle}</h3>
                        <div className="mt-2 md:mt-0 text-sm bg-green-100 text-green-600 px-4 py-1 rounded-full font-semibold border border-green-300">
                            {categoryName}
                        </div>
                    </div>

                    <p className="text-gray-600">{shortDescription}</p>

                    <p className="text-gray-700">
                        <span className="font-semibold">Level:</span> {adventureLevel}
                    </p>
                    <div>
                        <span className="font-semibold text-gray-700">Features:</span>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                            {ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Included Items:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {includedItems.map((item, index) => (
                                <span
                                    key={index}
                                    className="badge badge-primary badge-outline text-sm px-3 py-1 rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-700">
                        <span className="font-semibold">Duration:</span> {duration}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Max Group Size:</span> {maxGroupSize}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Spot:</span> {location}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Booking Availability:</span> {bookingAvailability}
                    </p>
                    <div>
                        <span className="font-semibold text-gray-700">Special Instructions:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {specialInstructions.map((instruction, index) => (
                                <span
                                    key={index}
                                    className="badge badge-secondary text-xs px-2 py-1 rounded-md"
                                >
                                    {instruction}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-gray-800 font-bold text-xl">
                            Adventure Cost: <span className="text-green-600">${adventureCost}</span>
                        </p>
                        <button onClick={handleMeetSession} className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-500 transition-colors">
                            Talk with Expert
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Consultation Hours</h2>
                        <p className="text-gray-600">
                            Our consultation hours are between <strong>10:00 AM</strong> and <strong>8:00 PM</strong>.
                        </p>
                        <button
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>

        
    );
};

export default BlogDetails;
