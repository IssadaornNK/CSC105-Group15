import React, { useState } from 'react'
import Admin_Waifu from '../assets/Admin_Waifu.jfif'
import { Link } from 'react-router-dom';

function ProfileIcon() {
    const [isOpen, setIsOpen] = useState(false);

    function logout() {
        document.cookie = 'token=;max-age=0';
        location.href = '/';
    }

    if (!document.cookie.includes("token")) {
        location.href = "/login";
    }

    return (
        <div className="relative flex flex-col items-center">
            <img src={Admin_Waifu} alt="Fox" width="50px" height="50px" 
            className='rounded-full' onClick={() => setIsOpen((prev) => !prev)} />

            {!isOpen ? (
                ''
            ): (
                ''
            )}

            {isOpen && (
                <div className='bg-white absolute mt-[70px] flex items-start w-[150px] justify-center'>
                    <div className='mb-6 mt-4 text-center'>
                        <div className='my-4'>
                        <Link className='hover:text-[#F18B24] my-4' to="/ProfilePage">Profile</Link>
                        </div>
                        <div className='my-4 text-[#FF0000] hover:text-[#B90E0A]'>
                        <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileIcon