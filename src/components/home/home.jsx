import Layout from "../../layout";
import { Container, Row, Col } from "react-bootstrap";
import GlobalButton from "../globalButton/globalButton";
import images from "../../assets/images";
import './home.css';

const Home = () => {
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
        </Layout>
    )
}

export default Home;