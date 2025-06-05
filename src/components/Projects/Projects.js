import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png"; // Placeholder image
import blog from "../../Assets/Projects/blog.png";         // Placeholder image
import chatify from "../../Assets/Projects/chatify.png";   // Placeholder image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my impactful projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CollabAI - AI-Powered Collaborative Editor"
              description="A real-time collaborative editor built using Node.js and WebSockets, featuring LLM-powered text suggestions, smart auto-complete, and conflict-free multi-user editing. Backend powered by MongoDB and deployed on Google Cloud."
              ghLink="https://github.com/darpan2004/CollabAI-Docs" // Replace with actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="EduTrack - Course Management System"
              description="Spring Boot-based system for managing courses, authentication with JWT, MySQL for persistence, and REST APIs. Scaled for 1,000+ users with optimized performance (40% faster response times)."
              ghLink="https://github.com/darpan2004/Course--Management" // Replace with actual link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MapIt - Location Based Reminder App"
              description="Flutter-based app for geo-tagged reminders with Google Maps API, Firebase Auth, and MongoDB for real-time data sync. Includes context-aware notifications and location autocomplete."
              ghLink="https://github.com/darpan2004/MapIt" // Replace with actual link
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
