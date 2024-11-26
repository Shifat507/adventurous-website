import React, { useContext, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { authContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    
    const navigate = useNavigate()
    const { userUpdatedData } = useContext(authContext)
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        userUpdatedData({
            displayName:name, photoURL:photoUrl
        })
        .then(() =>{
            navigate('/');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>

            <div className="max-w-lg mx-auto bg-base-100 shadow-xl rounded-lg p-5">
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col items-center">
                        <h1 className='text-4xl font-bold text-center my-6'>Update Your Information</h1>

                        <div className='flex items-center gap-2 mb-4'>
                            <h1 className='text-xl font-semibold mb-1'>Name: </h1>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" name='name' className="grow" placeholder="Username" />
                            </label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-xl font-semibold mb-1'>Photo URL: </h1>

                            <input type="text" name='photo' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button
                            className="btn btn-primary mt-4 flex items-center my-12"
                            
                        >
                            <FaUserEdit className="mr-2" /> Update Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;