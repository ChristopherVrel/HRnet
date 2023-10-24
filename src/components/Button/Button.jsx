import "./Button.css";

const Button = ({ ariaLabel = "button", className = [], action, text = "Button" }) => {
    return (
        <button aria-label={ariaLabel} className={`ripple${(className.length > 0) ? ` ${className.join(" ")}` : ""}`} onClick={action}>{text}</button>
    );
}

export default Button;