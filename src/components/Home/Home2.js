import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,AiFillMail 
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
            I am a seasoned Java Full Stack Developer with a robust and diverse background in the software development industry. Over the past 8 years, I have honed my skills and expertise in crafting end-to-end solutions, leveraging the Java technology stack to deliver high-quality and scalable applications.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Spring Boot, Microservices, REST API, Hybernate, Kafka, MySQL, Jenkins. </b>
              </i>
              <br />
              <br />
               I am passionate about crafting innovative solutions using  &nbsp;
              <i>
                <b className="purple">Java technologies, specializing in the development of web-based applications and products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Digital Services.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Java, Spring Boot Microservices, Hybernate</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React</b>
              </i>
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
        href="mailto:sriram.alokam006@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        <AiFillMail />
      </a>
    </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sriramalokam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/sriram-006"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
