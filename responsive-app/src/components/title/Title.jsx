import PropTypes from "prop-types";
import Style from "./Title.bootstrap";

import { ClassAdder } from "../../utils/classAdder";

const Title = (props) => {
  const { className, text, bold } = props;
  const titleStyle = ClassAdder(Style, {
    className,
    bold,
  });

  return <p className={titleStyle}>{text}</p>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  bold: PropTypes.bool,
};

export default Title;
