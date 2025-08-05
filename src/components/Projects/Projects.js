import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import blog from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";

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
              title="CrimeNet - Community Crime Collaboration"
              description={
                `• Architected a full-stack crime-solving platform allowing NGOs and organizations to publish unsolved cases and enabling a network of 100+ verified citizen users to collaboratively investigate and contribute.\n
• Designed a badge-based contribution system across 50+ cases to recognize high-impact inputs and encourage consistent community participation.\n
• Built a secure investigator hiring module with RBAC, featuring a contributor rating system and access to 50+ case histories to promote trust and transparency.\n
• Implemented secure, real-time chat rooms using WebSockets, supporting over 50 concurrent users per case and ensuring sub-200ms message delivery latency.\n
• Developed a high-availability backend infrastructure with Spring Boot and PostgreSQL, securing 50+ endpoints with JWT to handle 1000+ API calls per minute.`
              }
              ghLink="https://github.com/darpan2004/CrimeNet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="PeerLink - Secure Peer Sharing"
              description={
                `• Engineered a high-performance P2P file sharing backend in Java, supporting up to 10 simultaneous secure sessions via invite-code authentication and multithreaded architecture.\n
• Designed a decoupled, multi-layered system that managed socket communication and file transfers up to 1GB, optimizing data chunking to improve transfer speeds by 25%.\n
• Containerized the service using Docker and exposed 12 lightweight REST-like endpoints, reducing deployment time by 60% and simplifying frontend integration.`
              }
              ghLink="https://github.com/darpan2004/PeerLink"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MapIt - Location Based Reminder App"
              description="Flutter-based app for geo-tagged reminders with Google Maps API, Firebase Auth, and MongoDB for real-time data sync. Includes context-aware notifications and location autocomplete."
              ghLink="https://github.com/darpan2004/MapIt"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
