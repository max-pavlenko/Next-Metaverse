'use client'
import React, {useEffect, useRef, useState} from 'react';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        fullScreenMode()
    }, []);

    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };

    const fullScreenMode = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div>
            <video onTimeUpdate={handleProgress} ref={videoRef} controls src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
            <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <div style={{backgroundColor: 'rgba(200,200,200, 0.75)', position: 'relative', height: 10}}>
                <div style={{backgroundColor: 'mistyrose', position: 'absolute', top: 0, bottom: 0, width: `${progress}%`}} />
                <div style={{height: 15, width: 15, borderRadius: '50%', position: 'absolute', top: 0, bottom: 0, left: `${progress}%`}} />
            </div>
            <progress value={progress} max={videoRef.current?.duration} />
            <h2>{videoRef.current?.duration}</h2>
            <button onClick={()=>videoRef.current.requestPictureInPicture()}>pic in pic</button>
        </div>
    );
};

export default Video;