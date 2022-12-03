import './topHeader.css';
import Navbar from  '../NavBar/Navbar';
import {NavLink} from 'react-router-dom';
import {Container} from 'react-bootstrap';



function topHeader()
{
    return(
        <header className='top-header-wrapper'>
            <Container>
            <div className="top-header">
            <div className="header-logo">
                <NavLink to="/" className="header-nav-logo">Aman Roy</NavLink>
                </div>
                <div className="header-navbar-links">
                <Navbar></Navbar>
                </div>
            </div>
            </Container>
        </header>
    );
}

export default topHeader