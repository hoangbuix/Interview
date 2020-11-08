import React from "react";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import "./Dashboard.scss";


const Dashboard: React.FC = () => {
    return (
        <div className="container-dashboard">
            <div className="wrapper-dashboard">
                <div className="top-dashboard">
                    <Navbar/>
                </div>
                <div className="main-dashboard">
                    <div className="main-dashboard-content">
                        <Sidebar />
                    </div>
                </div>
                <div className="button-dashboard">
                   <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;