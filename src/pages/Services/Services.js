import TopHeader  from "../../Header/topHeader-bar/topHeader";
import {Container, Row, Col} from 'react-bootstrap';
import './Services.css';


function Services()
{

    const serviceCardObject = [
        {
            "serviceTitle" :"UI & UX",
            "serviceInfo":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            "serviceTitle" :"Web Desgining",
            "serviceInfo":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            "serviceTitle" :"Web Development",
            "serviceInfo":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            "serviceTitle" :"Angular Development",
            "serviceInfo":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            "serviceTitle" :"UI & UX",
            "serviceInfo":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            "serviceTitle" :"UI & UX",
            "serviceInfo":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        }
    ]
    return(
        <>
        <TopHeader/>
        <div className="service-page">
            <div className="section-wrapper">
                <Container>
            <h2 className='about-title'>Service</h2>
            <p className='about-title-paragraph'>My Services</p>
                <div className="service-card-wrapper">
                    <Row>
                       {
                        serviceCardObject.map((card)=>
                            <Col lg={4} className="my-3">
                                <div className="service-card">
                                <p className="service-title">{card.serviceTitle}</p>
                                <p className="service-info">{card.serviceInfo}</p>
                            </div>
                            </Col>
                        )
                       }
                    </Row>
                </div>
                </Container>
            </div>
        </div>
        </>
    );
}


export default Services