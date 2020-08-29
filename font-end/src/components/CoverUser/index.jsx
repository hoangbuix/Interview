import React, { useState } from "react";
import {
  FaCamera,
  FaPencilAlt,
  FaUserGraduate,
  FaUserAlt,
  FaBookReader,
  FaLandmark,
} from "react-icons/fa";
import "./CoverUser.scss";

function CoverUser() {
  const [avatar, setAvatar] = useState("https://bom.to/A5Wrukd");
  const [cover, setCover] = useState("https://bom.to/aQN4HLc");

  return (
    <div className="app-main">
      <div className="panel-top">
        <div className="panel-top-image">
          <div className="image-cover">
            <img src={cover} alt="aaa" className="image-cover-edit" />
          </div>
          <div className="button-add-image-cover">
            <span className="edit-icon-cover">
              <FaCamera style={{ color: "white" }} /> Cập nhập ảnh bìa
            </span>
          </div>
        </div>
      </div>
      <div className="panel-main">
        <div className="panel-image">
          <div className="image-avatar">
            <img src={avatar} alt="avatar" className="image-avatar-edit" />
            <div className="button-add-image-avatar">
              <span className="edit-icon-avatar">
                <FaCamera style={{ color: "white" }} />
                <h5 style={{ color: "white" }}>Thêm ảnh</h5>
              </span>
            </div>
          </div>
        </div>
        <div className="panel-content">
          <div className="panel-content-name">
            <div className="user-name">
              <h4>
                <FaUserAlt /> Bùi Văn A
              </h4>
            </div>
            <div className="major">
              <h4>
                <FaUserGraduate /> Sinh Viên
              </h4>
            </div>
          </div>
          <div className="panel-content-info">
            <div className="university">
              <h4>
                <FaBookReader /> University
              </h4>
            </div>
            <div className="company">
              <h4>
                <FaLandmark /> No Company
              </h4>
            </div>
          </div>
          <div className="panel-content-edit">
            <FaPencilAlt />
          </div>
        </div>
      </div>
      <div className="panel-button">
        
      </div>
    </div>
  );
}

export default CoverUser;
