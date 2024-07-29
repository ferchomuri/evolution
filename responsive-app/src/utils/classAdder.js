export function ClassAdder(styles, props) {

  let str = '';

  if (typeof styles === 'object') {

    if (styles.base) {
      str += styles.base
    }

    if (Object.keys(props).length) {
      Object.keys(props).forEach(prop => {

        if (prop === 'className' && props[prop]) {

          str = str.trim();
          str += ` ${props[prop]}`;

        } else if (props[prop] && Object.prototype.hasOwnProperty.call(styles, prop)) {

          str = str.trim();
          str += ` ${styles[prop]}`;

        }
      });
    }
  }


  return str.trim();

}
