import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Header.style.scss";

const Header = () => {
    return (
        <div className="wrapper-header">
            <div className="grid wide">
                <div className="row " >
                    <div className="c-4 m-1 l-2">
                        <div className="wrapper__header-logo">
                            logo
                        </div>
                    </div>
                    <div className="c-0 m-5 l-6">
                        <div className="wrapper__header-search">
                            <form>
                                <input type="text" placeholder="Tìm kiếm..." />
                                <button type="submit"> <FiSearch /></button>
                            </form>
                        </div>
                    </div>
                    <div className="c-8 m-6 l-4">
                        <div className="wrapper__header-auth">
                            {/* <div className="header-auth_login">
                                <button type="submit">
                                    Đăng nhập
                                </button>
                            </div> */}
                            <div className="header-auth-access">
                                <div className="header-auth-access-message icon__access">
                                    message
                                </div>
                                <div className="header-auth-access-notice icon__access">
                                    notice
                                </div>
                                <div className="header-auth-access-profile icon__access">
                                    profile
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;