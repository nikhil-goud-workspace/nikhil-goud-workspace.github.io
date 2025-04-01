import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Insurance Application"
              description="Developed a resilient web Insurance application to manage, generate personalized auto and health insurance quotes."
              ghLink="https://github.com/nikhilspyder/Insurance-App"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ECommerce Application"
              description="Designing SpringBoot app with high scalability, resiliency and reliable ecommerce application that can processorders with low latency and hosted on Google Cloud Platform."
              ghLink="https://github.com/nikhilspyder/ecommerce-application"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Snackbar Application"
              description="Web application development with features where users to place/view orders & access order history."
              ghLink="https://github.com/nikhilspyder/snackbar"             
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog and Recommendations Platform"
              description="A full-stack web application integrating AI-powered recommendations, real-time weather updates, and a dynamic blogging platform for personalized user experiences."
              ghLink="https://github.com/nikhilspyder/Blog-and-Recommendations-Platform"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
