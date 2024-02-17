import React from "react";
import Image from "next/image";

import logo from "../../../public/images/icon.png";
function Footer() {
  return (
    <section className="section1">
      <Image
        className="icon1"
        src={logo}
        alt="icon"
        width={150}
        height={150}
        style={{ marginRight: "10px" }}
      />
      <h1 className="footer">
        Important Links
        <div className="important">
          <ul>
            <li className="sam">
              <a href="#" className="sam">
                Team Of Developers
              </a>
            </li>
            <li className="sam">
              <a href="#" className="sam">
                Book a Appointment
              </a>
            </li>
            <li className="sam">
              <a href="#" className="sam"></a>Location Of Hospital
            </li>
            <li className="sam">
              <a href="#" className="sam">
                About The Hospital
              </a>
            </li>
          </ul>
        </div>
      </h1>
      <h1 className="footer">
        Contact Us
        <div className="important">
          <ul>
            <li className="sam">Call: 0990000000</li>
            <li className="sam">Email: liwonde@gmail.com</li>
            <li className="sam">Address: Liwonde, near puma Firing Station</li>
            <li className="sam"></li>
          </ul>
        </div>
      </h1>
      <h1 className="footer1">
        Map
        <div className="important">
          <iframe
            title="Google Map"
            width="428"
            height="220"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </h1>
    </section>
  );
}

export default Footer;
