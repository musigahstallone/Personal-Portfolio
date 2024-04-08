import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiCss3, DiPostgresql } from "react-icons/di";
import { SiCsharp, SiDotnet, SiHtml5, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <h6>Dotnet</h6>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <h6>Csharp</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <h6>Postgresql</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
        <h6>Css3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h6>Html5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h6>NextJS</h6>
      </Col>

    </Row>
  );
}

export default Techstack;
