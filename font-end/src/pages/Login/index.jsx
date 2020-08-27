import React, { Component } from "react";
import "./Login.scss";
import avatar from '../../access/1.png'

class Login extends Component {

  render() {
    return (
      <div className="container-edit">
        <div className="header-login">
          <div className="logo">
            <h1>My Logo</h1>
          </div>
          {/* <div className="recent-login">
            <p>Recent Logins</p>
          </div>
          <div className="label-info">
            <p>Click</p>
          </div> */}
          <div className="user-login">
            <div className="user-value">
              <div className="user-value-wrap">
                <a href="_" className="link-edit">
                  <div className="image-user">
                    <img src={avatar} alt="logo" className="edit-image"/>
                  </div>
                  <div className="role-name">Hoàng</div>
                </a>
                {/* <a href="_">X</a>
                <span className="notification">1</span> */}
              </div>
            </div>
            <div className="no-user">
              <div className="wrap">
                <a href="_" className="link-edit">
                  <div className="image-none">
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      class="bi bi-plus-circle-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
                      />
                    </svg>
                  </div>
                  <div className="add-account">Add Account</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-login">
          <form>
            <div className="email-text">
              <input
                type="text"
                className="text-edit"
                placeholder="Nhập email"
              />
            </div>
            <div className="password-text">
              <input
                type="password"
                className="text-edit"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="action-form">
              <button type="submit" className="button-edit">
                Đăng Nhập
              </button>
            </div>
            <div className="forgot-password">
              <a href="_" className="edit-link">
                Quên mật khẩu?
              </a>
            </div>
            <div className="none"></div>
            <div className="create-account">
              <button type="submit" className="button-edit-new">
                Tạo tài khoản
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
