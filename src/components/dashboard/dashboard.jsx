import DashboardLayout from "../../layouts/dashboardLayout";
import GlobalButton from "../globalButton/globalButton";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { PersonOutline, Call, Language, MoreVert, Android, Apple } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import videos from '../../assets/videos';
import images from "../../assets/images";
import './dashboard.css';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className="db-home">
                <div className="db-top-block">
                    <div className="left-part">
                        <h1 className="main-heading">Hi, Welcome</h1>
                        <span className="sm-line">Let’s build your game world</span>
                    </div>
                    <div className="right-part">
                        <Link className="view-link sm-line">View All Games</Link>
                        <GlobalButton type='red-btn' text='Add New Game' />
                    </div>
                </div>
                
                <section className="first-section">
                    <Row>
                        <Col lg={5}>
                            <div className="whats-new">
                                <div className="secondary-top-part">
                                    <h2 className="secondary-heading color-red">What's New</h2>
                                    <Link to='/' className="view-link">View All</Link>
                                </div>
                                <div className="video-div">
                                    <video controls>
                                        <source src={videos.dbVid} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="video-div">
                                    <video controls>
                                        <source src={videos.dbVid} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="white-card game-world-card">
                                    <h4 className="heading">Gamer World</h4>
                                    <div className="gw-row flex-space">
                                        <div className="left-part">
                                            <div className="icon-div">
                                                <PersonOutline sx={{ fontSize: 16 }} />
                                            </div>
                                            <span className="sm-line">Tristan Loram <span className="red-color">(Developer)</span></span>
                                        </div>
                                        <div className="right-part">
                                            <span className="sm-line">65% Complete</span>
                                        </div>
                                    </div>
                                    <div className="gw-row flex-space num-row">
                                        <div className="left-part">
                                            <div className="icon-div">
                                                <Call sx={{ fontSize: 16 }} className="red-color" />
                                            </div>
                                            <span className="sm-line red-color">14033453322</span>
                                        </div>
                                        <div className="left-part right-part">
                                            <div className="icon-div">
                                                <Language sx={{ fontSize: 16 }} className='globeIcon' />
                                            </div>
                                            <span className="sm-line">www.gamerworld.com</span>
                                        </div>
                                    </div>
                                    <div className="progress-bar-div">
                                        <LinearProgress variant="determinate" value={27} />
                                    </div>
                                    <div className="btn-div">
                                        <button type="button" className="btn">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="your-games">
                                <div className="secondary-top-part">
                                    <h3 className="secondary-heading">Your Games</h3>
                                </div>
                                <div className="your-games-cards">
                                    <div className="your-games-card">
                                        <div className="left-part">
                                            <div className="img-div">
                                                <div className="icon-parent">
                                                    <img src={images.dummy58} alt="Dummy Icon" />
                                                </div>
                                            </div>
                                            <div className="text-content">
                                                <span className="name">Gilpirano</span>
                                                <span className="last-updated">Last updated: 3/31/2022</span>
                                                <span className="in-progress">in-progress</span>
                                            </div>
                                        </div>
                                        <div className="right-part">
                                            <span className="top-line">
                                                Game ID <span className="id">20555</span>
                                            </span>
                                            <div className="icon-div">
                                                <MoreVert sx={{ fontSize: 40 }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="your-games-card">
                                        <div className="left-part">
                                            <div className="img-div">
                                                <div className="icon-parent">
                                                    <img src={images.dummy58} alt="Dummy Icon" />
                                                </div>
                                            </div>
                                            <div className="text-content">
                                                <span className="name">Gilpirano</span>
                                                <span className="last-updated">Last updated: 3/31/2022</span>
                                                <span className="in-progress">in-progress</span>
                                            </div>
                                        </div>
                                        <div className="right-part">
                                            <span className="top-line">
                                                Game ID <span className="id">20555</span>
                                            </span>
                                            <div className="icon-div">
                                                <MoreVert sx={{ fontSize: 40 }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="your-games-card">
                                        <div className="left-part">
                                            <div className="img-div">
                                                <div className="icon-parent">
                                                    <img src={images.dummy58} alt="Dummy Icon" />
                                                </div>
                                            </div>
                                            <div className="text-content">
                                                <span className="name">Gilpirano</span>
                                                <span className="last-updated">Last updated: 3/31/2022</span>
                                                <span className="in-progress">in-progress</span>
                                            </div>
                                        </div>
                                        <div className="right-part">
                                            <span className="top-line">
                                                Game ID <span className="id">20555</span>
                                            </span>
                                            <div className="icon-div">
                                                <MoreVert sx={{ fontSize: 40 }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="secondary-top-part extra-pd">
                                    <h4 className="secondary-heading">Add your Game</h4>
                                </div>
                                <div className="white-card add-game-card">
                                    <div className="left-part">
                                        <div className="img-div">
                                                <div className="img-parent">
                                                    <img src={images.dummy58} alt="Dummy" />
                                                </div>
                                            </div>
                                            <span className="sm-line">Upload Icon</span>
                                    </div>
                                    <form className="add-game-form">
                                        <div className="input-div">
                                            <input type="text" placeholder="Name" className="name-input" />
                                        </div>
                                        <div className="input-div">
                                            <textarea name="desc" id="desc" placeholder="Description" className="name-input desc-input" rows="3"></textarea>
                                        </div>
                                    </form>
                                    <div className="right-part">
                                        <span className="sm-line">Choose Platforms</span>
                                        <div className="icons">
                                            <div className="android-div">
                                                <Android />
                                            </div>
                                            <div className="apple-div">
                                                <Apple />
                                            </div>
                                        </div>
                                        <GlobalButton type='red-btn' text='Integrate' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;