import { Container, Row, Col } from "react-bootstrap";
import TopHeader from "../../Header/topHeader-bar/topHeader";
import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <motion.div>
      <TopHeader />
      <div className="section-wrapper">
        <Container>
          <h2 className="about-title">Contact</h2>
          <p className="about-title-paragraph">Contact Me</p>
          <div className="form-wrapper">
            <Row>
              <Col lg={6} className="px-0">
                <form className="contact-wrapper">
                  <h3 className="contact-title py-2">Write us</h3>

                  <div className="form-control-wrapper py-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="name-control form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-control-wrapper py-3">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="email-control form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-control-wrapper py-3">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="subject-control form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="form-control-wrapper py-3">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      className="message-control form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit my-3">
                    Send Message
                  </button>
                </form>
              </Col>

              <Col lg={6} className="px-0">
                <div className="contact-information-wrapper"></div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      </motion.div>
      
    </>
  );
}

export default Contact;
