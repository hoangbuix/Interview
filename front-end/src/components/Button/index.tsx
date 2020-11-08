import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
    return (
        <button type="button" {...rest} className="button-container">
            {loading ? 'Loading...' : children}
        </button>
    )
};

export default Button;