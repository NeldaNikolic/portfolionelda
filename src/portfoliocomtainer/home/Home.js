import React from "react";
import "./Home.css";
import Typical from "react-typical";
import { GiComputing } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { FaFileCode } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

export default function Home() {
  return (
    <div className="Home-profile">
      <div className="Home-profileDiv">
        <div className="Home-profileDivTwo">
          <div className="Home-profileDivSpanOne">
            <span>
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "welcome",
                    1000,
                    "I am Nelda ",
                    1000,
                    "full stack developer",
                    1000,
                    "cross plafrom",
                    1000,
                    "specialize in react ",
                    1000,
                    1000,
                    "react Native dev ",
                    1000,
                  ]}
                />
                <hr />
              </h1>
              <div className="Home-profileDivSpan">
                <span className="Home-profileSpan">
                  Interacting between Machines, linking the front and the back
                  end.
                  <br />
                  Comunicating languages among servers are my Specialties.
                  <br />
                  As A results I deliver exceptional/fascinating fully develope
                  interactive Applications.
                  <br />
                  Using the programing languages HTML,CSS, NPM, Bootstrap,
                  Vue.js, Javasript,.
                  <br /> React, React Native, Databases realational Nosql and
                  cloud databases
                </span>
                <AiFillApi className="homeIconDiv" />
                <GiComputing className="homeIconDivTwo" />
                <GiComputing className="homeIconDivTwo" />
                <GiComputing className="homeIconDivTwo" />
                <GiComputing className="homeIconDivTwo" />
              </div>
            </span>
          </div>
          <div className="HomeDivButton">
          <a href="#portfolio">
            <button className="homeButton" >
              {" "}
              <GrPersonalComputer className="homeIconButton" />
              Projects
            </button>
            </a>
            <a href="Nelda Baptiste Portfolio.pdf" download="Nelda Baptiste Portfolio.pdf">
              <button className="homeButtonTwo" >
                <FaFileCode className="homeIconButtonTwo" />
                My Resume
              </button>
            </a>
          </div>
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />
          <GiComputing className="homeIcon" />

          <br />
        </div>
      </div>
      <hr className="homeHrTwo" />
    </div>
  );
}
