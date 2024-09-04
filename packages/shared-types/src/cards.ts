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
