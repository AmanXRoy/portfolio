import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileImg from '../../../assests/images/profileImg.jpg';
import CounterCard from './counterCard/CounterCard';
import SkillSection  from './skillSection/skillSection';
import './Details.css'


function Details() {
    const detailsArray = [
        {
            "key": "Birthday:",
            "value": "1 Dec 2000",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        },
        {
            "key": "Website:",
            "value": "amanroy007.github.io",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        }, {
            "key": "Phone:",
            "value": "+91 77197-39456",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        }, {
            "key": "City:",
            "value": "Ludhiana (In)",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        }, {
            "key": "Age:",
            "value": "21",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        }, {
            "key": "Degree:",
            "value": "Bachelor's",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        }, {
            "key": "Email:",
            "value": "roya5846@gmail.com",
            "icon": "fa-sharp fa-solid fa-chevron-right me-2"
        }
    ];


    return (
        <div className="details-parent-wrapper">
            <Row>
                <Col lg={4} className="image-wrapper">
                    <img src={ProfileImg} alt="" className='img-fluid' />
                </Col>
                <Col lg={8} className="details-wrapper">
                    <h3 className='designation-detail'>FED(Front End Developer)</h3>
                    <p className='my-information'>Innovative and deadline-driven Web Developer/Designer with 2 years of experience designing and developing user-centered websites from initial concept to final, polished deliverable.</p>
                    <div className="skills-row">
                        <Row>
                            <Col lg={6}>
                                <ul className='ps-0'>
                                    {
                                        detailsArray.map((object) => {
                                           return <li className='mb-4'>
                                                <i className={object.icon}></i>
                                                <strong className='me-3'>{object.key}</strong>
                                                <span>{object.value}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                        <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    </div>
                </Col>

            </Row>
            <div className="counter-cards-wrapper py-4 my-4">
                {/* <CounterCard /> */}
            </div>

            <div className="skill-progressbar-wrapper">
                <SkillSection/>
            </div>
        </div>
    );
}

export default Details;