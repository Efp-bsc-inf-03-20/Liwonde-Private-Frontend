"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/icon.png";
import Container from "./Container";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import TopNav from "./TopNavData";

export const TopNavData = [
  { name: "Opening Hours", description: "Everyday 7AM-9PM" },
  { name: "Call Us On", description: "+2659900000" },
  { name: "Location", description: "Liwonde, Near Filling Station" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopNavVisible, setIsTopNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll direction
      setIsTopNavVisible(
        window.scrollY === 0 || window.scrollY < Number(isScrolled)
      );

      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]); // Dependency for efficient re-evaluation

  return (
    <nav
      className={`bg-bodyColor h-20 top-0 sticky z-50 ${
        isScrolled ? "fixed top-0 w-full bruh-bg" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center px-4 py-2 bg-primary ${
          isTopNavVisible ? "" : "hidden"
        }`}
      >
        <ul className="flex items-center text-sm gap-x-8">
          {/* <TopNav /> */}
        </ul>
      </div>
      <Container className="h-full flex items-center md:gap-x-5 justify-between space-between">
        {/**Buttom Nav */}
        <Link href="/">
          <div className="cursor-pointer duration-200">
            <Image
              src={logo}
              alt="Logo"
              width={74}
              height={100}
              className="h-120 w-120"
            />
          </div>
        </Link>
        <MobileMenu />
        <ul className="space-x-4 hidden md:flex sm:flex lg:flex">
          <NavLinks />
          <div className="cursor-pointer">
            <Button name="Book Appointment" />
          </div>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
