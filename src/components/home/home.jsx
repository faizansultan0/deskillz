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
        </Layout>
    )
}

export default Home;