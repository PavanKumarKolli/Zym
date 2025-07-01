import React from "react";
import "./Ourclasses.css";
import { IoIosArrowForward } from "react-icons/io";
import { Ourclassesdata } from "../Data/Ourclassesdata";
import { ourclasses } from "../Data/oouclassesBigImg";

export const Ourclasses = () => {
  return (
    <div style={{ backgroundColor: "#151515" }}>
      <div className="ourclasses_heading-container">
        <span style={{ color: "#f36100", marginTop: "50px", fontSize: "18px" }}>
          OUR CLASSES
        </span>
        <h2 style={{ color: "#fff" }}>WHAT WE CAN OFFER</h2>
      </div>
      <div className="ourclasses_sub-classes">
        {Ourclassesdata?.map((i) => (
          <div className="ourclasses_menu_container">
            <div className="ourclasses_list_container">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottom: "2px solid white",
                }}
                src={i.image}
                alt=""
              />
            </div>
            <div className="ourclasses_list_main_container">
              <div className="ourclasses_list_description">
                <span style={{ marginLeft: "12px", color: "#f36100" }}>
                  {i.tittle}
                </span>
                <span style={{ color: "#fff", fontSize: "20px" }}>{i.des}</span>
              </div>
              <button className="ourclasses_btn_container">
                <IoIosArrowForward size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="ourclasses_second_container">
        {ourclasses?.map((i) => (
          <div className="ourclasses_bigimg_container">
            <div className="ourclasses_big_img">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottom: "3px solid #fff",
                }}
                src={i.image}
                alt=""
              />
            </div>
            <div className="ourclasses_big_img_matter">
              <div>
                <span style={{ marginLeft: "12px", color: "#f36100" }}>
                  {i.tittle}
                </span>
                <h3 style={{ marginLeft: "12px", color: "#fff" }}>{i.des}</h3>{" "}
              </div>
              <div>
                <button className="ourclasses_btn_container">
                  <IoIosArrowForward size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
