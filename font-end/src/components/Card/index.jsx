import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="image-show">
                        {/* //img */}
                    </div>
                    <div className="card-body">
                        <div className="title">
                            <p></p>
                        </div>
                        <div className="bottom-click">
                            <button type="button"></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;