import PropTypes from "prop-types";
import Style from "./Button.bootstrap.js";

import { ClassAdder } from "../../utils/classAdder.js";

const Button = (props) => {
  const {
    text,
    className,
    big,
    small,
    rounded,
    dataToggle = "#",
    dataTarget = "#",
    onClick = () => {},
  } = props;
  const buttonStyle = ClassAdder(Style, {
    className,
    big,
    small,
    rounded,
    dataToggle,
    dataTarget,
    onClick,
  });

  return (
    <button
      className={buttonStyle}
      data-toggle={dataToggle}
      data-target={dataTarget}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  rounded: PropTypes.bool,
  dataToggle: PropTypes.string,
  dataTarget: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
