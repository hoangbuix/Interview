import React from "react";
import "./Card.style.scss";

const Card = () => {
    return (
        <div className="card-container">
            <article>
                <header>
                    <div className="card-avatar">
                        <a href="_"><img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/186541769_111952264393915_6870514269550178295_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=825194&_nc_ohc=D-ShR5nTUHUAX-nhLHK&_nc_ht=scontent-hkt1-2.xx&oh=435e101f7373751b9bdc0ffee7e1d647&oe=60C57CA1" alt="///" /></a>
                    </div>
                    <div className="card-profile">
                        <span><a href="_">Dev</a></span>
                    </div>
                </header>
                <div className="card-option">
                    ...
                </div>
                <div className="card-main">
                    <img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/186541769_111952264393915_6870514269550178295_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=825194&_nc_ohc=D-ShR5nTUHUAX-nhLHK&_nc_ht=scontent-hkt1-2.xx&oh=435e101f7373751b9bdc0ffee7e1d647&oe=60C57CA1" alt="" />
                </div>
                <div className="card-comment">

                </div>
            </article>
        </div>
    )
};

export default Card;