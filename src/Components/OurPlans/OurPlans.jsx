import React from "react";
import "./OurPlans.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Ourplandata } from "../Data/Ourplandata";

export const OurPlans = () => {
  return (
    <div className="ourplan_main_container">
      <div>
        <div className="ourplan_heading_container">
          <span style={{ color: "#f36100", marginTop: "20px" }}>OUR PLAN</span>
          <h2>CHOOSE YOUR PRICING PLAN</h2>
        </div>
        <div className="ourplan_block_container">
          {Ourplandata?.map((i) => (
            <div className="ourplans_separate_containers">
              <div>
                <h1>{i.plan}</h1>
                <h2>
                  <MdOutlineCurrencyRupee /> {i.price}/-
                </h2>
              </div>
              <div className="ourplan_terms_container">
                <span>Free riding</span>
                <span>Unlimited equipments</span>
                <span>Personal trainer</span>
                <span>Weight losing classes</span>
                <span>Month to mouth</span>
                <span>No time restriction</span>
              </div>
              <div>
                <button className="ourplan_button_container">ENROLL NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
