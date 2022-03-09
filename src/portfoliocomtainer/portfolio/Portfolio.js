import React from "react";
import Typical from "react-typical";
import "./Portfolio.css";
import { IoLogoJavascript } from "react-icons/io";
import { ImDatabase, ImCss3, ImHtmlFive2 } from "react-icons/im";
import { FaNode } from "react-icons/fa";
import { SiHyper } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

export default function Portfolio() {
  return (
    <div  id="portfolio"className="PortfolioMainDiv">
      <div>
        <span className="spanAboutMeThree">
          {" "}
          <h4 className="sectionTittle">
            <Typical
              loop={Infinity}
              steps={["Resume", 3000, "Timeline", 2000, "Developer", 1000]}
            />
            <hr className="hrAboutMe" />
            <p className="pAbout">
              {" "}
              Experiances knowleges of fully respondsive{" "}
            </p>
          </h4>
        </span>

        <div>
          <div className="timelineMainDiv">
            <div className="timelineAfterMainDiv">
              <div>
                <ul className="timelineUl">
                  <li className="timelineLi">
                    <div className="timelineDivTwo">
                      <h3>
                        Javasript Framworks <IoLogoJavascript className="homeIcon"/>
                      </h3>
                      <p>
                      JavaScript frameworks most preferable programing languages 
                      integrated as both the frontend as well as the backend 
                      cooperating with React/React/Native Vue,Node,css,HTML,hyper etc. 
                      JavaScript frameworks are an essential part of modern 
                      front-end web development. Building scalable interactive web 
                      app fundamental background knowledge.
                      </p>
                    </div>
                  </li>
                  <li className="timelineLi">
                    <div className="timelineDivTwo">
                      <h3>
                        React/React/Native librery <GrReactjs className="homeIcon"/>
                      </h3>
                      <p>
                        React framework and library are amazing interfaces for
                        building an amazing responsive user interface. React
                        performing as smooth as possible performing with
                        excellent user Experiences. React was created by Jordan
                        Walke for Facebook in 2011. Developers were fully
                        introduced to these framework work features later.
                        JavaScript skills and full understanding came to
                        affected.   
                      </p>
                    </div>
                  </li>
                  <li className="timelineLi">
                    <div className="timelineDivTwo">
                      <h3>
                        Databases Organization <ImDatabase className="homeIcon" />
                      </h3>
                      <p>
                        The Organization as well as the storing of information
                        The applicationsint system plays an important part in
                        building the structure of the applications. Databases
                        systems were used to shorten date collections depending
                        on the storage need for the application multiple styling
                        of databases. Relational Databases,Nosql Databases
                        cloud Databases are simply a few of my preferred
                        databases            
                      </p>
                    </div>
                  </li>
                  <li className="timelineLi">
                    <div className="timelineDivTwo">
                      <h3>
                        CSS/HTML/Node/Hyper/Vue.js
                        <br />
                        <ImCss3 className="homeIcon"/> 
                        <ImHtmlFive2 className="homeIcon" /> 
                        <FaNode className="homeIcon"/> <SiHyper className="homeIcon"/>{" "}
                      </h3>
                      <p>
                        Cascading styles sheet was created for the formation of
                        specific structure of relevant pages css bring out the
                        beauty of the application. Applying color theory and
                        more.HTML is use of a cross-platform as the application
                        content provider. Node environment called npm. The
                        package manager makes it easier for programmers to
                        publish. for the development of an application. Vue
                        focuses on the declaration rendering component.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="homeHrTwo" />
      </div>
    </div>
  );
}
