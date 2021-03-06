import React from "react";
import buildClassName from "../utils/classNameHelpers";
import getElementType from "../utils/getElementType";

const Badge = ({ children, className, ...rest }) => {
  const Element = getElementType(Badge, rest);
  const classNames = buildClassName("badge", rest, className);
  return <Element className={classNames}>{children}</Element>;
};

Badge.defaultProps = {
  as: "span"
};

export default Badge;
