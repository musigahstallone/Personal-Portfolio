import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiMysql, SiPostgresql, SiMicrosoftazure, SiGithub } from "react-icons/si";

import { DiGit, DiGithub } from "react-icons/di";
import { ImFontSize } from "react-icons/im";

function Toolstack() {
  return (<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiPostgresql />
      <h6>Postgresql</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
      <h6>VS Code</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
      <h6>Mysql</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftazure />
      <h6>Azure Cloud</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      <h6>Git</h6>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
      <h6>Github</h6>
    </Col>
  </Row>
  );
}

export default Toolstack;
