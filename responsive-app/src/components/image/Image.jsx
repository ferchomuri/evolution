import PropTypes from "prop-types";
import Style from "./Image.bootstrap";

import { ClassAdder } from "../../utils/classAdder";

const Image = (props) => {
  const { className, src, alt, thumbnail } = props;
  const imageStyle = ClassAdder(Style, {
    className,
    thumbnail,
  });

  return <img className={imageStyle} src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  thumbnail: PropTypes.bool,
};

export default Image;
