import PropTypes from "prop-types";
import Style from "./Link.bootstrap.js";

import { ClassAdder } from "../../utils/classAdder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = (props) => {
  const { href, target, rel, text, className, icon } = props;
  const linkStyle = ClassAdder(Style, {
    className,
  });

  return (
    <div className='d-flex'>
      {icon && <FontAwesomeIcon icon={icon} className='pr-3' />}
      <a className={linkStyle} href={href} target={target} rel={rel}>
        {text}
      </a>
    </div>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
};

export default Link;
