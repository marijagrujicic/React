import React,{useState} from 'react';
import { Button } from './Button';
import '../App.css'
import './HeroSection.css';
import YouTube from 'react-youtube';






function HeroSection() {

    
const[trailerUrl,setTrailerUrl]=useState('');

const handleClick=()=>{
  
        setTrailerUrl('rrwycJ08PSA');

}

const opts={
    height:"300",
    width:'100%',
    playerVars:{
        autoPlay:1,
    },
}

    return (
        <div className='hero-container'>
            <video src='/videos/video1.mp4'
            autoPlay loop muted/>
            <h1>Dark</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
               
                <Button className='btns'
                    buttonStyle='btn--primary'
                    onClick={()=>handleClick()}
                    buttonSize='btn--large'>
                    
                    WATCH TRAILER
                    <i className='far fa-play-circle'></i>
                </Button>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default HeroSection
