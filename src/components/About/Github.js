import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="cyan-color">Code</strong>
      </h1>
      <GitHubCalendar
        showWeekdayLabels
        hideColorLegend
        username="musigahstallone"
        blockSize={10}
        blockMargin={5}
        color="#46e2e2"
        fontSize={18}
      />
    </Row>
  );
}

export default Github;
