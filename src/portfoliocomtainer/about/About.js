import React from "react";
import Typical from "react-typical";
import "./About.css";
import imageOne from "./../../img/imgOneOfPortfolio.jpg";
import imageTwo from "./../../img/galleriaOne.jpg.png";
import imageThree from "./../../img/galleriaThree.png";
import imageFour from "./../../img/dneOne.png";
import imageFive from "./../../img/imgFourOfPortfolio.jpg";

export default function About() {
  return (
    <div className="aboutDiv container">
      <div>
        <span className="spanAboutMe">
          <div>
            {" "}
            <h4 className="sectionTittleOne">
              <Typical
                loop={Infinity}
                steps={[
                  "About",
                  3000,
                  "Front-end developer",
                  2000,
                  "Back-end",
                  1000,
                ]}
              />
              <hr className="hrAboutMe" />
              <p className="pAbout">
                {" "}
                Comunication between technologies the delvelopment of
                interactive applications{" "}
              </p>
            </h4>
          </div>
        </span>
        <div className="col-rightTwo">
          <h5 className="hfive">Introdoction to Framworks</h5>
          <p className="About-profileDivP">
           The Science of software program; 
           The studying of different software languages skills. 
           the development of new functional applications are a focus. 
           Learning about programming languages by studying for hours. 
           focusing on both the front as well as the backend technologies. 
           The increasing knowledge of modern technologies and 
           Communications are mesmerizing. 
           The studying of complement of computers systems as well 
           the design and analyzing and programing hardware and software. 
           the processing of information and creating artificial intelligence.
            <br />
            <a href="https://newgalleriaport.herokuapp.com/">
            <img className="imageOne"  
            src={imageOne} alt="code"></img>
            </a>
          <a className="aHrefAboutTwo" href=" https://newgalleriaport.herokuapp.com/">
            {" "}
            view projects
          </a>
          </p>

          <h5 className="hfive">Galleria applycatin project </h5>
          <p className="About-profileDivPTwo">
            The interaction between the visual view as a human and the science
            systems in the backend are the most unique Experiences. The Galleria
            project is a fully interactive applications using React,
            react/Native, vue,hyper,Javascript,HTML,css,Node as well as multiple
            functioning library. Opening with a Galleria of beautiful images
            taking by Using all the technologies that were collaborated to
            develop the Galleria application expended my intelligents.The many
            different times having to debug the code in the times having to
            call different functions concepts and rendering.
            <div>
            <a href="https://newgalleriaport.herokuapp.com/">
              <img className="imageTwo" src={imageTwo} alt="imageTwo"></img>
              </a>
              <br />
          <a className="aHrefAboutTwo" href="https://newgalleriaport.herokuapp.com/">
            {" "}
            view Galleria
          </a>
            <a href="https://github.com/NeldaNikolic">
              <img
                className="imageThree" src={imageThree} alt="imageThree"
              ></img>
              </a>
          <a className="aHrefAboutTwo" href="https://github.com/NeldaNikolic">
            {" "}
            view Dane's Eagles
          </a>
            </div>
          </p>

          <h5 className="hfive">DNE logistict fully function application</h5>
          <p className="About-profileDivP">
            The DNE logistics applications were a very enjoyable project to work
            on. Challenging my comprehension of multiple programming languages.
            Expanding my knowledge on the databases as a relational databases
            even Nosql databases including structuring information,As a form of
            classification of electronic information using the backend as well
            as the frontend.
            <div>
            <a href="http://www.dnelogistics.org">
              <img className="imageFour" src={imageFour} alt="imageFour"></img>
             </a>
          <a className="aHrefAboutTwo" href=" http://www.dnelogistics.org">
            {" "}
            view DNE app
          </a>
              <br />
              <a href="http://www.dnelogistics.org">
              <img className="imageFive" src={imageFive} alt="imageFive"></img>
              </a>
          <a className="aHrefAboutTwo" href=" http://www.dnelogistics.org">
            {" "}
            view DNE app
          </a>
            </div>
          </p>
        </div>
        <hr className="homeHrTwo" />
      </div>
    </div>
  );
}
