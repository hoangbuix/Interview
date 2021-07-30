import React from "react";
import { FiInfo } from "react-icons/fi";
import "./CardHome.style.scss";

const CardHome: React.FC = () => {
    return (
        <div className="wrapper__card">
            <div className="gird wide card">
                <div className="card__header">
                    <div className="row">
                        <div className="c-3 l-2">
                            <div className="card__header-img">
                                <img src="https://storage.googleapis.com/subgraph-images/1611142219860enzyme-round.png" alt="" />
                            </div>

                        </div>
                        <div className="c-6 l-8">
                            <div className="card__header-info">
                                <ul>
                                    <li><a href="/"><FiInfo /> James Bui</a></li>
                                    <li><a href="/">b</a></li>
                                    <li><a href="/">c</a></li>
                                    <li><a href="/">d</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="c-3 l-2"></div>
                    </div>

                </div>
                <div className="card__main">
                    <img src="http://www.imgworlds.com/wp-content/uploads/2015/11/Strategic_Partner_Image_-_Main_Image-1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
};
export default CardHome;