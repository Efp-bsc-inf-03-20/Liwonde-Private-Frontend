import './Styles/faq.css'


export default function FAQ(){
    return (<><section id="asked-question">
    <div className="question-card">
      <h2 className="faq">Frequently Asked Question(FAQ)</h2>
      <br></br>
      <ul className="services">
        <li className="clicks">
          <a className="que">1. how do you pay at liwonde private hospital?</a>
          <div className="dropdown-menu">
            {/* <ul className="list"> */}
            <li className="ref">
              {" "}
              <div className="faq-card"></div>
            </li>
            {/* </ul> */}
          </div>
        </li>
      </ul>
      <ul className="services">
        <li className="clicks">
          <a className="que">2.Do they have medical schemes at liwonde private hospital?</a>
          <div className="dropdown-menu">
            {/* <ul className="list"> */}
            <li className="ref">
              {" "}
              <div className="faq-card"></div>
            </li>

            {/* </ul> */}
          </div>
        </li>
      </ul>
      <ul className="services">
        <li className="clicks">
          <a className="que">3. where is liwonde private hospital located?</a>
          <div className="dropdown-menu">
            {/* <ul className="list"> */}
            <li className="ref">
              {" "}
              <div className="faq-card"></div>
            </li>

            {/* </ul> */}
          </div>
        </li>
      </ul>
      <br></br>
      <h3 className="help-line">Help line</h3>
      <ul className="help-numbers">
        <li>0888597087</li>
        <li>0999940863</li>
      </ul>
    </div>
  </section></>)
}