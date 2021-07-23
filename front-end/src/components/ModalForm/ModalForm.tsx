import React, { useState, useEffect } from "react";

import "./ModalForm.style.scss";


interface Props {
    active: boolean
}

const ModalForm: React.FC<Props> = ({ active }) => {
    const [isActive, setIsActive] = useState<boolean>(true);

    const handleClose = () => (
        setTimeout(() => {
            setIsActive(!isActive);
        }, 100)
    )
    useEffect(() => { }, [active, isActive])


    return (
        <div className="wrapper-modal" style={isActive === false ? { display: 'none' } : { display: 'block' }}>
            <div className="modal" style={active === true ? { display: 'block' } : { display: 'none' }} >
                <form className="modal-content animate" method="post">
                    <div className="imgcontainer">
                        <span className="close" onClick={handleClose} title="Close Modal">×</span>
                        <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" defaultChecked={true} name="remember" /> Remember me
                        </label>
                    </div>
                    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                        <button type="button" className="cancelbtn" onClick={handleClose}>Cancel</button>
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default ModalForm;