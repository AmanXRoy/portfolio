import TopHeader from "../../Header/topHeader-bar/topHeader";
import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
    initial={{ transform: "translateX(100%)", transitionProperty:"all" }}
    animate={{ transform: "translateX(0%)" }}
    exit={{ transform: "translateX(100%)"}}
    >
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
                        Innovative and deadline-driven Front End Developer with
                        1+ years of experience designing and developing
                        user-centered UI/Application marketing material from
                        initial concept to final, polished deliverable.
                      </em>
                    </p>
                    <ul className="resume-item-list pl-1">
                      <li className="resume-list-items pb-2">
                        Ludhiana, Punjab
                      </li>
                      <li className="resume-list-items  pb-2">
                        91 79868-16987
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
                      <em>Punjab University</em>
                    </p>
                    <p>
                      Quia nobis sequi est occaecati aut. Repudiandae et iusto
                      quae reiciendis et quis Eius vel ratione eius unde vitae
                      rerum voluptates asperiores voluptatem Earum molestiae
                      consequatur neque etlon sader mart dila
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <h3 className="resume-title py-3">Professional Experience</h3>
                  <div className="resume-item">
                    <p className="resume-first-title">FrontEnd Developer</p>
                    <div className="year-tag">Feb 22 - Present</div>
                    <p>
                      <em>Sandvok Softwares</em>
                    </p>
                    <ul className="resume-item-list pl-1">
                      <li className="resume-list-items pb-2">
                        Lead in the design, development, and implementation of
                        the graphic, layout, and production communication
                        materials
                      </li>
                      <li className="resume-list-items  pb-2">
                        Delegate tasks to the 7 members of the design team and
                        provide counsel on all aspects of the project.
                      </li>
                      <li className=" resume-list-items pb-2">
                        Supervise the assessment of all graphic materials in
                        order to ensure quality and accuracy of the design
                      </li>
                      {/* <li className=' resume-list-items pb-2'>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    </motion.div>
  );
}

export default Resume;
