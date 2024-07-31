import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

/**
 *
 * 
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of component.
 * @param {String} itemTitle - Title of the item.
 * @param {String} itemSubtitle - Subtitle of the item.
 * @param {String} itemLink - A link for the item.
 *
 */

export default function WorkDesktop() {
  const [texts] = useState({
    title: `<strong>Work,</strong> my previous projects.`,
    subtitle: "Here are the projects that i have worked on before.",
  });
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        
        end: () => "+=" + 1080 * panels.current.length,
      },
    });
  }, []);

  return (
    <>
      <>
        <div className="container" ref={panelsContainer}>
          <div
            className="description panel"
            ref={(e) => createPanelsRefs(e, 0)}
          >
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: texts.title }}></h1>
              <p>{texts.subtitle}</p>
              <div className="scroll-down">
                Scroll down<div className="arrow"></div>
              </div>
            </div>
          </div>
          <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
            <div className="content">
              <h1
                style={{
                  width: "clamp(32vw, 32vw, 991.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Volunteer Dental Appointment System</strong> Bachelore's Thesis`,
                }}
              ></h1>
              <p
                style={{
                  width: "clamp(32vw, 32vw, 890.43px)",
                  textAlign: "left",
                }}
              >
                Created a web-based platform to simplify appointment scheduling and gather feedback for volunteer dentists. 
                Through comprehensive literature reviews, I explored existing appointment systems and technological advancements. 
                My work led to improved patient satisfaction and extended charitable services to remote regions.
              </p>

            </div>
            <img src="/work/VDAS.png" alt="VDAS" />
          </section>
          <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
            <div className="content">
              <h1
                style={{
                  width: "clamp(32vw, 32vw, 991.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Nura Online Bank</strong> Website`,
                }}
              ></h1>
              <p
                style={{
                  width: "clamp(32vw, 32vw, 890.43px)",
                  textAlign: "left",
                }}
              >
                Developed a real-time transaction processing system that ensures immediate updates to account balances. 
                Additionally, designed features to display transaction history, created analytical tools for monthly expense reviews, 
                and improved the user experience through intuitive UI/UX design principles.
              </p>
              <div className="">
                
              </div>
            </div>
            <img src="/work/nura.png" alt="Metavest App" />
          </section>
          <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
            <div className="content">
              <h1
                style={{
                  width: "clamp(32vw, 32vw, 991.92px)",
                  textAlign: "left",color: "white"
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Facial Recognition</strong> System`,
                }}
              ></h1>
              <p
                style={{
                  width: "clamp(32vw, 32vw, 890.43px)",
                  textAlign: "left",color: "white"
                }}
              >
                developed a real-time facial recognition system to record employee attendance using computer vision models, resulting in a 30% accuracy improvement. 
                Additionally, I enhanced data reporting by organizing and cleaning the database, 
                leading to more accurate monthly reports.
              </p>
              
            </div>
            <img style={{}} src="/work/FRS.png" alt="FRS" />
          </section>
          <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
            <div className="content">
              <h1
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Weather & Flight Delay Prediction</strong> Dashboard`,
                }}
              ></h1>
              <p
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
              >
                In my weather prediction project, ML was used to enhance the accuracy of weather forecasting models. 
                By identifying patterns in historical weather data, my ML models predicted weather events 
                with remarkable precision. Leveraging Microsoft Power BI, 
                I created interactive dashboards to showcase weather trends. 
                Similarly, in the flight delay prediction project, 
                by leveraging historical flight data and relevant features, ML algorithms enabled accurate predictions. 
              </p>
              
            </div>
            <div
              style={{ paddingLeft: "50px", alignItems: "space-around" }}
              className="content"
            >
              <h1
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Discount Warehouse Simulation</strong> System`,
                }}
              ></h1>
              <p
                style={{
                  color: "#2d3436",
                  width: "clamp(36vw, 36vw, 1100.92px)",
                  textAlign: "left",
                }}
              >
                implemented a discrete event simulation for a discount warehouse using exponential 
                and normal distributions to model customer interarrival and service times, respectively. 
                The simulation generated a detailed table tracking customer arrivals, wait times, service durations, 
                and server idle times. Key performance metrics, such as average waiting time, probability of waiting, 
                server idle time fraction, average service time, and total time in the warehouse, were calculated and 
                displayed. The number of customers can vary based on input, allowing for flexible analysis
                             </p>
              
            </div>
          </section>
          <section className="panel gray" ref={(e) => createPanelsRefs(e, 5)}>
            <div className="links">
              <h1
                style={{ color: "#00FFFF" }}
                dangerouslySetInnerHTML={{
                  __html: `<strong>Find Me,</strong> In these Links`,
                }}
              ></h1>
              <div className="box2">
                <a href="https://github.com/Zeinab-sattarian">
                  <button>
                    <span>Github </span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/zaynabsattarian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <button>
                    <span>LinkedIn </span>
                  </button>
                </a>
                <a href="https://t.me/Zedvm">
                  <button>
                    <span>Telegram </span>
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          width: 600%;
          height: 100vh;
          display: flex;
          flex-wrap: nowrap;
        }

        .panel.align-top {
          align-items: flex-start;
        }

        .panel h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
        }

        .panel p {
          color: #2d3436;
          line-height: 128%;
        }
        .panel.description {
          padding-bottom: 60px;
        }

        .panel li {
          color: black;
          font-weight: 400;
          text-align: left;
          font-size: 0.8em;
          line-height: 1.5em;
          margin: 0.3em 0 1em 0;
        }
        .panel li strong {
          color: white;
          font-weight: 400;
        }
        .panel p code,
        .panel li code {
          background-color: rgba(255, 255, 255, 0.15);
          padding: 2px 4px;
          border-radius: 5px;
        }
        .panel li {
          margin: 0;
        }
        .gray {
          background-color: #2d3436;
        }

        .gray p {
          color: #2d3436;
        }

        .orange {
          background-color: #8cedfe;
        }

        .red {
          background-color: #FFC9CD;
        }

        .purple {
          background-image: url("/work/dots.jpg");
        }
        .green {
          background-color: #28a92b;
          background-image: radial-gradient(
              circle at 46% 40%,
              rgba(228, 228, 228, 0.06) 0%,
              rgba(228, 228, 228, 0.06) 13%,
              transparent 13%,
              transparent 100%
            ),
            radial-gradient(
              circle at 11% 41%,
              rgba(198, 198, 198, 0.06) 0%,
              rgba(198, 198, 198, 0.06) 19%,
              transparent 19%,
              transparent 100%
            ),
            radial-gradient(
              circle at 52% 23%,
              rgba(14, 14, 14, 0.06) 0%,
              rgba(14, 14, 14, 0.06) 69%,
              transparent 69%,
              transparent 100%
            ),
            radial-gradient(
              circle at 13% 85%,
              rgba(148, 148, 148, 0.06) 0%,
              rgba(148, 148, 148, 0.06) 44%,
              transparent 44%,
              transparent 100%
            ),
            radial-gradient(
              circle at 57% 74%,
              rgba(232, 232, 232, 0.06) 0%,
              rgba(232, 232, 232, 0.06) 21%,
              transparent 21%,
              transparent 100%
            ),
            radial-gradient(
              circle at 59% 54%,
              rgba(39, 39, 39, 0.06) 0%,
              rgba(39, 39, 39, 0.06) 49%,
              transparent 49%,
              transparent 100%
            ),
            radial-gradient(
              circle at 98% 38%,
              rgba(157, 157, 157, 0.06) 0%,
              rgba(157, 157, 157, 0.06) 24%,
              transparent 24%,
              transparent 100%
            ),
            radial-gradient(
              circle at 8% 6%,
              rgba(60, 60, 60, 0.06) 0%,
              rgba(60, 60, 60, 0.06) 12%,
              transparent 12%,
              transparent 100%
            ),
            linear-gradient(90deg, #28a92b, #10a614);
        }

        html,
        body {
          margin: 0;
          height: 100%;
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
          font-family: "Signika Negative", sans-serif, Arial;
        }

        .panel {
          padding: 12.235vw 12.103vw 10.978vw;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          padding: 10px;
        }

        .panel content {
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .panel links {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .panel .links .action {
          padding: 1.19047vw 1.32275vw 1.32275vw 1.32275vw;
          box-sizing: border-box;
          border-radius: 0.92592vw;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 50%;
          background: #3d474a;
          margin: 0 auto;
        }

        .box {
          padding-top: 30px;
          width: clamp(32vw, 32vw, 890.43px);
          display: flex;
          flex-direction: row;
        }

        .box button {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 0.8em;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
          display: inline-block;
          border-radius: 4px;
          border: none;
          width: 10vw;
          height: 3vw;
          text-align: center;
          transition: all 0.5s;
          cursor: pointer;
          margin-right: 15px;
        }

        .box button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        .box button span:after {
          content: "►";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }

        .box button:hover span {
          padding-right: 25px;
        }

        .box button:hover span:after {
          opacity: 1;
          right: 0;
        }

        .box2 {
          padding-top: 30px;
        }

        .box2 button {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 0.8em;
          line-height: 122%;
          margin-bottom: 2.513vw;
          line-height: 115%;
          border-radius: 4px;
          border: none;
          width: 10vw;
          height: 3vw;
          text-align: center;
          transition: all 0.5s;
          cursor: pointer;
          margin-right: 15px;
          background-color: #00FFFF;
        }

        .box2 button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        .box2 button span:after {
          content: "►";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }

        .box2 button:hover span {
          padding-right: 25px;
        }

        .box2 button:hover span:after {
          opacity: 1;
          right: 0;
        }

        .panel img {
          object-fit: cover;
          width: 35%;
        }

        body {
          overflow-x: hidden;
          overflow-y: scroll;
        }

        h1,
        h2,
        p,
        li {
          max-width: 800px;
        }

        /* HEADER */
        header {
          position: fixed;
          top: 0px;
          left: 0px;
          padding: 6px 10px 10px 10px;
          border-bottom-right-radius: 26px;
          z-index: 100;
          background-color: rgba(0, 0, 0, 0.5);
        }

        /* HEADINGS */
        .header-section {
          padding: 0 15px;
          text-align: center;
          margin: 40vh auto 50vh;
        }

        /* SCROLL DOWN */
        .scroll-down {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translate(-50%, 0);
          color: black;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 16px;
          overflow: visible;
        }
        .scroll-down .arrow {
          position: relative;
          top: -4px;
          margin: 0 auto;
          width: 20px;
          height: 20px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
          background-size: contain;
        }
      `}</style>
    </>
  );
}
