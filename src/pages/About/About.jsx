import TopBar from "../../Header/topHeader-bar/topHeader";
import { Container } from "react-bootstrap";
import Details from "./Details/Details";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ transform: "translateX(100%)", transitionProperty:"all" }}
        animate={{ transform: "translateX(0%)" }}
        exit={{ transform: "translateX(100%)"}}
      >
      <TopBar />
        <div className="section-wrapper">
          <Container>
            <h2 className="about-title">About</h2>
            <p className="about-title-paragraph">LEARN MORE ABOUT ME</p>
            <div className="details-wrapper">
              <Details />
            </div>
          </Container>
        </div>
      </motion.div>
    </>
  );
}

export default About;
