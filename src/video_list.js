import React from 'react';
import VideoItem from './video_list_item';

const VideoList = (props) => {

    console.log(props.videos[0]);

    return (
        <ul className="col-md-4 list-group">
            {props.videos.map((video) => <VideoItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.id.videoId} video={video}
                />
            )}
        </ul>
    )
}

export default VideoList;