import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiMysql, SiPostgresql, SiMicrosoftazure, SiGithub } from "react-icons/si";

import { DiGit, DiGithub } from "react-icons/di";

function Toolstack() {
  return (<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiPostgresql />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftazure />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
    </Col>
  </Row>
  );
}

export default Toolstack;
