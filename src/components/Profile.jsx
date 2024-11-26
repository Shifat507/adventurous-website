import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../provider/AuthProvider';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(authContext);
    console.log(user);
    const handleUpdate = () => {
        alert("Update Information clicked!");
    };
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            <div className="max-w-lg mx-auto bg-base-100 shadow-xl rounded-lg p-5">
                <div className="flex flex-col items-center">
                    <h1 className='text-4xl font-bold text-center my-6'>User Profile</h1>
                    <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full border-2 border-primary"
                    />
                    <h2 className="text-2xl font-bold mt-3">{user.displayName}</h2>
                    <p className="text-md font-semibold text-gray-500">{user.email}</p>
                    <button
                        className="btn btn-primary mt-4 flex items-center"
                        onClick={handleUpdate}
                    >
                        <FaUserEdit className="mr-2" /> Update Information
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;