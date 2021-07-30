import React from "react";
import "./LightBoxImg.style.scss";

const LightBoxImg = () => {
    return (
        <>
            <div className="container">
                <div className="wrap">
                    <div className="gallery">
                        <figure className="gallery__item gallery__item--1">
                            <a href="#img1">
                                <img src="https://images.unsplash.com/photo-1574270981993-f1df213562b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="gallery__img" />
                            </a>
                            <div className="lightbox" id="img1">
                                <img src="https://images.unsplash.com/photo-1574270981993-f1df213562b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <a href="/profile" className="btn-close">×</a>
                            </div>
                        </figure>
                        <figure className="gallery__item gallery__item--2">
                            <a href="#img2">
                                <img src="https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="gallery__img" />
                            </a>
                            <div className="lightbox" id="img2">
                                <img src="https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <a href="/profile" className="btn-close">×</a>
                            </div>
                        </figure>
                        <figure className="gallery__item gallery__item--3">
                            <a href="#img3">
                                <img src="https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="gallery__img" />
                            </a>
                            <div className="lightbox" id="img3">
                                <img src="https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <a href="/profile" className="btn-close">×</a>
                            </div>
                        </figure>
                        <figure className="gallery__item gallery__item--4">
                            <a href="#img4">
                                <img src="https://images.unsplash.com/photo-1571680719972-f18bb57077cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="gallery__img" />
                            </a>
                            <div className="lightbox" id="img4">
                                <img src="https://images.unsplash.com/photo-1571680719972-f18bb57077cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <a href="/profile" className="btn-close">×</a>
                            </div>
                        </figure>
                        <figure className="gallery__item gallery__item--5">
                            <a href="#img5">
                                <img src="https://images.unsplash.com/photo-1571586100127-cdaef780fc61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="gallery__img" />
                            </a>
                            <div className="lightbox" id="img5">
                                <img src="https://images.unsplash.com/photo-1571586100127-cdaef780fc61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <a href="/profile" className="btn-close">×</a>
                            </div>
                        </figure>
                        <figure className="gallery__item gallery__item--6">
                            <a href="#img6">
                                <img src="https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="gallery__img" />
                            </a>
                            <div className="lightbox" id="img6">
                                <img src="https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <a href="/profile" className="btn-close">×</a>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

        </>
    )
};
export default LightBoxImg;