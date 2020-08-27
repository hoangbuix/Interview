import React, { Component } from 'react'

export default class CoverBorder extends Component {
    render() {
        return (
            <div className="user-profile">
                <div className="user-card">
                    <div className="d-flex">
                        <a href="_">
                            <div className="avatar--xxl">
                                <img src="" alt="logo"/>
                            </div>
                        </a>
                        <div className="user-name-edit">
                            <h1 className="user-name">
                                Hoàng Bùi
                            </h1>
                            <div className="d-inline-block">
                                <a href="_">
                                    Edit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
