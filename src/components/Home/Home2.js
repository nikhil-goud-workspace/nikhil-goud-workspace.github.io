import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              
              From the moment I wrote my first line of code, I was hooked. 
              Programming has become my playground, where I've mastered the classics like
              <i>
                <b className="purple"> Java, SpringBoot, React.js and AWS. </b>
              </i>
              <br />
              <br />
              I'm passionate about pushing the boundaries of what's possible in
              &nbsp;
              <i>
                <b className="purple">Web Technologies, Software Development </b> and
                exploring areas related to{" "}
                <b className="purple">
                  Cloud Technologies.
                </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing applications
              with <b className="purple">Node.js</b>, <b className="purple">GCP</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angular.js</b>
              </i>
              <br/>
              <br/>
              Whether it's crafting dynamic web applications or diving deep into the cloud, I'm always eager to create solutions that make a difference.
              <br/>
              <br/>
              Boasting with 4+ years of software expertise in above Tech stack. 
              I thrive in fast-paced environment, highly motivated and possess strong problem-solving skills. 
              My track record highlights attention to detail and strong communication skills, making me an ideal fit for a <b className="purple">Software Engineer/ Full Stack Developer role.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nikhilspyder"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/NikhilG250897"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nikhilgoudiit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nikhil._g/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
