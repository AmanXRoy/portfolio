import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileImg from "../../../assests/images/portfolioProfileImage.jpeg";
// import SkillSection from "./skillSection/skillSection";
import "./Details.css";

function Details() {
  const detailsArray = [
    {
      key: "Degree:",
      value: "Bachelor's of Computer App..",
      icon: "fa-sharp fa-solid fa-chevron-right me-2",
    },
    {
      key: "Age:",
      value: "21",
      icon: "fa-sharp fa-solid fa-chevron-right me-2",
    },
    {
      key: "City:",
      value: "Ludhiana (In)",
      icon: "fa-sharp fa-solid fa-chevron-right me-2",
    },
    {
      key: "Phone:",
      value: "+91 77197-39456",
      icon: "fa-sharp fa-solid fa-chevron-right me-2",
    },
    {
      key: "Email:",
      value: "roya5846@gmail.com",
      icon: "fa-sharp fa-solid fa-chevron-right me-2",
    }
  ];

  return (
    <div className="details-parent-wrapper">
      <Row>
        <Col lg={4} className="image-wrapper">
          <img src={ProfileImg} alt="" className="img-fluid" />
        </Col>
        <Col lg={8} className="details-wrapper">
          <h3 className="designation-detail">Frontend Developer</h3>
          <p className="my-information">
            Front-end developer with 1.5 years of experience in building and
            maintaining high-quality user interfaces for web applications.
            Proven ability to use HTML, CSS, and JavaScript to create responsive
            and visually appealing designs. Expertise in using Angular to build
            complex and dynamic web applications. Strong problem-solving and
            debugging skills. Ability to work independently and as part of a
            team.
          </p>
          <div className="skills-row">
            <Row>
              <Col lg={12}>
                <Row className="ps-0">
                  {detailsArray.map((object) => {
                    return (
                      <Col className="mb-4" lg={6}>
                        <i className={object.icon}></i>
                        <strong className="me-3">{object.key}</strong>
                        <span>{object.value}</span>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae, totam maiores debitis non eum animi beatae, tempore voluptatem optio illo, ea iure amet accusantium odio fugit voluptate reprehenderit quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae, totam maiores debitis non eum animi beatae, tempore voluptatem optio illo, ea iure amet accusantium odio fugit voluptate reprehenderit quia!
          </p>
        </Col>
      </Row>
      <div className="counter-cards-wrapper py-4 my-4">
        {/* <CounterCard /> */}
      </div>

      {/* <div className="skill-progressbar-wrapper my-4">
        <SkillSection />
      </div> */}
    </div>
  );
}

export default Details;
