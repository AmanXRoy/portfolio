import { NavLink} from 'react-router-dom';
import {useState} from 'react';
import './Navbar.css'

function Navbar() {

    let [responsiveBar, setResponse] = useState(false);

    
    function toggleBar()
    {
        responsiveBar = !responsiveBar;
        setResponse(responsiveBar);
    }
    return (
        <>
     
        <nav className={responsiveBar ? 'nav-bar active': 'nav-bar'}>
            <ul className="navbar-link-list ps-0 mb-0">
                <li className="navbar-link-items">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-links active' : 'navbar-links'}>Home</NavLink>
                </li>
                <li className="navbar-link-items">
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-links active' : 'navbar-links'}>About</NavLink>
                </li>
                <li className="navbar-link-items">
                    <NavLink to="/resume" className={({ isActive }) => isActive ? 'navbar-links active' : 'navbar-links'}>Resume</NavLink>
                </li>
                <li className="navbar-link-items">
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar-links active' : 'navbar-links'}>Services</NavLink>
                </li>
                <li className="navbar-link-items">
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'navbar-links active' : 'navbar-links'}>Portfolio</NavLink>
                </li>
                <li className="navbar-link-items">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-links active' : 'navbar-links'}>Contact</NavLink>
                </li>

            </ul>
        </nav>
        <i className=" hamburger-icon fa-sharp fa-solid fa-bars d-md-none" onClick={toggleBar}></i>
        </>
    );
}

export default Navbar
