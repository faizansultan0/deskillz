import Slider from 'react-slick';
import Layout from '../../layout';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import GlobalButton from '../globalButton/globalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import images from '../../assets/images';
import './explore.css';

const Explore = () => {
    let featuredSliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1699,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2.3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1.9,
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
                    slidesToShow: 1.4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 0.8
                }
            }
        ]
    }
    return (
        <Layout>
            <div className="explore-page">
                <section className="featured-games">
                    <Container>
                        <div className="content">
                            <div className="top-part">
                                <h1 className="global-heading">Featured Games</h1>
                                <Link className='top-part-link'>Explore More</Link>
                            </div>
                            <div className="featured-cards">
                                <Slider {...featuredSliderSettings}>
                                    <div className="featured-card-parent">
                                        <div className="featured-card">
                                            <div className="img-div">
                                                <img src={ images.battleField } alt="Battle Field" />
                                            </div>
                                            <div className="right-part">
                                                <h3 className="title">BATTLEFIELD- 2042</h3>
                                                <span className="sm-line">Go for the Gold</span>
                                                <div className="bottom-part">
                                                    <GlobalButton type='blue-btn sm-btn' text='Play' />
                                                    <div className="links">
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faAndroid} />
                                                        </Link>
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faApple} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="featured-card-parent">
                                        <div className="featured-card">
                                            <div className="img-div">
                                                <img src={ images.chivalry } alt="Battle Field" />
                                            </div>
                                            <div className="right-part">
                                                <h3 className="title">CHIVALRY II</h3>
                                                <span className="sm-line">Online Medieval Warfare</span>
                                                <div className="bottom-part">
                                                    <GlobalButton type='blue-btn sm-btn' text='Play' />
                                                    <div className="links">
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faAndroid} />
                                                        </Link>
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faApple} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="featured-card-parent">
                                        <div className="featured-card">
                                            <div className="img-div">
                                                <img src={ images.battleField } alt="Battle Field" />
                                            </div>
                                            <div className="right-part">
                                                <h3 className="title">BATTLEFIELD- 2042</h3>
                                                <span className="sm-line">Go for the Gold</span>
                                                <div className="bottom-part">
                                                    <GlobalButton type='blue-btn sm-btn' text='Play' />
                                                    <div className="links">
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faAndroid} />
                                                        </Link>
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faApple} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="featured-card-parent">
                                        <div className="featured-card">
                                            <div className="img-div">
                                                <img src={ images.chivalry } alt="Battle Field" />
                                            </div>
                                            <div className="right-part">
                                                <h3 className="title">CHIVALRY II</h3>
                                                <span className="sm-line">Online Medieval Warfare</span>
                                                <div className="bottom-part">
                                                    <GlobalButton type='blue-btn sm-btn' text='Play' />
                                                    <div className="links">
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faAndroid} />
                                                        </Link>
                                                        <Link to='/' className='link'>
                                                            <FontAwesomeIcon icon={faApple} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default Explore;