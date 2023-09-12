import TopHeader from "../../Header/topHeader-bar/topHeader";
import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css";
import { motion } from "framer-motion";
import SkillSection from "../About/Details/skillSection/skillSection";

function Resume() {
  return (
    <motion.div>
      <>
        <TopHeader />
        <div className="section-wrapper">
          <Container>
            <h2 className="about-title">RESUME</h2>
            <p className="about-title-paragraph">CHECK MY RESUME</p>
            <div className="resume-wrapper">
              <Row>
                <Col lg={6}>
                  <h3 className="resume-title py-3">Summary</h3>
                  <div className="resume-item">
                    <p className="resume-first-title">Aman Roy</p>
                    <p>
                      <em>
                        Front-end developer with 1.5 years of experience in
                        building and maintaining high-quality user interfaces
                        for web applications. Proven ability to use HTML, CSS,
                        and JavaScript to create responsive and visually
                        appealing designs. Expertise in using Angular to build
                        complex and dynamic web applications. Strong
                        problem-solving and debugging skills. Ability to work
                        independently and as part of a team.
                      </em>
                    </p>
                    <ul className="resume-item-list pl-1">
                      <li className="resume-list-items pb-2">
                        Ludhiana, Punjab
                      </li>
                      <li className="resume-list-items  pb-2">
                        +91 77197-39456
                      </li>
                      <li className=" resume-list-items pb-2">
                        roya5846@gmail.com
                      </li>
                    </ul>
                  </div>
                  <h3 className="resume-title py-3">Education</h3>
                  <div className="resume-item">
                    <p className="resume-first-title">
                      bachelor of computer application
                    </p>
                    <div className="year-tag">2017-2020</div>
                    <p>
                      <em>S.C.D Government College, Ludhiana</em>
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <h3 className="resume-title py-3">Professional Experience</h3>
                  <div className="resume-item">
                    <p className="resume-first-title">
                      FrontEnd Developer (Angular)
                    </p>
                    <div className="year-tag">Feb 22 - Present</div>
                    <p>
                      <em>Sandvok Softwares</em>
                    </p>
                    <p>
                      At this respective position I have developed complex and
                      dynamic web application using HTML, CSS ,JavaScript and
                      Angular framework.
                    </p>
                    <ul className="resume-item-list pl-1">
                      <li className="resume-list-items pb-2">
                        Conducting analysis of website and application
                        requirements.
                      </li>
                      <li className="resume-list-items  pb-2">
                        Developing functionality based on client requirements.
                      </li>
                      <li className=" resume-list-items pb-2">
                        Speed and performance optimization of websites.
                      </li>
                      <li className=" resume-list-items pb-2">
                        Integrating Restful API in the application.
                      </li>
                      <li className=" resume-list-items pb-2">
                        Implementing cross browser compatibility.
                      </li>
                      {/* <li className=' resume-list-items pb-2'>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="skill-progressbar-wrapper my-4">
                <SkillSection />
              </div>
            </div>
          </Container>
        </div>
      </>
    </motion.div>
  );
}

export default Resume;
