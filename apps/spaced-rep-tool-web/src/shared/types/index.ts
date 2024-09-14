export interface CardsProps {
  cards: Card[];
  colNames: string[];
}

export interface Card {
  card_id: string;
  deck_id: string;
  question: string;
  answer: string;
  created_date: string;
  updated_date: string;
  lapses: number;
}
