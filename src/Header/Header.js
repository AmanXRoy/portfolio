import './Header.css';
import Navbar  from './NavBar/Navbar';
function Header(props)
{
   
return (
    <div className="header-container">
        <div className="intro-wrapper">
            <h1 className='person-name'>{props.name}</h1>
            <p className="person-summary">{props.summaryStart}<span className='person-role'>{props.role}</span> {props.summaryEnd}</p>
            <Navbar></Navbar>
            <div className="social-links-wrapper">
            <a href="#" className="social-link">
                <i className=" social-icon fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
                <i className=" social-icon fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
                <i className=" social-icon fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
                <i className=" social-icon fa-brands fa-linkedin"></i>
            </a>
        </div>
        </div>
    </div>
);
}

export default Header