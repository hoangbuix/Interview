import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../config/api";
import { setUserSession } from "../../routers/common";


const SignInPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dataState, setDataState] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const payload = {
            username: dataState.username,
            password: dataState.password,
        }
   
        api.post("user/login", payload).then((response) => {
            setLoading(false);
            setUserSession(response.data.token);
            props.history.push('/');
            // localStorage.setItem("@GoApp:token", res.data.token);
        }).catch(err => {
            setLoading(false);
            if (err.response.status === 401) setError(err.response.data.message);
            else setError("Something went wrong. Please try again later.");
        })
    }
    return (
        <Container>
            <WrapperTop>
                <h1>AAA</h1>
            </WrapperTop>
            <WrapperSub>
                <FormData onSubmit={handleSubmit}>
                    <WrapperInput>
                        <Input type="text" name="username" placeholder="Nhập tên tài khoản ..." required value={dataState.username} onChange={handleChange} />
                    </WrapperInput>
                    <WrapperInput>
                        <Input type="password" name="password" placeholder="Nhập mật khẩu ..." required value={dataState.password} onChange={handleChange} />
                    </WrapperInput>
                    {<label>{error ? error : null}</label>}
                    <WrapperButton>
                        {loading ? <Button>Đang đăng nhập...</Button> : <Button >Đăng nhập</Button>}
                    </WrapperButton>
                    <WrapperLink> <Link to="">Quên mật khẩu?</Link></WrapperLink>
                    <WrapperButton>
                        <Button>Đăng ký</Button>
                    </WrapperButton>
                </FormData>
            </WrapperSub>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    /* background-color: yellowgreen; */
    justify-content: center;
    
`;

const WrapperTop = styled.div`
    display: flex;
    width: 30vw;
    height: 60vh;
    /* background-color: green; */
    margin-top: 20vh;
    margin-right: 10px;
    padding: 10px;
`;

const WrapperSub = styled.div`
    background-color: wheat;
    width: 30vw;
    height: 60vh;
    margin-top: 20vh;
    margin-left: 10px;
    border-radius: 10px;
    padding: 10px;
    padding-top: 20px;
`;

const FormData = styled.form``

const WrapperInput = styled.div`
    background-color: blue;
    display: flex;
    justify-content: center;
    margin: 10px;
    
`;

const Input = styled.input`
    border: 0px solid white;
    border-radius: 5px;
    padding: 15px;
    width: 20vw;
    outline: none;
    color: black;
    margin-bottom: 10px;
`;

const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`

const Button = styled.button`
    background-color: red;
`

const WrapperLink = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`


export default SignInPage;