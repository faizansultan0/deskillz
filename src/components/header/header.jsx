import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
// import StackPlayer from '../../assets/lottiePlayer/stack.json'
import images from '../../assets/images';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header-content">
                    <strong className="logo">
                        <Link className="logo-a">
                            <img src={images.logo} alt="Deskillz Logo" className='logo-img' />
                        </Link>
                    </strong>

                    <Navbar expand="lg" data-bs-theme="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Item>
                                        <Link className='nav-link' to="/">Home</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className='nav-link' to="/explore">Developers</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className='nav-link' to="/game-details">Players</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className='nav-link' to="#link">About Us</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className='nav-link' to="#link">News</Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Player
                                            src={ StackPlayer }
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