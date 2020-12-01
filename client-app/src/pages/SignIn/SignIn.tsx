import React from "react";
import { Link, useHistory } from "react-router-dom";
import UserApi from "../../apis/user.api";
import useDebounce from "../../hooks/useDebounce";
import "./styles.css";

const SignIn: React.FC = () => {
    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [error, setError] = React.useState<String>("");
    const debouncedUsername = useDebounce<string>(username, 100);
    const debouncedPassword = useDebounce<string>(password, 100);
    const history = useHistory()
    React.useEffect(() => {
        //toddo
    }, [debouncedUsername, debouncedPassword]);

    const handleChangUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await UserApi.signIn(debouncedUsername, debouncedPassword).then(res => {
            if (res) {
                window.sessionStorage.setItem('@token', res.data.token)
                history.push("/")
            }
        }).catch(err => {
            console.log(err)
            setError(err)
        })

    }


    return (
        <div className="container" >
            <div className="wrapper">
                <form action="post" onSubmit={submit}>
                    <div className="wrapper-input">
                        <input type="text" value={username} onChange={handleChangUserName} placeholder="Nhập tài khoản..." />
                    </div>
                    <div className="wrapper-input">
                        <input type="password" value={password} onChange={handleChangePassword} placeholder="Nhập mật khẩu..." />
                    </div>
                    {error && (
                        <div className="mb-3 text-danger text-xl-center">{error}</div>
                    )}
                    <div className="wrapper-button">
                        <button>Đăng nhập</button>
                    </div>
                    <div className="wrapper-link">
                        <Link to="/">Quên mật khẩu</Link>
                    </div>
                    <div className="wrapper-button">
                        <button style={{ backgroundColor: 'green' }}>Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignIn;