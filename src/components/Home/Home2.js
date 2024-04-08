import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myavatar from '../../Assets/myavatar.png'
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
              LET ME <span className="cyan-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <span className="cyan-color">Hey there! 👋 ,,, </span>
              <br />
              <br />
              I'm a fervent developer on a quest to transform <span className="cyan-color">concepts</span> into remarkable <span className="cyan-color">software ventures.</span> 
              <br/>
              <br/>
              Armed with the robust <span className="cyan-color">.NET framework</span> and the enchanting <span className="cyan-color">prowess of C#,</span> 
              I meticulously craft captivating and utilitarian applications that deeply engage users. 
              My forte lies in languages like <span className="cyan-color">C#, SQL,</span> and my growing proficiency in <span className="cyan-color">Python.</span>
              <br />
              <br />
              My passion extends to crafting <span className="cyan-color">immersive experiences</span> across various platforms, 
              from <span className="cyan-color">dynamic websites</span> to sleek <span className="cyan-color">iOS and Android mobile applications. </span>
              <br />
              <br />
              Delving further, I've ventured into the realm of <span className="cyan-color">desktop applications,</span> harnessing the power of the <span className="cyan-color">.NET Framework</span> to bring ideas to <span className="cyan-color">life. </span>
              Always eager to explore <span className="cyan-color">new horizons,</span> I've dabbled in <span className="cyan-color">React, NextJs,</span> and even delved into <span className="cyan-color">Django frameworks,</span> enriching my skill set along the way.
              <br />
              <br />
              In the sphere of <span className="cyan-color">Web development,</span> I've seamlessly integrated <span className="cyan-color">Artificial Intelligence (AI)</span> and <span className="cyan-color">Machine Learning </span>into my projects, 
              striving to push boundaries and enhance user experiences. 
              <br />
              <br />
              <span className="cyan-color">Notably,</span> I've had the privilege of interacting with cutting-edge <span className="cyan-color">Google AI models</span> called <span className="cyan-color">Gemini </span> 
              further fueling my <span className="cyan-color">curiosity and innovation.</span>
              <br />
              <br />
              Whenever an <span className="cyan-color">opportunity arises,</span> I channel my enthusiasm for <span className="cyan-color">Software Development</span> 
              through modern JavaScript libraries  and frameworks such as 
              <span className="cyan-color"> React.js, Next.Js,</span> and <span className="cyan-color"> React Native,</span> enriching my toolkit and ensuring that every project 
              I undertake is a <span className="cyan-color">testament to innovation and excellence.</span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myavatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="cyan-color"> connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/stallone-odhiambo-2b2644224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.x.com/musigahstallone"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/am_stallone"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
