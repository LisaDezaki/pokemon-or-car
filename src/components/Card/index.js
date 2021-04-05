import React from "react";
import cx from "classnames";
import css from "./card.module.scss";

const Card = ({
    active,
    flip,
    success,
    img,
    name,
    onSelection,
    type
  }) => (
    <div className={cx(
      css.card,
      active ? css.active : null,
      flip ? css.flip : null,
      success ? css.success : css.fail
    )}>
        <div className={css.cardFront}>
          <h1>{name}</h1>
          <button onClick={() => onSelection('car')}>Car</button>
          <button onClick={() => onSelection('pkmn')}>Pokémon</button>
        </div>
        <div className={css.cardBack}>
            <p>{success ? 'Right!' : 'Wrong!'} It's a</p>
            <h1>{type === 'pkmn' ? 'Pokémon' : 'Car'}!</h1>
            <img src={img} alt={img} />
        </div>
    </div>
  );

export default Card;