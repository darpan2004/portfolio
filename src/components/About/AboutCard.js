import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Darpan Khatri </span>
            from <span className="purple"> Gwalior, India.</span>
            <br />
            I am currently in my final year at IIIT Gwalior.
            <br />
            I'm passionate about backend development, and have built multiple full-stack projects using Node.js, Spring Boot, and MongoDB. 
             I also explored Flutter for mobile app development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Darpan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
