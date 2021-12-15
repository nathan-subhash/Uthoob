import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <Videoitem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default Videolist;