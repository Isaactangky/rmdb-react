import { Wrapper } from "./Button.styles";
import PropTypes from "prop-types";
const Button = ({ children, callback }) => {
  return <Wrapper onClick={callback}>{children}</Wrapper>;
};

Button.propTypes = {
  children: PropTypes.string,
  callback: PropTypes.func,
};
export default Button;
