'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { destroyCookie } from "nookies";

import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";


export default function Sale(){
const router = useRouter();


const handleLogout = async () => {
  try {
    console.log("Logging out...");
    const response = await fetch("http://localhost:3000/LPHStaff/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
    //   destroyCookie(null, "accessToken");
    //   destroyCookie(null, "refreshToken");
      router.push("/pages/Login");
      console.log("Logout successful!");
    } else {
      console.error("Logout failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

    return (
      <div>
        <div id="dash">
          <header>Pharmacist</header>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Records</a>
            </li>
            <li>
              <a href="Sale">Sales</a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div id="table">
          <div>
            <Image src={icon} alt="alt" width={100} height={100} />
          </div>
          <div id="searchbar">
            <input
              type="text"
              id="searchbar"
              placeholder="search for drugs..."
            />
          </div>
          <div className="button-container">
            <div>
              <button className="button">View Table</button>
            </div>
            <div>
              <a href="Record">
                <button className="button2">Create Table</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

