import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import { Player } from '@lottiefiles/react-lottie-player';
import images from '../../assets/images';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header-content">
                    <strong className="logo">
                        <Link className="logo-a" to='/' >
                            <img src={images.logo} alt="Deskillz Logo" className='logo-img' />
                        </Link>
                    </strong>

                    <Navbar expand="lg" data-bs-theme="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" >
                                    <Nav.Item>
                                        <NavLink className='nav-link' to="/">Home</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink className='nav-link' to="/explore">Developers</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink className='nav-link' to="/game-details">Players</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink className='nav-link' to="/dashboard">About Us</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink className='nav-link' to="/news">News</NavLink>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Player
                                            src={ require('../../assets/lottiePlayer/stack.json') }
                                            background="transparent" speed={1}
                                            style={{ width: "175px", height: "50px" }}
                                            loop autoplay>Stack
                                        </Player>
                                    </Nav.Item> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </Container>
        </header>
    )
}

export default Header;