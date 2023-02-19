import React from 'react'

const Profile= () => {
    return (
    <div className='top-container'>
        <div className='profile-box'>
            <div className='cover-photo-card'>
                <img src='/logo192.png' alt='Cover'></img>
            </div>
            <div className='profile-card'>
                <div className='profile-photo-card'>
                    <img src='/profile.jpg' alt='Profile'></img>
                </div>
                <p>Ramilo L. Esquierra</p>
            </div>
        </div>
        <div className='menu-box'>
            <ul>
                <li>
                    <span>Posts</span>
                </li>
                <li>
                    <span>About</span>
                </li>
                <li>
                    <span>Friends</span>
                </li>
                <li>
                    <span>Photos</span>
                </li>
                <li>
                    <span>Videos</span>
                </li>
                <li>
                    <span>Check-ins</span>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default Profile;