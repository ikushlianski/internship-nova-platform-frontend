import { useEffect, useState } from 'react';

import { Cards } from '../../components/Cards/Cards.component';
import { getCards } from '../../shared/utils/cards/cards';
import { BACKEND_URL } from '../../shared/utils/url';
import { COL_NAMES } from '../../shared/utils/cards/constants';

export const CardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(BACKEND_URL).then((data) => {
      setCards(data);
    });
  }, []);

  return <Cards cards={cards} colNames={COL_NAMES} />;
};
