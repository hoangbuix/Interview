import React from "react";
import "./Edit.scss";

interface EditProps {
    handleSubmitEdit?: () => void;
    handleCloseEdit?: () => void;
    show?: boolean;
}

const Edit: React.FC<EditProps> = ({ handleCloseEdit, handleSubmitEdit, show, children }) => {
    const showHideClassNameEdit = show ? "container-edit display-block" : " container-edit display-none";
    return (
        <div className={showHideClassNameEdit}>
            <div className="wrapper-edit">
                {children}
                <div className="wrapper-edit-button">
                    <button onClick={handleSubmitEdit} style={{ backgroundColor: "green", color: "white", fontSize: "18px", width: '7rem' }}>Xác nhận</button>
                    <button onClick={handleCloseEdit} style={{ backgroundColor: "tomato", color: "white", fontSize: "18px", width: '7rem' }}>Hủy bỏ</button>
                </div>
            </div>
        </div>
    )
};

export default Edit;