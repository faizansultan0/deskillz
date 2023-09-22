import Layout from "../../layout";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../assets/images";
import './home.css';

const Home = () => {
    return (
        <Layout>
            <section className="banner">
                <Container>
                    <div className="banner-content">
                        <Row>
                            <Col xl={7} lg={6} xs={0}>
                                <div className="banner-imgs">
                                    <div className="img-1-div">
                                        <img src={images.bannerImg1} alt="Banner 1" className="img" />
                                    </div>
                                    <div className="img-2-div">
                                        <img src={images.bannerImg2} alt="Banner 2" className="img" />
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