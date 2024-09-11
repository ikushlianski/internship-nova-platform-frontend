import { Cards } from '../../components/Cards/Cards.component';
import { BACKEND_URL } from '../../shared/utils/url';
import { COL_NAMES } from '../../shared/utils/cards/constants';
import { useQuery } from '@tanstack/react-query';

export const CardsPage = () => {
  const { isPending, isFetching, error, data } = useQuery({
    queryKey: ['cardsData'],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_URL}/cards`);
      return await response.json();
    },
  });

  // loader goes here
  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Cards cards={data} colNames={COL_NAMES} />
      <div>{isFetching ? 'Updating...' : ''}</div>
    </>
  );
};
