import React from "react";
import { Link } from "react-scroll";
// import image from "./speccheck.png";
// import image2 from "./GPTloop.png";
// import image3 from "./memberportal.png";
// import image4 from "./spectralcentroid.png";
//import AbstractArt from "./AbstractArt.jsx";
//import "./App.css";

function MyApps() {
  return (
    <div className="container">
      <h1
        style={{
          alignItems: "left",
          marginTop: "150px",
          fontSize: "50px",

        }}
      >
        David Curtin
      </h1>
      <h1
        style={{
          alignItems: "left",
          fontSize: "40px",
          marginBottom: "10px"
        }}
      >
        Software Engineer and Musician
      </h1>
      <h1
        style={{
          alignItems: "left",
          marginBottom: "150px",
          fontSize: "30px",
        }}
      >
        Chicago, IL
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "120px"
        }}
      >
        {/* <AbstractArt /> */}
        <Link
          to="bottom"
          spy={true}
          smooth={true}
          duration={500}
          className="projects-button"
         
        >
         More About Me<i className="arrow down"></i>
        </Link>
      </div>
      <div id="bottom"></div>
      <div className="about">
        <h1 className="headline">Work Experience</h1>
        <ul>
          <li>- Product Support @ WeWork (2023 - Present)</li>
          <li>- Account Management @ Mandolin Software (2021 - 2023)</li>
          <li>- Digital Events @ NoonChorus (2020 - 2021)</li>
        </ul>
        
        <h1 className="headline">My Projects</h1>
        <ul>
          <li>- <a href="https://github.com/dcurtin91/stock-market-summary"
           target="_blank"
            title="AI Powered Stock Market Summarizer">
              AI Powered Stock Market Summarizer</a>
          </li>
          <li>- <a href="https://github.com/dcurtin91/couchsurf-network"
           target="_blank"
            title="CouchSurf Network - Member Portal">
              CouchSurf Network - Member Portal</a>
          </li>
          <li>- <a href="https://github.com/dcurtin91/spec-check-new"
           target="_blank"
            title="Spec Check">
              Spec Check</a>
          </li>
          <li>- <a href="https://github.com/dcurtin91/gpt-loop"
           target="_blank"
            title="GPT Loop">
              GPT Loop</a>
          </li>
          <li>- <a href="https://dcurtin91.pythonanywhere.com/"
           target="_blank"
            title="Central Spectroid">
              Central Spectroid</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default MyApps;
