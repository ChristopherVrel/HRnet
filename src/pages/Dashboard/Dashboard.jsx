import "./Dashboard.css";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
    return (
        <div className="main-container dashboard">
            <Nav>
                <h1 className="page-title">Dashboard</h1>
            </Nav>

            <div className="main-content">
                <h1>Dashboard</h1>
            </div>
            
            <Footer />
        </div>
    );
}

export default Dashboard;