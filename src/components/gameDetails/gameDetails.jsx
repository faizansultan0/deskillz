import Layout from "../../layouts/layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import GlobalButton from '../globalButton/globalButton';
import images from "../../assets/images";
import Slider from "react-slick";
import { useState } from "react";
import './gameDetails.css';

const GameDetails = () => {
    const [showPhone, setPhone] = useState(true);
    const navigate = useNavigate();

    const phoneHandler = () => {
        setPhone(!showPhone);
    }

    var imagesSliderSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1.8
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.4
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <Layout>
            <div className="game-details-page">
                <section className="game-banner">
                    <Container>
                        <div className="content">
                            <Row>
                                <Col lg={7} >
                                    <div className="left-content">
                                        <Link className="back-link" onClick={()=> navigate(-1)}>
                                            <FontAwesomeIcon icon={faArrowLeftLong} />  Back
                                        </Link>

                                        <div className="game-icon-div">
                                            <img src={images.gameIcon} alt="Game Icon" className="game-icon" />
                                        </div>

                                        <h1 className="game-name">BATTLEFIELD- 2042</h1>
                                        <p className="game-description">Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. Sed sagittis et urna non efficitur. Nulla nec lacus tincidunt, rutrum arcu in, euismod diam. Donec neque tellus, congue sed velit sed, scelerisque scelerisque urna. Praesent mi sem, tincidunt eget facilisis in, pharetra et sapien.</p>

                                        <div className="d-btns">
                                            <a href="/" className="d-btn">
                                                <div className="d-icon-div">
                                                    <img src={images.playStoreIcon} alt="PlayStore Icon" className="d-icon" />
                                                </div>
                                                <div className="d-details">
                                                    <span className="sm-line">GET IT ON</span>
                                                    <span className="platform-name">Google Play</span>
                                                </div>
                                            </a>
                                            <a href="/" className="d-btn">
                                                <div className="d-icon-div">
                                                    <img src={images.appleStoreIcon} alt="PlayStore Icon" className="d-icon" />
                                                </div>
                                                <div className="d-details">
                                                    <span className="sm-line">Available on the</span>
                                                    <span className="platform-name">App Store</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} >
                                    <div className="right-part">
                                        <div className="a-cards">
                                            <button className="a-card" onClick={phoneHandler}>
                                                {showPhone ?
                                                    <img src={images.myPhone} alt="My Phone" /> :
                                                    <img src={images.myPhoneQR} alt="My Phone QR" />
                                                }
                                            </button>
                                            <div className="a-card">
                                                <img src={images.myComputer} alt="My Computer" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className="game-images">
                    <Container>
                        <Slider {...imagesSliderSettings}>
                            {
                                Object.keys(images.gameImages).map((key, index) => {
                                    let img = images.gameImages[key] 
                                    return (
                                        <div className="img-div" key={index}>
                                            <img src={img} alt={`Game Img ${index+1}`} className="img" />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </Container>
                </section>

                <section className="like-section">
                    <Container>
                        <div className="content">
                            <h2 className="heading">You May Also Like</h2>
                            <div className="like-cards">
                                <Row>
                                    <Col lg={3} sm={6} >
                                        <div className="like-card">
                                            <div className="img-div">
                                                <img src={images.like1} alt="Like" className="img" />
                                            </div>
                                            <h3 className="like-name">Care Keeper</h3>
                                            <span className="gold">Go for the Gold</span>
                                            <div className="bottom-part">
                                                <GlobalButton type='blue-btn' text='Play' to='/game-details' />
                                                <div className="icons">
                                                    <img src={images.androidIcon} alt="Android Store" className="android-icon" />
                                                    <Link to='/' className="apple-link" >
                                                        <FontAwesomeIcon icon={ faApple } className="apple-icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6} >
                                        <div className="like-card">
                                            <div className="img-div">
                                                <img src={images.like2} alt="Like" className="img" />
                                            </div>
                                            <h3 className="like-name">3 Fruit Combo</h3>
                                            <span className="gold">Go for the Gold</span>
                                            <div className="bottom-part">
                                                <GlobalButton type='blue-btn' text='Play' to='/game-details' />
                                                <div className="icons">
                                                    <img src={images.androidIcon} alt="Android Store" className="android-icon" />
                                                    <Link to='/' className="apple-link" >
                                                        <FontAwesomeIcon icon={ faApple } className="apple-icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6} >
                                        <div className="like-card">
                                            <div className="img-div">
                                                <img src={images.like3} alt="Like" className="img" />
                                            </div>
                                            <h3 className="like-name">Game of War</h3>
                                            <span className="gold">Go for the Gold</span>
                                            <div className="bottom-part">
                                                <GlobalButton type='blue-btn' text='Play' to='/game-details' />
                                                <div className="icons">
                                                    <img src={images.androidIcon} alt="Android Store" className="android-icon" />
                                                    <Link to='/' className="apple-link" >
                                                        <FontAwesomeIcon icon={ faApple } className="apple-icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6} >
                                        <div className="like-card">
                                            <div className="img-div">
                                                <img src={images.like4} alt="Like" className="img" />
                                            </div>
                                            <h3 className="like-name">Bingo (Minigame)</h3>
                                            <span className="gold">Go for the Gold</span>
                                            <div className="bottom-part">
                                                <GlobalButton type='blue-btn' text='Play' to='/game-details' />
                                                <div className="icons">
                                                    <img src={images.androidIcon} alt="Android Store" className="android-icon" />
                                                    <Link to='/' className="apple-link" >
                                                        <FontAwesomeIcon icon={ faApple } className="apple-icon" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default GameDetails;