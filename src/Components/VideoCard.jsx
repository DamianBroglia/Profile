import React from 'react';
import YouTube from 'react-youtube';
import "./VideoCard.css"

const VideoCard = ({ videoId, title, text }) => {
    return (
        
        <div className='containerVideo'>
            <YouTube videoId={videoId} />
            <h2 className='title'>{title}</h2>
        </div>
        
    );
};

export default VideoCard;