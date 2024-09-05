import { FC } from "react";

export interface CardsProps {
  cards: Card[];
}

export interface Card {
  card_id: string;
  deck_id: string;
  question: string;
  answer: string;
  created_date: string;
  updated_date: string;
  due_date: string;
  lapses: number;
}

export const Cards: FC<CardsProps> = ({ cards }) => {
  return (
    <table>
      <tbody>
        {cards.map((card) => (
          <tr key={card.card_id}>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.updated_date}</td>
            <td>{card.due_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
