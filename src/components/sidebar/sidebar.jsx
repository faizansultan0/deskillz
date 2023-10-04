import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Dashboard, SportsEsports, Assignment } from '@mui/icons-material';
import GlobalButton from '../globalButton/globalButton';
import images from '../../assets/images';
import './sidebar.css';

const SideBar = () => {
    return (
        <div className='db-navbar-parent'>
        <strong className="db-logo">
            <Link to='/' className='a'>
                    <img src={images.dbLogo} alt="Deskillz Logo" className="img" />
            </Link>
        </strong>
            <div className="bottom-part">
                <Navbar expand="lg"data-bs-theme="dark" >
                    <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column" >
                            <Nav.Item>
                                <NavLink to="/dashboard" className='nav-link'>
                                    <Dashboard sx={{ fontSize: 26 }} />
                                    Dashboard
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/games" className='nav-link'>
                                    <SportsEsports sx={{ fontSize: 26 }} />
                                    Games
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className='nav-link'>
                                    <Assignment sx={{ fontSize: 26 }} />
                                    Statements
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className='nav-link'>
                                    <SportsEsports sx={{ fontSize: 26 }} />
                                    Documentation
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className='nav-link'>
                                    <SportsEsports sx={{ fontSize: 26 }} />
                                    Downloads
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className='nav-link'>
                                    <SportsEsports sx={{ fontSize: 26 }} />
                                    Support
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className='nav-link'>
                                    <SportsEsports sx={{ fontSize: 26 }} />
                                    Acount
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <GlobalButton type='blue-btn' text='Log Out' />
            </div>    
        </div>
    )
};

export default SideBar;