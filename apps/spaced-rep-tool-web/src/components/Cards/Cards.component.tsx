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
        <tr>
          <td className="font-bold">Deck</td>
          <td>Question</td>
          <td>Answer</td>
          <td>Last answered</td>
          <td>Due to</td>
          <td>Lapses</td>
        </tr>
        {cards.map((card) => (
          <tr key={card.card_id}>
            <td>{card.deck_id}</td>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.updated_date}</td>
            <td>{card.due_date}</td>
            <td>{card.lapses}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
