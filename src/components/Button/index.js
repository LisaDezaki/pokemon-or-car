import React from "react";
import cx from "classnames";
import css from "./button.module.scss";

const Button = ({
    children,
    onClick
  }) => (
    <button className={cx(css.button)} onClick={onClick}>
        {children}
    </button>
  );

export default Button;