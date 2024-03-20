'use client'

import React, {useState} from "react"
import './style.css'
import Image from "next/image"
import pharma from '../images/pharma.jpeg'
import icon from '../images/icon.png'
import location from '../images/location.png'
import phone from '../images/phone.png'
import time from '../images/time.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Pharmacy(){
    // usestates
    return(
        <div>
            <div className="head">
                <header className="header-content">
                <Image className="icon"
                    src={icon}
                    alt="icon"
                    width={100}
                    height={100}
                    />
                </header>
                <h1 className="head1">Liwonde Private Hospital</h1>
                    <div className="details">
                    <Image className="phone"
                    src={phone}
                    alt="phone"
                    width={20}
                    height={20}
                    />
                    <p className="numbers">Phone Numbers</p>
                    <div>
                        <p className="num">+265889900000</p>
                    </div>
                    </div>
                    <div className="details">
                    <Image className="phone"
                    src={time}
                    alt="phone"
                    width={20}
                    height={20}
                    />
                    <p className="open"> Opening Hours</p>
                    <div>
                        <p className="num">Everyday 7AM-9PM</p>
                    </div>
                 </div>
                 <div className="details">
                    <Image className="phone"
                    src={location}
                    alt="phone"
                    width={20}
                    height={20}
                    />
                    <p className="location">Location</p>
                    <div>
                        <p className="num">Liwonde, Near <br/> Filling Station</p>
                    </div>
              </div> 

            </div>
            <div className="navigation">
    <nav className="header"
    >
            <ul className="services">
                <li className="clicks"><a className="link" href="">Home</a></li>
                <li className="clicks"><a  className="link"href="">Services</a>
                <div  className="dropdown-menu">
                    <ul className="list">
                        <li className="ref"><a className="drop" href="">Reception Services</a></li>
                        <li className="ref"><a className="drop" href="pharmacy">Pharmarcy Services</a></li>
                        <li className="ref"><a  className="drop" href="">Dental Services </a></li>
                        <li className="ref" ><a className="drop" href="">Ambulance Services</a></li>
                        <li className="ref" ><a className="drop" href="">OPD services</a></li>
                        <li className="ref" ><a className="drop" href="">X-Ray services</a></li>
                        <li className="ref" ><a className="drop" href="">Laboratory services</a></li>
                        <li className="ref" ><a className="drop" href="">Martenity services</a></li>
                        <li className="ref" ><a className="drop" href=""></a></li>
                    </ul>
                </div>
                </li>
                <li className="clicks"><a className="link"  href="#">Request Appointment</a></li>
                <li className="clicks"><a className="link" href="">Doctors</a></li>
                <li className="clicks"><a className="link" href="">Staff</a></li>
                <li className="clicks"><a className="link"  href="">Department</a>
                <div  className="dropdown-menu">
                    <ul className="list">
                        <li className="ref"><a className="drop" href="">Dental Department</a></li>
                        <li className="ref"><a className="drop" href="">X-ray and Scanning Departmen</a></li>
                        <li className="ref"><a  className="drop" href="">Laboratory Department </a></li>
                        <li className="ref" ><a className="drop" href="">Ambulance Services</a></li>
                        <li className="ref" ><a className="drop" href="">Pharmacy Department</a></li>
                        <li className="ref" ><a className="drop" href="">Finance Department</a></li>
                    </ul>
                </div>
                </li>
            </ul>
            <div className="button" >
                <a className="bt1" href="#">
                <button className="button " type="submit"> Book Appointment</button>
                </a>
            </div>
        </nav>      
    </div>
      <div>
        <Image
         src={pharma}
         alt="pharma"
         width={1680}
        height={600}  
        />
      </div>
      <div className="mission">
      <div className="mission-picture">
                <Image
                src={icon}
                alt="talking"
                width={370}
                height={450}
                style={{borderRadius:'10px'}}
                />
            </div> 
           
        <div className="mission-list">
            <h1 className="part">Pharmacy Service</h1>

            <h3 className="vision">Liwonde hospital Pharmacy</h3>
            <h3 className="vision">Core Services</h3>
            <p className="vis">recieve great medical guidance from well trained pharmacist of
                Liwonde hospital our pharmacy services include, selling medicine
                from the store or you can buy directly buy filling form below, medical
                prescription, medical nutrition guidance and medical check ups
            </p>
            <h3 className="vision1">Vision Statement</h3>
            <p className="vis">Our vision is to become number trusted affordable pharmacy committed
                    to provision of high quality and cost effective medicine in Malawi. 
                    We believe in intergrity, honest, accountability, respect and compasion
                    towards our customer.
                    Online pharmacy is open 24 hours and it is highly responsive  
            </p>
            <h3 className="vision1">Order Medicine Online</h3>
            <p className="vis">please follow the instruction below to order medicine you will 
                    receive an email or sms confirming your and together with price.
                    you can come and collect at the reception</p>
        </div>
            </div>
            <div className="form">
                <div className="form-wrapper">
                    <div className="header1">
                        <div className="logo-container">
                        <Image className="center"
                            src={icon}
                            alt="talking"
                            width={100}
                            height={100}
                            style={{borderRadius:'10px'}}
                            />
                        </div>
                        <h1>Drug Inquiry Form</h1>
                        <label className="name">Name:</label>
                        <input 
                        type="text" 
                        id="name"
                        placeholder="e.g Sam Zarila"
                        />
                        <label className="name">Phone Number:</label>
                        <input 
                        type="text" 
                        id="name"
                        placeholder="tnm or airtel"
                        />
                        <label className="name">Drug Name:</label>
                        <input 
                        type="text" 
                        id="name"
                        placeholder="e.g panado"
                        />
                        <label className="name">Drug Quantity:</label>
                        <input 
                        type="text" 
                        id="name"
                        placeholder=" e.g 1 tablet or 1 gram"
                        />
                        <button className="button1" type="submit">Place Order</button>
                    </div>

                </div>
                
            </div>
                <h1 className="part1">We Treat, God Heals</h1>
                 <div className="footer">
                    <div className="container">
                        <div className="row">
                        <div className="footer-col">
                        <Image className="icon1"
                                src={icon}
                                alt="icon"
                                width={150}
                                height={150}
                                style={{ marginRight:'10px'}}
                                />
                            </div>
                            <div className="footer-col">
                                <h4>Important Links</h4>
                                <ul>
                                <li>
                                        <a href="#"  id="ttt">Book Appointment</a>
                                    </li>
                                    <li>
                                        <a href="#"  id="ttt">Team of Developers</a>
                                    </li>
                                    <li>
                                        <a href="#" id="ttt">Location</a>
                                    </li>
                                    <li>
                                        <a href="#" id="ttt">About Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <p id="ttt1">Call: 0998052417</p>
                                    </li>
                                    <li>
                                      <p id="ttt1">Email: LiwondePvthospital@gmail.com</p> 
                                    </li>
                                    <li>
                                        <p id="ttt1">Physical Address</p>
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Map</h4>
                                <iframe
                                    title="Google Map"
                                    width="300"
                                    height="200"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                >

                                </iframe>
                                
                            </div>
                        </div>
                    </div>
                    <div >
                        <p id="private">@Liwonde Private Hospital 2024</p>
                    </div>
                 </div>

        </div>
    )
}