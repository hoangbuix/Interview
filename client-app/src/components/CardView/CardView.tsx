import React from "react";
import "./styles.css";
// import * as Icon from "react-icons/fi";

const CartView: React.FC = () => {
    return (
        <div className="container-cardview">
            <div className="wrapper-cardview">
                <div className="cardview-1">
                    <div className="cardview-1-1">
                        <img src="https://pbs.twimg.com/profile_images/948751466914697216/BtugqalC_400x400.jpg" alt="avatar" />
                    </div>
                    <div className="cardview-1-2">
                        <div className="cardview-1-2-1">Dona Trum</div>
                        <div className="cardview-1-2-2">...</div>
                    </div>
                </div>
                <div className="cardview-2">
                    <img src="https://pbs.twimg.com/profile_images/948751466914697216/BtugqalC_400x400.jpg" alt="avatar" />
                </div>
                <div className="cardview-3">
                    <div className="cardview-3-1">C1</div>
                    <div className="cardview-3-2">C2</div>
                    <div className="cardview-3-3">C3</div>
                </div>

            </div>
        </div>
    )
};

export default CartView;