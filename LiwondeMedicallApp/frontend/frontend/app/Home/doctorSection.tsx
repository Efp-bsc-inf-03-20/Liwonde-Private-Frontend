
import Image, { StaticImageData } from "next/image";
import female from "../images/female.jpeg";
import female2 from "../images/female2.webp";
import doctor from "../images/doctor1.webp";
import doctor2 from "../images/doctor2.webp";

import './Styles/doctorSection.css'

export default function DoctorsSection(){
    return (<><section id="doctors-section">
    <div>
      <h3 className="Quick-services">Medical Staff Team</h3>
    </div>

    <div id="staff">
      <div className="staff-team">
        <Image
          src={female}
          alt=""
          width={200}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Mrs Chilikumtima</h3>
        <p className="staff-role">
          Diploma clinic officer ,went to Malamulo college , has 15 year experience
          in medical
        </p>
      </div>
      <div className="staff-team">
        <Image
          src={doctor}
          alt=""
          width={208}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Dr Patrick Phiri</h3>
        <p className="staff-role">
          Dr in medical, 6 years experience in medical went to collage of medicine
          a very experience doctor
        </p>
      </div>

      <div className="staff-team1">
        <Image
          src={doctor2}
          alt=""
          width={208}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Mr M.A Chilikumtima</h3>
        <p className="staff-role">
       owner and Founder of Liwonde Private Hospital,Diploma in clinical officer went to Malamulo,
       Bachelors degree in Health management  with almost 30 years experience in medical
        </p>
      </div>
      <div className="staff-team1">
        <Image
          
          src={female2}
          alt=""
          width={208}
          height={200}
          style={{
            borderRadius: "200px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          className="staff-image"
        />
        <h3 className="staff-names">Gerlad Justin</h3>
        <p className="staff-role">
          Nurse with 5 years experience
        </p>
      </div>
    </div>
  </section>
  </>)
}