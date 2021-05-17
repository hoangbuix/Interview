import React, { useEffect, useState } from "react";
import "./Login.style.scss";
import { FiArrowRight } from "react-icons/fi";


const Login = () => {
    const [active, setActive] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value.length > 0) {
            setPassword(e.target.value);
            setActive(true);
        } else {
            setPassword("");
            setActive(false);
        }
    }

    useEffect(() => {

    }, [active])


    const handle = () => {
        setLoading(true)
    }

    return (
        <div className="auth-wrapper wrapper-center">
            <div className="auth_container wrapper-box">
                <header>
                    <img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/156686482_2449197138559622_4158251696962406027_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sg59EiuRcwoAX93ZHfx&_nc_ht=scontent-hkt1-2.xx&oh=f7c4ccd7956b664750f9ea7e968ce25f&oe=60BC8B1F" alt="logo" />
                </header>
                <div className="auth-form">
                    <form onSubmit={handle}>
                        <div className="group--input">
                            <input type="text" placeholder="Tài khoản của bạn..." value={username} onChange={handleChangeUsername} />
                        </div>
                        <div className="group--input">
                            <input type="password" placeholder="Mật khẩu của bạn..."
                                value={password} onChange={handleChangePassword} />
                        </div>
                        <div className="group--button">
                            <button disabled>
                                <FiArrowRight />
                            </button>
                        </div>
                        <div className="group--checkbox">
                            <input type="checkbox" id="rePassword" value={1} checked={true} />
                            <label htmlFor="rePassword">Giữ đăng nhập !</label>
                        </div>
                        <div className="group--link">
                            <a href="/forgetPassword">Quên mật khẩu ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;