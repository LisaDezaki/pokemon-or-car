import React from "react";
import cx from "classnames";
import css from "./score.module.scss";

const Score = ({
    score
  }) => (
    <div className={cx(css.score)}>
      <h1>Score: {score}</h1>
    </div>
  );

export default Score;