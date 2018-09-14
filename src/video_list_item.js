import React from 'react';

const VideoItem = (props) => {
    return (
        <li className="list-group-item" onClick={() => props.onVideoSelect(props.video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img
                        className="media-object"
                        src={props.video.snippet.thumbnails.default.url}
                    />
                </div>
                <div className="media-body">
                    <div className="media-heading">{props.video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoItem;