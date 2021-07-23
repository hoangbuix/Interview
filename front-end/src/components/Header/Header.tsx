import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
// import ModalForm from "../ModalForm/ModalForm";
import "./Header.style.scss";



const Header: React.FC = () => {
    // const [isActive, setIsActive] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');

    useEffect(() => {
        let local: any = localStorage.getItem('token');
        const avatar: any = localStorage.getItem('user');
        setTimeout(() => {
            if (local != null || avatar != null) {
                setAvatar(avatar)
                setIsAuth(local);
            }
        }, 100)
    }, [isAuth, avatar]);
    return (
        <div className="wrapper-header">
            <div className="grid wide">
                <div className="row " >
                    <div className="c-6 m-6 l-2">
                        <div className="wrapper__header-logo">
                            <img src="https://cs.lhu.edu.vn/ViewPage/LHUVNB4/_default/image/Logo_ChimLac_W.png" alt="logo page" />
                        </div>
                    </div>
                    <div className="c-0 m-0 l-6">
                        <div className="wrapper__header-search">
                            <form>
                                <input type="text" placeholder="Tìm kiếm..." />
                                <button type="submit"> <FiSearch /></button>
                            </form>
                        </div>
                    </div>
                    <div className="c-6 m-6 l-4">
                        <div className="wrapper__header-auth">
                            {/* <div className="header-auth_login">
                                {isAuth ? '' :
                                    <button onClick={() => setIsActive(!isActive)}>Đăng nhập?</button>
                                }
                                {!isActive ? null : <ModalForm active={isActive} />}
                            </div> */}
                            <div className="header-auth-access">
                                <div className="header-auth-access-message icon__access">
                                    message
                                </div>
                                <div className="header-auth-access-notice icon__access">
                                    notice
                                </div>
                                <div className="header-auth-access-profile icon__accesss">
                                    <img src={avatar} alt="" />
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