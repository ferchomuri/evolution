import PropTypes from "prop-types";
import Style from "./Icon.bootstrap.js";

import { ClassAdder } from "../../utils/classAdder.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  const { name, size, color, className } = props;
  const iconStyle = ClassAdder(Style, {
    className,
    name,
    size,
    color,
  });

  return (
    <FontAwesomeIcon
      size={size}
      color={color}
      className={iconStyle}
      icon={name}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name:
    PropTypes.object.isRequired ||
    PropTypes.array.isRequired ||
    PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
