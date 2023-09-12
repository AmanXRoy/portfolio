import TopHeader from "../../Header/topHeader-bar/topHeader";
import "./Portfolio.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <>
      <motion.div
      >
        <TopHeader />
        <div className="section-wrapper">
          <Container>
            <h2 className="about-title">Portfolio</h2>
            <p className="about-title-paragraph">My Works</p>

            <h1 className="text-center fw-bold h-100 d-flex justify-content-center align-items-center">
              Coming Soon
            </h1>
          </Container>
        </div>
      </motion.div>
    </>
  );
}

export default Portfolio;
