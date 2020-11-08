import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserApi from "../../apis/user.api";
// import Button from "../../components/Button";
import "./SignIn.scss";

const SignIn: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory()
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        UserApi.signIn(username, password).then((result) => {
            window.sessionStorage.setItem('@token', result.data.token);
            history.push("/")
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="container-signin">
            <div className="wrapper-signin">
                <form onSubmit={submit}>
                    <div className="wrapper-title">
                        <span>Đăng nhập</span>
                    </div>
                    <div className="wrapper-form">
                        <div className="wrapper-input">
                            <input type="text" name="username" onChange={handleUsername} placeholder="Nhập tài khoản ..." />
                        </div>
                        <div className="wrapper-input">
                            <input type="password" name="password" onChange={handlePassword} placeholder="Nhập mật khẩu ..." />
                        </div>
                        <div className="wrapper-button-signin">
                            <button>Đăng nhập</button>
                        </div>
                        <div className="wrapper-link">
                            <Link to="/">Quên mật khẩu?</Link>
                        </div>
                        <div className="wrapper-button-signup">
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignIn;