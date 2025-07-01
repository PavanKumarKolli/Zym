import React from 'react';
import ReactPlayer from 'react-player';
import './ClassProgressSection.css';


export const ClassProgressSection = () => {
    return (
        <div className="Progress-class-info-container">
            <div className="Progress-videos-container">
                {/* <h2>Activity</h2> */}
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    width="100%"
                    controls
                    className="Progress-video-player"
                />
            </div>
            <div className="Progress-info-container">
                <span style={{color:"f36100"}}>ABOUT US</span>
                <h2>WHAT WE HAVE DONE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <div className="Progress-progress-container">
                    <div className="Progress-progress-bar">
                        <span className="Progress-label">Body building: 80%</span>
                        <div className="Progress-bar" style={{ width: '80%' }}></div>
                    </div>
                    <div className="Progress-progress-bar">
                        <span className="Progress-label">Training: 65%</span>
                        <div className="Progress-bar" style={{ width: '65%' }}></div>
                    </div>
                    <div className="Progress-progress-bar">
                        <span className="Progress-label">Fitness: 90%</span>
                        <div className="Progress-bar" style={{ width: '90%' }}></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


