import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="cyan-color"> Stallone Odhiambo </span>
            from <span className="cyan-color"> Nairobi, Kenya.</span>
            <br />I am currently doing an undergraduate degree in Bsc. Software Engineering at 
            The Cooperative University of Kenya
            <br />
            <br />
            Apart from coding, some of my hobbies include:
          </p>
          <ul className="my-activities">
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploration of animals
            </li>
          </ul>

          <p style={{ color: "var(--nice-color)" }}>
            "My Best Achievement is doing all that there is, that can be done"{" "}
          </p>
          <footer className="blockquote-footer">Stallone Musigah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
