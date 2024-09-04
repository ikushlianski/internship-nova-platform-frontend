import { FC } from "react";
import { CardsProps } from "../../shared-types/src/cards";

export const Cards: FC<CardsProps> = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div>{card.card_id}</div>
      ))}
    </div>
  );
};
