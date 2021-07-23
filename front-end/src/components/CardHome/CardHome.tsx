import React from "react";
import { FiClock, FiHome, FiLayers, FiPocket } from "react-icons/fi";
import "./CardHome.style.scss";
interface Props {
    data: any
}
const CardHome: React.FC<Props> = ({ data }) => {
    console.log(data)
    return (
        <div className="wrapper__card-home">
            <div className=" card-home">
                <div className="card-home__header">
                    <div className="gird wide">
                        <div className="row">
                            <div className=" l-2">
                                <div className="home-header__avatar">
                                    <img src={data.avatar} alt="avatar" />
                                </div>
                            </div>
                            <div className="l-8">
                                <div className="home-header__info">
                                    <a href="/"><FiLayers />James Bui</a>
                                    <br />
                                    <a href="/"><FiHome />Khoa Công Nghệ Thông Tin</a><br />
                                    <a href="/"><FiPocket /> Lớp: 16SE111</a>
                                    <br />
                                    <span><FiClock /> 20-07-2021</span>
                                </div>
                            </div>
                            <div className="l-2"></div>
                        </div>
                    </div>
                </div>
                <div className="card-home__body">
                    <img src="https://cdn.pixabay.com/photo/2017/05/13/23/05/emoji-2310895_960_720.png" alt="" />
                </div>
            </div>
        </div>

    )
};
export default CardHome;