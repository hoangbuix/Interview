import React from "react";
import Header from "../../layouts/Header";
import "./styles.scss";

const Card = () => {
    return (
        <div>
            <h3>A</h3>
            <div>
                <h3>A</h3>
                <h3>B</h3>
            </div>
        </div>
    )
}

const Home: React.FC = () => {
    return (
        <div className="container-home">
            <div className="wrapper-home">
                <div className="header-home">
                    <Header />
                </div>
                <main>
                    <div className="wrapper-main">
                        <div className="main-left">
                            <Card />
                        </div>
                        <div className="main-right">
                            <div className="main-right-wrapper">
                                <div>A</div>
                                <div>B</div>
                                <div className="footer-wrapper">
                                    <footer>
                                        © {new Date().getFullYear()} by AKF
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};
export default Home;