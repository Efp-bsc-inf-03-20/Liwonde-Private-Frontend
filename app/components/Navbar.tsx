"use client";
import Image from "next/image";
import logo from "../../public/images/icon.png";
import Link from "next/link";
import "./Navbar.css";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
export const TopNavData = [
  { name: "Opening Hours", description: "Everyday 7AM-9PM" },
  { name: "Call Us On", description: "+2659900000" },
  { name: "Location", description: " Liwonde, Near  Filling Station" },
];
export const navData = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/" },
  { name: "Staff", path: "/" },
];
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <div className="nav">
        {" "}
        {/*TopNav*/}
        <div className="TopNav">
          <div className="logoImage">
            {" "}
            <Image
              className="logoImage"
              src={logo}
              alt="logo"
              width={80}
              height={80}
            />{" "}
            {/* <h1 className="logoText">Liwonde Private Hospital</h1> */}
          </div>
          <ul className="TopNavItems">
            {TopNavData.map((link) => {
              return (
                <li>
                  {link.name} : {link.description}
                </li>
              );
            })}
          </ul>
        </div>
        {/*InnerNav*/}
        <div className="InnerNav">
          <h1 className="logoText">Liwonde Private Hospital</h1>
          <ul className="InnerNavItems">
            {" "}
            {navData.map((link, index) => {
              return (
                <li>
                  <Link href={link.path} key={index}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <Button name="Book Appointment" />
          </ul>
        </div>
      </div>
    </>
  );
}
