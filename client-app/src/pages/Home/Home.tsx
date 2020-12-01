import React from "react";
import "./styles.css";
import Header from "../../layouts/Header/Header";
import CardView from "../../components/CardView/CardView";



const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="home-top">
                <Header />
            </div>
            <div className="home-main">
                <div className="home-main-left">
                    <div className="wrapper-home-main-left">
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                        <CardView />
                    </div>
                </div>
                <div className="home-main-right">
                    <div className="wrapper-main-right">
                        A
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;