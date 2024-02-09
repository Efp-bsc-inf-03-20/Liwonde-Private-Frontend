import React, { useState } from "react";
import "./style.css";
import icon from "../images/icon.png";
import Image from "next/image";

interface LoginFormProps {
  onLoginSuccess: () => void;
  redirectToAdmin: () => void;
  redirectToDepartment: (departmentId: string) => void;
}

export default function LoginForm({
  onLoginSuccess,
  redirectToAdmin,
  redirectToDepartment,
}: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/LPHStaff/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful!");
        console.log("Received data:", data);

        // Check if the user is an admin or a doctor using data.role or other appropriate property
        onLoginSuccess(); // Assuming successful login handling on parent component

        if (data.role === "admin") {
          redirectToAdmin();
        } else if (data.role === "doctor" && data.assignedDepartment) {
          redirectToDepartment(data.assignedDepartment);
        } else {
          console.error(
            "Invalid credentials or insufficient role information."
          );
          // Handle invalid role scenario gracefully (e.g., display error message)
        }
      } else {
        console.error("Login failed:", data.message);
        // Handle login failure gracefully (e.g., display error message)
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle network or other errors gracefully (e.g., display generic error message)
    }
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
            <button className="button1" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
