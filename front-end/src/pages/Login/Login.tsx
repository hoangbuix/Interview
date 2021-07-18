import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATH } from "../../constains/paths";
import { login } from "../../reduxs/thunks/user-thunk";



const mapStateToProps = (state: any) => ({
    users: state.user.users,
    isFetching: state.user.isFetching
})

const mapDispatchToProps = { login }

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }
const Login = (props: Props) => {
    const { login, isFetching } = props
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
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
        <div className="container">
            <form action="post" onSubmit={submit}>
                <input type="text" onChange={handleUsername} />
                <input type="password" onChange={handlePassword} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
};

export default connector(Login);