import React from 'react'

const Photos= () => {
    return (
        <div className='content-bar-photos'>
        <p>Photos</p>
        <p>Ramilo's Photos</p>
        <ul>
          <li>
            <div className='likes-img-card'>
              <img src='/photo1.jpg' alt='likes'></img>
            </div>
          </li>
          <li>
            <div className='likes-img-card'>
              <img src='/photo2.jpg' alt='likes'></img>
            </div>
          </li>
          <li>
            <div className='likes-img-card'>
              <img src='/photo3.jpg' alt='likes'></img>
            </div>
          </li>
          <li>
            <div className='likes-img-card'>
              <img src='/photo4.jpg' alt='likes'></img>
            </div>
          </li>
          <li>
            <div className='likes-img-card'>
              <img src='/photo5.jpg' alt='likes'></img>
            </div>
          </li>
        </ul>
      </div>
    );
}
export default Photos;