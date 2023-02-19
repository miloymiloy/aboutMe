import React from 'react'

const Likes = () => {
    return (
        <div className='content-bar-likes'>
            <p>Likes</p>
            <p>All Likes</p>
            <ul>
                <li>
                    <div className='likes-img-card'>
                        <img src='/arts.jpg' alt='likes'></img>
                    </div>
                    <span>Arts</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/movies.jpg' alt='likes'></img>
                    </div>
                    <span>Watching Movies</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/anime.jpg' alt='likes'></img>
                    </div>
                    <span>Anime</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/sleep.jpg' alt='likes'></img>
                    </div>
                    <span>Sleeping</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/game.jpeg' alt='likes'></img>
                    </div>
                    <span>Playing Games</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/chess.jpeg' alt='likes'></img>
                    </div>
                    <span>Chess</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/cat.jpg' alt='likes'></img>
                    </div>
                    <span>Cats</span>
                </li>
                <li>
                    <div className='likes-img-card'>
                        <img src='/music.jpg' alt='likes'></img>
                    </div>
                    <span>Listening to Music</span>
                </li>
            </ul>
        </div>
    );
}
export default Likes;