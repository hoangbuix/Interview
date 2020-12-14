import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const SignIn: React.FC = () => {
    return (
        <div className="container-signin">
            <div className="wrapper-signin">
                <div>
                    <h4 style={{ textAlign: 'center' }}>Dang nhap</h4>
                </div>
                <div className="wrapper-input">
                    <input type="text" placeholder="Nhap tai khoan" />
                </div>
                <div className="wrapper-input">
                    <input type="password" placeholder="Nhap mat khau" />
                </div>
                <div className="wrapper-button">
                    <button style={{ backgroundColor: 'red' }}>Dang nhap</button>
                </div>
                <div className="wrapper-link">
                    <Link to="">Quen mk</Link>
                </div>
                <div className="wrapper-button">
                    <button>Dang ky</button>
                </div>
            </div>
        </div>
    )
};

export default SignIn;