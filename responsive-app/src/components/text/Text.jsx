import PropTypes from "prop-types";
import Style from "./Text.bootstrap";

import { ClassAdder } from "../../utils/classAdder";

const Text = (props) => {
  const { text, className, bold, italic, center, right } = props;
  const textStyle = ClassAdder(Style, {
    className,
    bold,
    italic,
    center,
    right,
  });

  return <p className={textStyle}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
};

export default Text;
