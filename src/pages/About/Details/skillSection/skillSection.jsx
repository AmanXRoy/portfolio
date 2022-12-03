import './skillSection.css';
import {Row,Col, ProgressBar} from 'react-bootstrap';

function skillSection()
{
    const skillObject = [
        {
            "skillName":"html",
            "skillPercentage":95
        },
        {
            "skillName":"css",
            "skillPercentage":90
        },
        {
            "skillName":"javascript",
            "skillPercentage":80
        },
        {
            "skillName":"bootstrap",
            "skillPercentage":100
        },
        {
            "skillName":"Angular & Typescript",
            "skillPercentage":80
        },
        {
            "skillName":"jquery",
            "skillPercentage":100
        },
        {
            "skillName":"photoshop",
            "skillPercentage":55
        },
        {
            "skillName":"React",
            "skillPercentage":50
        },

    ]
       

return(
    <div className="skill-bar-wrapper">
        <h2 className='about-title'>Skill</h2>
        <div className="row-wrapper">
            <Row>
                {
                    skillObject.map((skill)=><Col lg={6}>
                    <div className="skill my-2">
                        <span className='skill-name'>{skill.skillName}<span className='skill-percentage'>{skill.skillPercentage}%</span></span>
                        <ProgressBar now={skill.skillPercentage}/>
                    </div>
                </Col>)
                }
            </Row>
        </div>
    </div>
);
}

export default skillSection