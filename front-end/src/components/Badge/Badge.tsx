import React from "react";
import "./Badge.style.scss";


interface Props {
    type: any;
    content: any;
}
const Badge: React.FC<Props> = (props: Props) => {
    return (
        <span className={`badge badge-${props.type}`}>
            {props.content}
        </span>
    )
}

export default Badge