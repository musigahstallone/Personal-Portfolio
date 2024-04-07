import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myavatar from '../../Assets/myavatar.png'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! 👋 I'm a <b className="purple"> passionate developer </b>on a mission to transform ideas into extraordinary software experiences.
              With a toolbox filled with the <b className="purple">.NET framework </b>and the magical touch of <b className="purple">C#</b>,
              I craft <b className="purple">stunning</b> and functional apps that resonate with users.
              <br />
              <br />I am good in programming languages such as
              <i>
                <b className="purple"> C#, SQL, </b> and some bit of <b className="purple"> Python. </b>
              </i>
              <br />
              <br />
              I Love creating Websites, iOS and Android mobile apps field and I,ve also ventured into creating functional  desktop apps;
              <br/>
              <br/>
              I use the .NET Framework mostly to makes this apps and also open to trying new TechStacks.
              <br/>
              <br/>
              In that case I,ve also tried to venture into  React, NextJs, and Django Frameworks
              <br/>
              <br/>

              <div>
                {/* <b className="purple">  */}
                In Web Applications have also tried to integrate with Artificial Intelligence and Machine Learning
                {/* </b> */}
                 into my projects.
                also in areas related to{" "}
                {/* <b className="purple"> */}
                {/* </b> */}
              </div>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing software
              with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Next.Js, and React Native</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <Avatar
                avatarStyle='Transparent'
                topType='LongHairFro'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='ShirtScoopNeck'
                clotheColor='PastelOrange'
                eyeType='Happy'
                eyebrowType='Default'
                mouthType='Default'
                skinColor='DarkBrown'
              /> */}
              <img src={myavatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple"> connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/musigahstallone"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
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
                  href="https://www.linkedin.com/in/stallone-odhiambo-2b2644224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/stallone-odhiambo-2b2644224/"
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
