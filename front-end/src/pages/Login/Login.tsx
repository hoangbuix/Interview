import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATH } from "../../constains/paths";
import { login } from "../../reduxs/thunks/user-thunk";
import "./Login.style.scss";
import { FiArrowRight } from "react-icons/fi";


const mapStateToProps = (state: any) => ({
    users: state.user.users,
    isFetching: state.user.isFetching
})

const mapDispatchToProps = { login }

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }
const Login = (props: Props) => {
    const { login, isFetching } = props;
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setPassword(e.target.value);
        } else {
            setPassword("");
        }
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!isFetching) {
            const payload = { username, password }
            await login(payload)
                .then(res => {
                    history.push(PATH.HOME)
                })
                .catch(err => {
                    setError(err.payload.message)
                })
        }
    }
    return (
        <div className="auth-wrapper wrapper-center">
            {/* <ToastNotice /> */}
            <div className="auth_container wrapper-box">
                <header>
                    <img src="https://cs.lhu.edu.vn/ViewPage/LHUVNB4/_default/image/Logo_ChimLac_W.png" alt="logo" />
                </header>
                <div className="auth-form">
                    {error ? <span></span> : ''}
                    <form onSubmit={submit}>
                        <div className="group--input">
                            <input type="text" placeholder="Tài khoản của bạn..." value={username}
                                onChange={handleUsername} />
                        </div>
                        <div className="group--input">
                            <input type="password" placeholder="Mật khẩu của bạn..."
                                value={password} onChange={handlePassword} />
                        </div>
                        <div className="group--button">
                            <button type="submit">
                                <FiArrowRight />
                            </button>
                        </div>
                        <div className="group--checkbox">
                            {/* <input type="checkbox" />
                            <label htmlFor="rePassword">Giữ đăng nhập !</label> */}
                        </div>
                        <div className="group--link">
                            <a href="/">Quên mật khẩu ?</a> or <a href="/register">Tạo tài khoản?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default connector(Login);