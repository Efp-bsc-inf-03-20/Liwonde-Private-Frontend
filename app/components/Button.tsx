"use client";
import "./Navbar.css";
import React from "react";
interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}
function Button({ name, icon, background, color, border }: ButtonProps) {
  return (
    <div
      className="StyledButton"
      style={{ color: color, background: background, border: border }}
    >
      {icon && icon}
      {name}
    </div>
  );
}
export default Button;
