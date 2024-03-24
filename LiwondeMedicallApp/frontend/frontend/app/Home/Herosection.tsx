import { TypeAnimation } from "react-type-animation";
import './Styles/HeroSection.css'

export default function Herosection() {
  return (
    <>
      {/* sliding images */}
      <section id="welcome-section">
        <h1 id="hospital-name" >
          {/* <span className="span">|</span > */}
          <h1 className="wel"> | Welcome To Liwonde  Private Hospital</h1><br />
        
        </h1>
        <div>
          <a href="Appointment">
            <button className="first-button">
              Book Appointment <span className="arrow">&#8594;</span>
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
