import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter ,faTelegramPlane, faDiscord } from '@fortawesome/free-brands-svg-icons';
import images from '../../assets/images';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <Container>
                    <div className="footer-content">
                        <Row>
                            <Col lg={3} sm={6} >
                                <div className="col-content">
                                    <strong className="f-logo red-after-element">
                                        <Link to='/' className='f-logo-a' >
                                            <img src={ images.footerLogo } alt="Deskillz Logo 2" className='f-logo-img' />
                                        </Link>
                                    </strong>
                                    <p className="footer-para">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetu</p>
                                    <ul className="footer-links social-links">
                                        <li className="social-link-li insta-li">
                                            <Link className="social-link insta-icon-link">
                                                <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                                            </Link>
                                        </li>
                                        <li className="social-link-li twitter-li">
                                            <Link className="social-link twitter-icon-link">
                                                <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                                            </Link>
                                        </li>
                                        <li className="social-link-li discord-li">
                                            <Link className="social-link discord-icon-link">
                                                <FontAwesomeIcon icon={faDiscord} className='social-icon' />
                                            </Link>
                                        </li>
                                        <li className="social-link-li tele-li">
                                            <Link className="social-link tele-icon-link">
                                                <FontAwesomeIcon icon={faTelegramPlane} className='social-icon' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} >
                                <div className="col-content">
                                    <h2 className="footer-heading red-after-element">Developers</h2>
                                    <ul className="footer-links">
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Developer Console Login</Link>
                                        </li>
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Documentation</Link>
                                        </li>
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Support</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} >
                                <div className="col-content">
                                <h2 className="footer-heading red-after-element">Players</h2>
                                    <ul className="footer-links">
                                        <li className="footer-link-li">
                                            <Link to='/explore' className='footer-link'>Deskillz Games</Link>
                                        </li>
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Player FAQ</Link>
                                        </li>
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Player Support</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} >
                                <div className="col-content">
                                <h2 className="footer-heading red-after-element">Company</h2>
                                    <ul className="footer-links">
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>About Us</Link>
                                        </li>
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Contact Us</Link>
                                        </li>
                                        <li className="footer-link-li">
                                            <Link className='footer-link'>Legal</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <p className="bottom-para">
                        Copyright 2022 &copy; Deskillz | All Rights Reserved (Designed by ArhamSoft (Pvt) Ltd.)
                    </p>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;