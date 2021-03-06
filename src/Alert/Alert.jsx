import React from "react";
import PropTypes from "prop-types";
import getElementType from "../utils/getElementType";
import buildClassName from "../utils/classNameHelpers";

export default class Alert extends React.Component {
  static propTypes = {
    dismissed: PropTypes.bool,
    as: PropTypes.string,
    onDismiss: PropTypes.func,
    closeLabel: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    dismissed: false,
    as: "div",
    onDismiss: () => {},
    closeLabel: "×",
    className: ""
  };

  constructor(props) {
    super(props);
    const { dismissed = false } = props;
    this.state = { dismissed };
  }

  closeAlert = () => {
    this.props.onDismiss();
    this.setState({ dismissed: true });
  };

  render = () => {
    const {
      closeLabel,
      children,
      dismissable,
      className,
      ...rest
    } = this.props;
    const formattedChildren = React.Children.map(children, child => {
      if (child.type === "a") {
        return React.cloneElement(child, { className: "alert-link" });
      }
      return child;
    });
    const { dismissed } = this.state;
    const Element = getElementType(Alert, rest);
    const classNames = buildClassName("alert", rest, className);
    const dismissButton = (
      <button type="button" className="close" onClick={this.closeAlert}>
        {closeLabel}
      </button>
    );
    if (dismissed) {
      return null;
    } else {
      return (
        <Element className={classNames} role="alert" {...rest}>
          {formattedChildren}
          {dismissable ? dismissButton : null}
        </Element>
      );
    }
  };
}
