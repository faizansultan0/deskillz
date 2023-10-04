import Layout from "../../layouts/layout";
import { Container, Row, Col } from "react-bootstrap";
import GlobalButton from "../globalButton/globalButton";
import { Player } from "@lottiefiles/react-lottie-player";
import Slider from "react-slick";
import images from "../../assets/images";
import './home.css';

const Home = () => {
    let mbSliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true, 
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoPlay: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 1000
                }
            }
        ]
    }

    let comingSliderSettings = {
        slidesToShow: 3.4,
        slidesToScroll: 1,
        arrows: false, 
        dots: false,
        centerMode: false,
        infinite: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1.1,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <Layout>
            <section className="banner">
                <Container>
                    <div className="banner-content">
                        <Row>
                            <Col lg={6} xs={0}>
                                <div className="banner-imgs">
                                    <div className="img-1-div">
                                        <img src={images.bannerImg1} alt="Banner 1" className="img" />
                                    </div>
                                    <div className="img-2-div">
                                        <img src={images.bannerImg2} alt="Banner 2" className="img" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} >
                                <div className="right-content">
                                    <p className="best-para">Hands down the best</p>
                                    <h1 className="hero-heading">PLATFORM</h1>
                                    <p className="available-para">Available for game publishing, your game must be found</p>
                                    <div className="buttons">
                                        <GlobalButton to='/explore' text='Play Games' type='blue-btn' />
                                        <GlobalButton to='/explore' text='Create Game' type='red-btn' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="welcome-section">
                <Container>
                    <div className="content">
                        <Row>
                            <Col lg={7} >
                                <div className="left-content">
                                    <h2 className="heading">Welcome to Deskillz</h2>
                                    <p className="para">Deskillz is a platform which allows indie devs to integrate their existing games onto the platform ecosystem. The Deskillz platform helps developers build multi-million dollar franchises by enabling social competition in their games. Leveraging its patented technology, Deskillz hosts billions of casual esports tournaments for millions of mobile players worldwide, and distributes millions in prizes each month.</p>
                                    <div className="sm-cards">
                                        <div className="sm-card">
                                            <div className="icon-div">
                                                <img src={images.gameSMIcon1} alt="Honor" />
                                            </div>
                                            <span className="name">Honor</span>
                                        </div>
                                        <div className="sm-card">
                                            <div className="icon-div">
                                                <img src={images.gameSMIcon2} alt="Mission" />
                                            </div>
                                            <span className="name">Mission</span>
                                        </div>
                                        <div className="sm-card">
                                            <div className="icon-div">
                                                <img src={images.gameSMIcon3} alt="Productivity" />
                                            </div>
                                            <span className="name">Productivity</span>
                                        </div>
                                        <div className="sm-card">
                                            <div className="icon-div">
                                                <img src={images.gameSMIcon4} alt="Collaboration" />
                                            </div>
                                            <span className="name">Collaboration</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} >
                                <div className="right-part">
                                    <div className="right-content">
                                        <h3 className="heading-2">PAYMENTS IN BUSDS</h3>
                                        <p className="para-2">Using crypto busd to enter into a challenge that will be paid out in busd tokens</p>
                                        <GlobalButton type='transparent-btn' text='Join Great Platform' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <div className="devs-db-part">
                <section className="devs">
                    <Container>
                        <div className="content">
                            <h2 className="global-heading">Game Devs/Owners</h2>
                            <p className="global-para"><span className="color-red">The Future of sports is electronic,</span> Ready to level up your game?</p>
                        </div>
                        <div className="devs-cards">
                            <Row>
                                <Col lg={3} sm={6} >
                                    <div className="devs-card">
                                        <div className="top-part">
                                            <div className="border-element devs-1">
                                                <Player autoplay loop src={require('../../assets/lottiePlayer/devs1.json')} className="lt-p" />
                                            </div>
                                        </div>
                                        <span className="name">Simply Registration</span>
                                    </div>
                                </Col>
                                <Col lg={3} sm={6} >
                                    <div className="devs-card">
                                        <div className="top-part">
                                            <div className="border-element devs-2">
                                                <Player autoplay loop src={require('../../assets/lottiePlayer/devs2.json')} className="lt-p" />
                                            </div>
                                        </div>
                                        <span className="name">Download SDK for Unity, iOS and Android</span>
                                    </div>
                                </Col>
                                <Col lg={3} sm={6} >
                                    <div className="devs-card">
                                        <div className="top-part">
                                            <div className="border-element devs-3">
                                                <Player autoplay loop src={require('../../assets/lottiePlayer/devs3.json')} className="lt-p"/>
                                            </div>
                                        </div>
                                        <span className="name">Setup Your Mobile Game</span>
                                    </div>
                                </Col>
                                <Col lg={3} sm={6} >
                                    <div className="devs-card">
                                        <div className="top-part">
                                            <div className="border-element devs-4">
                                                <Player autoplay loop src={require('../../assets/lottiePlayer/devs4.json')} className="lt-p" />
                                            </div>
                                        </div>
                                        <span className="name">Claim the Profit</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className="db">
                    <Container>
                        <div className="content">
                            <h1 className="global-heading">Your Gaming Dashboard</h1>
                            <p className="global-para">Track the stats important to your games success with our powerful stats dashboard</p>
                            <div className="img-div">
                                <img src={ images.dbImg } alt="Dashboard" />
                            </div>
                        </div>
                    </Container>
                </section>
            </div>

            <section className="ready-section">
                <Container>
                    <div className="content">
                        <h1 className="global-heading">Ready for Play</h1>
                        <p className="global-para"><span className="color-red">No account registration require,</span> Connect your metamask wallet</p>

                        <div className="mb-cards">
                            <Slider {...mbSliderSettings}>
                                <div className="mb-card">
                                    <img src={images.mb1} alt="Mobile" />
                                </div>
                                <div className="mb-card">
                                    <img src={images.mb2} alt="Mobile" />
                                </div>
                                <div className="mb-card">
                                    <img src={images.mb1} alt="Mobile" />
                                </div>
                                <div className="mb-card">
                                    <img src={images.mb2} alt="Mobile" />
                                </div>
                                <div className="mb-card">
                                    <img src={images.mb1} alt="Mobile" />
                                </div>
                                <div className="mb-card">
                                    <img src={images.mb2} alt="Mobile" />
                                </div>
                            </Slider>
                        </div>

                        <div className="mode-cards">
                            <Row>
                                <Col md={{ span: 4, order: 1 }} >
                                    <div className="li-content">
                                        <h3 className="sm-heading">Play Mode</h3>
                                        <ul className="mode-ul">
                                            <li className="mode-li">Using crypto busd to enter into a challenge</li>
                                            <li className="mode-li">Player will be paid out in busd tokens</li>
                                            <li className="mode-li">In practice mode players can play the game for fun to understand the game play</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={{ span: 4, order: 2 }} xs={ {order: 'last'}}>
                                    <div className="center-content">
                                        <GlobalButton type='transparent-btn' text="Let's Play" />
                                    </div>
                                </Col>
                                <Col md={{ span: 4, order: 'last' }} xs={ {order: 2}} >
                                    <div className="li-content">
                                        <h3 className="sm-heading">Smart Contract</h3>
                                        <ul className="mode-ul">
                                            <li className="mode-li">Need smart contract to pay out players the winnings</li>
                                            <li className="mode-li">Refunds when a challenge is not fulfilled</li>
                                            <li className="mode-li">Allocate the loyalty points that can be claim as busd</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="loyalty-section">
                <Container>
                    <div className="content" id='loyalty-content'>
                        <Row>
                            <Col lg={8} >
                                <div className="left-part">
                                    <h3 className="general-heading">Loyalty Program</h3>
                                    <p className="sm-para">Etiam tincidunt vitae purus ac tempus. Ut tempor cursus velit at dignissim. Aenean efficitur arcu risus, ac interdum enim interdum non. Suspendisse ornare augue libero, vel lobortis libero pretium vitae.</p>
                                    <ul className="loyalty-ul">
                                        <li className="loyalty-li">Etiam ac nunc tempus, accumsan velit vitae, tristique nulla </li>
                                        <li className="loyalty-li">Integer vestibulum metus a massa tristique consectetur</li>
                                        <li className="loyalty-li">Sed et nisi id diam condimentum porttitor</li>
                                    </ul>
                                    <GlobalButton type='blue-btn' text='Let the Game Begin' />
                                </div>
                            </Col>
                            <Col lg={4} className='text-dark d-lg-block d-none'>
                                <div className="right-part">
                                    <div className="img-div">
                                        <img src={images.loyalty} alt="Loyalty" className="img" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="coming-section">
                <Container>
                    <h3 className="general-heading text-center">What’s Coming For You</h3>
                    <p className="sm-para text-center">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci</p>
                    <div className="coming-cards">
                        <Slider {...comingSliderSettings}>
                            <div className="coming-card-parent">
                                <div className="coming-card">
                                    <div className="img-div">
                                        <img src={images.coming1} alt="Coming" className="img" />
                                    </div>
                                    <h4 className="title">Big Buck Hunter: Marksman mobile game version exclusively on Deskillz’</h4>
                                    <span className="author">by Deskillz on Blog Posts</span>
                                    <p className="para">Play Mechanix, Creator of the Big Buck Hunter: Marksman Mobile Game, Recognized As The Year’s “Best In Class” Developer Honored for Creativity, Innovation, and Growth on Skillz’ Platform Recognizing the talents of its developer community that builds highly competitive game experiences for everyone. Recognizing the talents of its developer community that builds highly competitive game experiences for everyoneRecognizing</p>
                                </div>
                            </div>
                            <div className="coming-card-parent">
                                <div className="coming-card">
                                    <div className="img-div">
                                        <img src={images.coming2} alt="Coming" className="img" />
                                    </div>
                                    <h4 className="title">Big Buck Hunter: Marksman mobile game version exclusively on Deskillz’</h4>
                                    <span className="author">by Deskillz on Blog Posts</span>
                                    <p className="para">Play Mechanix, Creator of the Big Buck Hunter: Marksman Mobile Game, Recognized As The Year’s “Best In Class” Developer Honored for Creativity, Innovation, and Growth on Skillz’ Platform Recognizing the talents of its developer community that builds highly competitive game experiences for everyone</p>
                                </div>
                            </div>
                            <div className="coming-card-parent">
                                <div className="coming-card">
                                    <div className="img-div">
                                        <img src={images.coming1} alt="Coming" className="img" />
                                    </div>
                                    <h4 className="title">Big Buck Hunter: Marksman mobile game version exclusively on Deskillz’</h4>
                                    <span className="author">by Deskillz on Blog Posts</span>
                                    <p className="para">Play Mechanix, Creator of the Big Buck Hunter: Marksman Mobile Game, Recognized As The Year’s “Best In Class” Developer Honored for Creativity, Innovation, and Growth on Skillz’ Platform Recognizing the talents of its developer community that builds highly competitive game experiences for everyone</p>
                                </div>
                            </div>
                            <div className="coming-card-parent">
                                <div className="coming-card">
                                    <div className="img-div">
                                        <img src={images.coming2} alt="Coming" className="img" />
                                    </div>
                                    <h4 className="title">Big Buck Hunter: Marksman mobile game version exclusively on Deskillz’</h4>
                                    <span className="author">by Deskillz on Blog Posts</span>
                                    <p className="para">Play Mechanix, Creator of the Big Buck Hunter: Marksman Mobile Game, Recognized As The Year’s “Best In Class” Developer Honored for Creativity, Innovation, and Growth on Skillz’ Platform Recognizing the talents of its developer community that builds highly competitive game experiences for everyone</p>
                                </div>
                            </div>
                            <div className="coming-card-parent">
                                <div className="coming-card">
                                    <div className="img-div">
                                        <img src={images.coming1} alt="Coming" className="img" />
                                    </div>
                                    <h4 className="title">Big Buck Hunter: Marksman mobile game version exclusively on Deskillz’</h4>
                                    <span className="author">by Deskillz on Blog Posts</span>
                                    <p className="para">Play Mechanix, Creator of the Big Buck Hunter: Marksman Mobile Game, Recognized As The Year’s “Best In Class” Developer Honored for Creativity, Innovation, and Growth on Skillz’ Platform Recognizing the talents of its developer community that builds highly competitive game experiences for everyone</p>
                                </div>
                            </div>
                            <div className="coming-card-parent">
                                <div className="coming-card">
                                    <div className="img-div">
                                        <img src={images.coming2} alt="Coming" className="img" />
                                    </div>
                                    <h4 className="title">Big Buck Hunter: Marksman mobile game version exclusively on Deskillz’</h4>
                                    <span className="author">by Deskillz on Blog Posts</span>
                                    <p className="para">Play Mechanix, Creator of the Big Buck Hunter: Marksman Mobile Game, Recognized As The Year’s “Best In Class” Developer Honored for Creativity, Innovation, and Growth on Skillz’ Platform Recognizing the talents of its developer community that builds highly competitive game experiences for everyone</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default Home;