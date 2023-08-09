import React from "react";
import { Link } from "react-scroll";
import image from "./speccheck.png";
import image2 from "./GPTloop.png";
import image3 from "./memberportal.png";
import image4 from "./spectralcentroid.png";
// import Summary from "./Summary";
// import SummaryTwo from "./SummaryTwo";
import "./App.css";

function MyApps() {
  return (
    <div className="container">
      <h1
        style={{
          alignItems: "center",
          marginTop: "200px",
          fontSize: "80px",

        }}
      >
        David Curtin
      </h1>
      <h1
        style={{
          alignItems: "center",
          marginBottom: "200px",
          fontSize: "40px",
        }}
      >
        Chicago-based web developer and musician
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Link
          to="bottom"
          spy={true}
          smooth={true}
          duration={500}
          className="projects-button"
        >
          Projects <i className="arrow down"></i>
        </Link>
      </div>
      <div id="bottom"></div>
      <div
        className="tile is-ancestor"
        style={{ marginTop: "30px", marginBottom: "25px" }}
      >
        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box">
            <h1 style={{ marginBottom: "20px"}}>
              <a
                href="https://dcurtin91.github.io/member-portal"
                target="_blank"
                rel="noreferrer"
                className="apps"
              >
               CouchSurfing Network - Member Portal
              </a>
            </h1>
            {/* <div className="summary">
              *Work in Progress
            </div> */}
            <a
              href="https://dcurtin91.github.io/member-portal"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image3} alt="memberportal" />
            </a>
          </div>
          {/* <div class="tile is-child box">
                    <a href="/apps/spectralcentroid">Spectral Centroid</a>
                </div> */}
        </div>

        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box">
            <h1 style={{ marginBottom: "20px"}}>
              <a
                href="https://dcurtin91.github.io/spec-check-new/"
                target="_blank"
                rel="noreferrer"
                className="apps"
              >
                Spec Check
              </a>
            </h1>
            <div className="summary">
              *Calibrated for 2560 x 1600 display
            </div>
            <a
              href="https://dcurtin91.github.io/spec-check-new/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt="speccheck" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="tile is-ancestor"
        style={{ marginTop: "25px", marginBottom: "10px" }}
      >
        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box">
            <h1 style={{ marginBottom: "20px"}}>
              <a
                href="https://dcurtin91.github.io/gpt-loop/"
                target="_blank"
                rel="noreferrer"
                className="apps"
              >
                GPT Loop
              </a>
            </h1>
            {/* <div className="summary">
              <Summary />
            </div> */}
            <a
              href="https://dcurtin91.github.io/gpt-loop/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image2} alt="gptloop" />
            </a>
          </div>
          {/* <div class="tile is-child box">
                    <a href="http://dcurtin91.pythonanywhere.com/">Spectral Centroid</a>
                </div> */}
        </div>

        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box">
            <h1>
              <a
                href="http://dcurtin91.pythonanywhere.com/"
                target="_blank"
                rel="noreferrer"
                className="apps"
              >
                Spectral Centroid
              </a>
            </h1>
            <div className="summary">
              *Work in progress
            </div>
            <a
              href="http://dcurtin91.pythonanywhere.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image4} alt="speccheck" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApps;
