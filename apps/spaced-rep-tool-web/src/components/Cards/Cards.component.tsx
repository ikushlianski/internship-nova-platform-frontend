import { FC } from "react";

export interface CardsProps {
  cards: Card[];
}

export interface Card {
  card_id: string;
  deck_id: string;
  question: string;
  answer: string;
  create_date: string;
  update_date: string;
  due_date: string;
  lapses: number;
}

export const Cards: FC<CardsProps> = ({ cards }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="font-semibold text-l">Deck</td>
          <td className="font-semibold text-l">Question</td>
          <td className="font-semibold text-l">Answer</td>
          <td className="font-semibold text-l">Last answered</td>
          <td className="font-semibold text-l">Due to</td>
          <td className="font-semibold text-l">Lapses</td>
        </tr>
        {cards.map((card) => (
          <tr key={card.card_id}>
            <td>{card.deck_id}</td>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.create_date}</td>
            <td>{card.update_date}</td>
            <td>{card.lapses}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
