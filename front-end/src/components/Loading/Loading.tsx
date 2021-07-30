import React, { useState, useEffect } from "react";
import "./Loading.style.scss";

export default function Loading() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), 300)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            {
                show &&
                <div className="loading-element">
                    <div className="inner one">Clarus</div>
                    <div className="inner two">RD</div>
                    <div className="inner three"></div>
                </div>

            }
        </>
    )
}