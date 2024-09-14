import { FC } from 'react';
import { CardsProps } from 'shared/types';

export const Cards: FC<CardsProps> = ({ cards, colNames }) => {
  return (
    <table className="container p-10 w-full">
      <tbody className="">
        <tr>
          {colNames.map((col) => (
            <th key={col} className="text-left font-semibold text-l">
              {col}
            </th>
          ))}
        </tr>
        {cards.map((card) => (
          <tr key={card.card_id} className="">
            {/* Deck name schould be gotten from deck ID */}
            <td className="">DeckName</td>
            <td className="">{card.question}</td>
            <td className="">{card.answer}</td>
            <td className="">{card.created_date}</td>
            <td className="">{card.updated_date}</td>
            <td className="text-center">{card.lapses}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
