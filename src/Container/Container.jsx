import React from "react";
import getElementType from "../utils/getElementType";

const Container = ({ fluid, style, children, className, ...rest }) => {
  const Element = getElementType(Container, rest);
  const containerClass = fluid ? "container-fluid" : "container";
  return (
    <Element style={style} className={`${containerClass} ${className}`}>
      {children}
    </Element>
  );
};

Container.defaultProps = {
  as: "div"
};

export default Container;
