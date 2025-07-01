import React from "react";
import "./Whyus.css";
import { WhyusData } from "../Data/Whyus-data";
export const Whyus = () => {
  return (
    <div className="whyus_main_container">
      <div>
        <div className="whyus_heading_container">
          <h1 style={{ color: "#F36100", marginTop: "50px" }}>
            WHY CHOOSE US?
          </h1>
          <span>PUSH YOUR LIMITS FORWARD</span>
        </div>
        <div className="whyus_loop_container">
          {WhyusData?.map((i) => (
            <div className="whyus_category_container">
              <div>
                {/* <div className="" style={{ position: "absolute" }}>
                  <img
                    id="logo-color"
                    style={{
                      width: "100px",
                      position: "relative ",
                      top: "-25px",
                      left: "100px",
                      zIndex: "-1",
                    }}
                    src="Images/cricle.png"
                    alt=""
                  />
                </div> */}
                <img
                  id="img_color"
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#fff",
                    padding:"7px",
                    borderRadius:"50%"
                    // position: "absolute",
                  }}
                  src={i.image}
                  alt=""
                />
              </div>
              <div className="whyus-loop-description">
                <h3>{i.heading}</h3>
                <span style={{ color: "gray" }}>{i.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
