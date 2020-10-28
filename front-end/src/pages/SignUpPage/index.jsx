import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const SignUpPage = () => {

    const date = ['Tháng', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']

    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper-top">
                    <h1>Đăng ký</h1>
                    <span>Nhanh chóng dễ dàng</span>
                </div>
                <div className="wrapper-center">
                    <div className="wrapper-full-name">
                        <div className="wrapper-input-fist">
                            <input type="text" placeholder="Họ ..."/>
                        </div>
                        <div className="wrapper-input-last">
                            <input type="text" placeholder="Tên ..."/>
                        </div>
                    </div>
                    <div className="wrapper-username">
                        <div className="wrapper-input">
                            <input type="text" placeholder="Nhập tên tài khoản ..."/>
                        </div>
                    </div>
                    <div className="wrapper-input-password">
                        <div className="input-password">
                            <input type="text" placeholder="Nhập mật khẩu ..."/>
                        </div>
                        <div className="input-new-password">
                            <input type="text" placeholder="Nhập lại mật khẩu ..."/>
                        </div>
                    </div>
                    <div className="wrapper-date">
                        <div className="day wrapper-input">
                            <input type="text" name="day" placeholder="Ngày"/>
                        </div>
                        <div className="month">
                            <select id="cars">
                                {date.map((item, index) => (
                                    <option  key={index}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="year wrapper-input">
                            <input type="text" name="day" placeholder="Năm"/>
                        </div>
                    </div>
                    <div className="wrapper-gender">
                        <select id="cars">
                            <option value="gender" selected>Giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="none">Không muốn trả lời!</option>  
                        </select>
                    </div>
                </div>
                <div className="wrapper-bottom">
                    <div className="button-signIn">
                        <Link to="/dang-nhap">Đăng nhập</Link>
                    </div>
                    <div className="button-signUp">
                        <button>Đăng ký</button>
                    </div>
                </div>
            </div>
            {/* <div><img src={`https://bitly.com.vn/fZbyo`} alt="aa" style={{width: '100px', height: '100px'}}/></div> */}

        </div>
    )
};

export default SignUpPage;