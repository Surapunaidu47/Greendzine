// Dashboard.js
import React from "react";
import DashImg from "../assets/moptro logo@2x.png";
import CustomerIcon from "../assets/Group 46@2x.png";
import "../App.css";
import NavBar from "./NavBar";

const Data = [
  {
    title: "Productivity on Monday",
    per: 4,
  },
  {
    title: "Productivity on Tuesday",
    per: 92,
  },
  {
    title: "Productivity on Wednesday",
    per: 122,
  },
  {
    title: "Productivity on Thursday",
    per: 93,
  },
  {
    title: "Productivity on Friday",
    per: 89,
  },
  {
    title: "Productivity on Saturday",
    per: 98,
  },
];

function Dashboard() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <div className="Total_Dashboard">
      <img src={CustomerIcon} alt="Customor" />
      <div className="Dashboard_Img">
        <img src={DashImg} alt="image_mop" />
        <p>{users.length}</p>
      </div>
      <p className="Heading_Dashboard">Employee Productivity Dashboard</p>
      <div className="Total_Productivity">
        {Data.map((item, index) => {
          const { title, per } = item;
          return (
            <div className="Productivity_item" key={index}>
              <div className="Products_head">
                <p>{title}</p>
                <h6>{per}%</h6>
              </div>
              <div className="Progress_Bar" style={{ width: per }}></div>
            </div>
          );
        })}
      </div>
      <NavBar />
    </div>
  );
}

export default Dashboard;
