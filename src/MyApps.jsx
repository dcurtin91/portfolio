import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function MyApps() {
  const [atBottom, setAtBottom] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" style={{ padding: "10px" }}>
      <h1 style={{ alignItems: "left", marginTop: "150px", fontSize: "50px" }}>
        David Curtin
      </h1>
      {/* <h1 style={{ alignItems: "left", fontSize: "40px", marginBottom: "10px" }}>
        Software Engineer and Musician
      </h1> */}
      <h1 style={{ alignItems: "left", marginBottom: "150px", fontSize: "40px" }}>
        Chicago, IL
      </h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px", marginBottom: "200px" }}>
        {/* <AbstractArt /> */}
        {!atBottom && (
          <Link
            to="bottom"
            spy={true}
            smooth={true}
            duration={500}
            className="projects-button"
          >
            <i className="arrow down"></i>
          </Link>
        )}
        {atBottom && (
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="projects-button"
          >
            <i className="arrow up"></i>
          </Link>
        )}
      </div>

      <div id="bottom"></div>

      <div className="about">
        <div className="tile is-ancestor" style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px", borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}}>
          <div className="tile is-6 is-parent">
            <div className="tile is-child box">
              <h1 className="headline">Projects</h1>
              <ul>
                <li>- <a href="https://github.com/dcurtin91/stock-market-summary" target="_blank" title="AI Powered Stock Market Summarizer">AI Powered Stock Market Summarizer</a></li>
                <li>- <a href="https://github.com/dcurtin91/couchsurf-network" target="_blank" title="CouchSurf Network - Member Portal">CouchSurf Network - Member Portal</a></li>
                <li>- <a href="https://github.com/dcurtin91/spec-check-new" target="_blank" title="Spec Check">Spec Check</a></li>
                <li>- <a href="https://github.com/dcurtin91/gpt-loop" target="_blank" title="GPT Loop">GPT Loop</a></li>
                <li>- <a href="https://dcurtin91.pythonanywhere.com/" target="_blank" title="Central Spectroid">Central Spectroid</a></li>
              </ul>
            </div>
          </div>

          <div className="tile is-6 is-parent">
            <div className="tile is-child box" style={{ display: "flex", flexDirection: "column", alignItems: "stretch"}}>
              <h1 className="headline">Tech Certifications</h1>
                <ul>
                  <li>- Harvard's CS50: Introduction to Computer Science - <a href="https://cs50.harvard.edu/certificates/d7060a35-0879-40a5-8ac1-31821e327e04" title="Harvard's CS50x" target="_blank">Certificate</a></li>
                  <li>- freeCodeCamp:</li>
                  <li className="fcc">Front End Development Libraries - <a href="https://www.freecodecamp.org/certification/dcurtin/front-end-development-libraries" title="Front End Cert" target="_blank">Certificate</a></li>
                  <li className="fcc">JavaScript Algorithms and Data Structures - <a href="https://www.freecodecamp.org/certification/dcurtin/javascript-algorithms-and-data-structures-v8" title="JS Algorithms Cert" target="_blank">Certificate</a></li>
                  <li className="fcc">Responsive Web Design - <a href="https://www.freecodecamp.org/certification/dcurtin/responsive-web-design" title="Web Design Cert" target="_blank">Certificate</a></li>
                </ul>
            </div>
          </div>
        </div>

        <div className="tile is-ancestor" style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
          <div className="tile is-6 is-parent">
            <div className="tile is-child box">
              <h1 className="headline">Work Experience</h1>
              <ul>
                <li>- Customer Success Engineer @ Opendate (2024 - Present)</li>
                <li>- Product Support @ WeWork (2023 - 2024)</li>
                <li>- Digital Events @ Mandolin Software (2021 - 2023)</li>
                <li>- Digital Events @ NoonChorus (2020 - 2021)</li>
              </ul>
              </div>
            </div>
            <div className="tile is-6 is-parent">
              <div className="tile is-child box">
                <h1 className="headline">More...</h1>
                <ul>
                  <li>- Send me an <a href="/contact">email</a></li>
                  <li>- Check out my <a href="/music">music</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default MyApps;
