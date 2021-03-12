// Styles
import "./button.styles.scss";

const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    {children}
  </button>
);

export default Button;
