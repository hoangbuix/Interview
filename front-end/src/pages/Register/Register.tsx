import React from "react";
import "./Register.style.scss";

const Register: React.FC = () => {
    return (
        <>
            <div className="wrapprer-register">
                <form action="">
                    <div className="form-group">
                        <input type="email" placeholder="Nhập email..." />
                    </div>
                </form>
            </div>
        </>
    )
};

export default Register;