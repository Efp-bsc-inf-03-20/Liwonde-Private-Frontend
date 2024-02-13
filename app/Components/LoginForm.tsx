'use client'
import React, { useState } from "react";
import "./style.css";
import icon from "../images/icon.png";
import Image from "next/image";
const API_URL = "http://localhost:3000/LPHStaff/login";
interface LoginFormProps {
  onLoginSuccess: () => void;
  redirectToAdmin: () => void;
  redirectToDepartment: (departmentId: string) => void;
}

export default function LoginForm({
  redirectToAdmin,
  redirectToDepartment,
}: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      console.log("Submitting form...");
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

  if (response.ok) {
  console.log("Login successful!");
  const api = await response.json();
  const data = api.user;
  console.log("User data:", data);

  if (data.roles.includes("admin")) {
    redirectToAdmin();
  } else if (data.roles.includes("admin") && data.assignedDepartment) {
    console.error("User is not an admin. Redirecting accordingly...");
    redirectToDepartment(data.assignedDepartment);
  } else {
    console.error("Invalid credentials or insufficient role information.");
    setMessage("Invalid credentials or insufficient role information.");
  }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log("Rendering login component...");

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="form">
      <div className="form-wrapper">
        <div className="header1">
          <div className="logo-container">
            <Image
              className="center"
              src={icon}
              alt="talking"
              width={100}
              height={100}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Staff Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" className="name">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="name">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
              />
            </div>
            <button
              className="button1"
              type="submit"
              onClick={handleButtonClick}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {message && <p className="text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}
