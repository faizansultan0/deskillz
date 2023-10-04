import { Container } from "react-bootstrap";
import SideBar from "../components/sidebar/sidebar";
import './dashboardLayout.css';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard">
            <Container >
                <div className="dashboard-content">
                    <SideBar />
                    <main>
                        <div className="db-right-content-p">
                            <div className="db-right-content">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </Container>
        </div>
    )
}

export default DashboardLayout;