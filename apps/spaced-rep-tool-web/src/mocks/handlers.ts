import { http, HttpResponse } from 'msw';
import { data } from './mockData';
import { showToast } from '../features/Toast/logic/ShowToast';

export const url = `http://${import.meta.env.GATEWAY_HOST}:${import.meta.env.GATEWAY_PORT}`;

const userSettingsEndpoint = '/user/settings';
const cardsEndpoint = `/cards`;
const decksEndpoint = `/decks`;

export const handlers = [
  // cards
  http.get(cardsEndpoint, () => {
    try {
      return HttpResponse.json(data.cards);
    } catch (error) {
      showToast('Failed to load cards!', 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.get(cardsEndpoint + '/:id', ({ params }) => {
    try {
      const response = data.cards.find((item) => item.card_id === params.id);
      if (response) {
        return HttpResponse.json(response);
      } else {
        showToast(`Card with ID: ${params.id} not found!`, 'error');
        return HttpResponse.json(null, { status: 404 });
      }
    } catch (error) {
      showToast(`Failed to load card with ID: ${params.id}`, 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.post(cardsEndpoint, async ({ request }) => {
    try {
      const info = await request.formData();
      console.log('*POST* Card: ', info);
      showToast('Card successfully created!', 'success');
      return new HttpResponse(null, {
        status: 201,
        statusText: 'Created successfully',
      });
    } catch (error) {
      showToast('Failed to create card!', 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.put(cardsEndpoint + '/:id', async ({ request, params }) => {
    try {
      const { id } = params;
      const updatedCard = await request.json();
      console.log('*PUT* Card: ', id, 'Updated card:', updatedCard);
      showToast(`Card with ID ${id} successfully updated!`, 'success');
      return new HttpResponse(null, {
        status: 201,
        statusText: 'Updated successfully',
      });
    } catch (error) {
      showToast(`Failed to update card with ID ${params.id}!`, 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.delete(cardsEndpoint + '/:id', ({ params }) => {
    try {
      const { id } = params;
      console.log('*DELETE* Card: ', id);
      showToast(`Card with ID ${id} successfully deleted!`, 'success');
      return new HttpResponse(null, {
        status: 204,
        statusText: 'Deleted successfully',
      });
    } catch (e) {
      showToast(`Failed to delete card with ID ${params.id}!`, 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  //decks

  http.get(decksEndpoint, () => {
    return HttpResponse.json(data.decks);
  }),

  http.get(decksEndpoint + '/:id', ({ params }) => {
    try {
      const response = data.decks.find((item) => item.deck_id === params.id);
      if (response) {
        return HttpResponse.json(response);
      } else {
        showToast(`Decks with ID: ${params.id} not found!`, 'error');
        return HttpResponse.json(null, { status: 404 });
      }
    } catch (error) {
      showToast(`Failed to load decks with ID: ${params.id}`, 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.post(decksEndpoint, async ({ request }) => {
    try {
      const info = await request.formData();
      console.log('*POST* Deck: ', info);
      showToast('Decks successfully created!', 'success');
      return new HttpResponse(null, {
        status: 201,
        statusText: 'Created successfully',
      });
    } catch (error) {
      showToast('Failed to deck card!', 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.put(decksEndpoint + '/:id', async ({ request, params }) => {
    try {
      const { id } = params;
      const updatedDeck = await request.json();
      console.log('*PUT* Deck: ', id, 'Updated deck:', updatedDeck);
      showToast(`Decks with ID ${id} successfully updated!`, 'success');
      return new HttpResponse(null, {
        status: 201,
        statusText: 'Updated successfully',
      });
    } catch (error) {
      showToast(`Failed to update deck with ID ${params.id}!`, 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  http.delete(decksEndpoint + '/:id', ({ params }) => {
    try {
      const { id } = params;
      console.log('*DELETE* Deck: ', id);
      showToast(`Decks with ID ${id} successfully deleted!`, 'success');
      return new HttpResponse(null, {
        status: 204,
        statusText: 'Deleted successfully',
      });
    } catch (error) {
      showToast(`Failed to delete deck with ID ${params.id}!`, 'error');
      return HttpResponse.json({ status: 500 });
    }
  }),

  //user

  http.get(userSettingsEndpoint, () => {
    showToast('Users successfully loaded!', 'success');
    return HttpResponse.json(data.settings);
  }),
];
