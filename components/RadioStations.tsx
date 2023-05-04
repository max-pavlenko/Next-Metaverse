'use client'
import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {getAverageRGB} from "../utils/useDominantColor";

const RadioStations = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const playerRef = useRef<HTMLDivElement>(null);
    const [background, setBackground] = useState('255,255,255');
    const averageRGB = useRef({});
    const [currentAudioData, setCurrentAudioData] = useState(AUDIO_DATA[0]);

    const onImgLoad = () => {
        const rgb = getAverageRGB(imageRef.current);
        averageRGB.current = rgb;
        const color = Object.entries(rgb).reduce((accum, [key, value]) => `${accum} ${value},`, '').slice(0, -2);
        console.log('color', color)
        setBackground(color ? `${color}` : '0,0,0');
    }

    const onNewRadioClick = ({cover, src}) => {
        setCurrentAudioData({cover, src})
        currentAudioData.cover === cover ? toggleAudio() : audioRef.current.play();
    }

    function toggleAudio(){
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }

    const toggleFullscreen = () => {
        document.fullscreenElement ? document.exitFullscreen() : playerRef.current.requestFullscreen();
    }

    return (
        <div onDoubleClick={toggleFullscreen} ref={playerRef} className={`bg-anim ${audioRef.current?.paused && 'paused'}`}
             style={{transition: '0.2s all ease-in-out',backgroundImage: `linear-gradient(45deg, transparent, rgb(${background}), transparent)`}}>
            <h3 style={{marginLeft: '100px', mixBlendMode: 'difference'}}>text</h3>
            <div style={{width: '50vh', height: '50vh', position: 'relative', marginInline: 'auto'}}>
                <Image className={`radio-cover ${audioRef.current?.paused && 'paused'}`} fill onLoad={onImgLoad} ref={imageRef} alt='img' src={`/audio/${currentAudioData.cover}.jpg`}/>
            </div>
            <audio ref={audioRef} src={currentAudioData.src} style={{display: 'none'}}/>

            <div style={{display: 'flex', justifyContent: 'center', gap: 15}}>
                {AUDIO_DATA.map(({cover, src}) => (
                    <div style={{width: 100, height: 100, position: 'relative', cursor: 'pointer'}}
                         onClick={() => onNewRadioClick({cover, src})} key={cover}>
                        <Image fill style={{objectFit: 'cover', borderRadius: '3%'}} src={`/audio/${cover}.jpg`}
                               alt={cover}/>
                        <div className={`w-2 h-2 bg-[rgb(${background})]`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const AUDIO_DATA = [
    {cover: 'flow', src: 'http://shoutcast.rtl.it:3040/'},
    {cover: 'hello', src: 'http://shoutcast.rtl.it:3040/'},
    {cover: 'speed', src: 'http://shoutcast.rtl.it:3040/'},
]

export default RadioStations;