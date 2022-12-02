import './CounterCard.css';
import {Row,Col} from 'react-bootstrap';


function CounterCard()
{

    return (
        <Row>
            <Col lg={3}>
            <div className="counter-card">
           <i className="fa-regular fa-face-smile"></i>
            <p className='counter-number mb-0'>909</p>
            <p className='counter-title'>Happy Clients</p>
        </div>
            </Col>
            <Col lg={3}>
            <div className="counter-card">
           <i className="fa-regular fa-face-smile"></i>
            <p className='counter-number mb-0'>521</p>
            <p className='counter-title'>Projects</p>
        </div>
            </Col>
            <Col lg={3}>
            <div className="counter-card">
           <i className="fa-regular fa-face-smile"></i>
            <p className='counter-number mb-0'>1463</p>
            <p className='counter-title'>Hours of Support</p>
        </div>
            </Col>
            <Col lg={3}>
            <div className="counter-card">
           <i className="fa-regular fa-face-smile"></i>
            <p className='counter-number mb-0'>24</p>
            <p className='counter-title'>Awards</p>
        </div>
            </Col>
        </Row>
        
    );
}

export default CounterCard