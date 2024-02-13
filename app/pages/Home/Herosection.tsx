"use client";
import "./hero.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../styles/globals.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../public/images/image.png";
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image4.png";
export default function Herosection() {
  const slideImages = [image, image2, image1, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const slideNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    };
    const interval = setInterval(slideNext, 1000);
    return () => clearInterval(interval);
  }, [slideImages.length]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
  };
  return (
    <>
      {" "}
      <div className="slider">
        <Slider {...settings} className="slide">
          {slideImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Slider Image ${index + 1}`}
                // alt="mm"
                width={1600}
                height={900}
              />{" "}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
