import React, { useState } from "react";
import DashImg from "../assets/moptro logo@2x.png";
import CustomerIcon from "../assets/Group 46@2x.png";
import User from "../components/User";
import "../App.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Users() {
  const usersData = JSON.parse(localStorage.getItem("users")) || [];
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = searchQuery
    ? usersData.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : usersData;

  return (
    <div className="Total_Dashboard">
      <img src={CustomerIcon} alt="Customer" />
      <div className="Dashboard_Img">
        <img src={DashImg} alt="image_mop" />
        <p>{usersData.length}</p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search with name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="Users_Total">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => <User key={index} user={user} />)
        ) : (
          <p>No users found with the provided name.</p>
        )}
      </div>
      <div className="NavBar">
        <NavBar />
      </div>
      <Link className="Logout" to="/">
        Logout
      </Link>
    </div>
  );
}

export default Users;
