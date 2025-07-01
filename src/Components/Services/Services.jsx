import React from "react";
import "./Services.css"
import { RegisterNow } from "../RegisterNow/RegisterNow";
import { OurPlans } from "../OurPlans/OurPlans";

export const Services=()=>{
    return(
        <div>
             <div className="services-backgroundimg_container">
              {/* <h1 className="services-h1class">SERVICES</h1> */}
            </div>
            <div className="services-head">
                <span>WHAT WE DO?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
                {/* image block container */}
                <div className="services-block-container">
                <div className="services-main">
                    <div className="services-image-div">
                        <img className="services-image-container" src="https://themewagon.github.io/gymlife/img/services/services-1.jpg" alt=""/>
                    </div>
                    <div className="services-description-div">
                        <h3>Personal training</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</span>
                        <button className="services-btn">EXPLORE</button>
                    </div>
                </div>
                <div className="services-main">
                    <div className="services-image-div">
                        <img className="services-image-container" src="https://themewagon.github.io/gymlife/img/services/services-2.jpg" alt=""/>
                    </div>
                    <div className="services-description-div">
                        <h3>Personal training</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</span>
                        <button className="services-btn">EXPLORE</button>
                    </div>
                </div>
                </div>
                <div className="services-block-container">
                <div className="services-secondary">
                    <div className="services-image-div2">
                        <img className="services-image-container2" src="https://themewagon.github.io/gymlife/img/services/services-3.jpg" alt=""/>
                    </div>
                    <div className="services-description-div2">
                        <h3>Personal training</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</span>
                        <button className="services-btn">EXPLORE</button>
                    </div>
                </div>
                <div className="services-secondary">
                    <div className="services-image-div2">
                        <img className="services-image-container2" src="https://themewagon.github.io/gymlife/img/services/services-4.jpg" alt=""/>
                    </div>
                    <div className="services-description-div2">
                        <h3>Personal training</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</span>
                        <button className="services-btn">EXPLORE</button>
                    </div>
                </div>
                </div>
               
            </div>
            <RegisterNow/>
            <OurPlans/>
            </div>
    )
}