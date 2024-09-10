import { http, HttpResponse } from "msw";

import { BACKEND_URL } from "../shared/utils/url";

import { data } from "./mockData";

const userSettingsEndpoint = "/user/settings";
const cardsEndpoint = `/cards`;
const decksEndpoint = `/decks`;

export const handlers = [
  // cards
  http.get(BACKEND_URL + cardsEndpoint, () => {
    return HttpResponse.json(data.cards);
  }),

  http.get(BACKEND_URL + cardsEndpoint + "/:id", ({ params }) => {
    const response = data.cards.find((item) => item.card_id === params.id);
    return HttpResponse.json(response);
  }),

  http.post(BACKEND_URL + cardsEndpoint, async ({ request }) => {
    const info = await request.formData();
    console.log("*POST* Card: ", info);
    return new HttpResponse(null, {
      status: 201,
      statusText: "Created successfully",
    });
  }),

  http.put(
    BACKEND_URL + cardsEndpoint + "/:id",
    async ({ request, params }) => {
      const { id } = params;
      const updatedCard = await request.json();
      console.log("*PUT* Card: ", id, "Updated card:", updatedCard);

      return new HttpResponse(null, {
        status: 201,
        statusText: "Updated successfully",
      });
    },
  ),

  http.delete(BACKEND_URL + cardsEndpoint + "/:id", ({ params }) => {
    const { id } = params;
    console.log("*DELETE* Card: ", id);
    return new HttpResponse(null, {
      status: 204,
      statusText: "Deleted successfully",
    });
  }),

  //decks

  http.get(BACKEND_URL + decksEndpoint, () => {
    return HttpResponse.json(data.decks);
  }),

  http.get(BACKEND_URL + decksEndpoint + "/:id", ({ params }) => {
    const response = data.decks.find((item) => item.deck_id === params.id);
    return HttpResponse.json(response);
  }),

  http.post(BACKEND_URL + decksEndpoint, async ({ request }) => {
    const info = await request.formData();
    console.log("*POST* Deck: ", info);
    return new HttpResponse(null, {
      status: 201,
      statusText: "Created successfully",
    });
  }),

  http.put(
    BACKEND_URL + decksEndpoint + "/:id",
    async ({ request, params }) => {
      const { id } = params;
      const updatedDeck = await request.json();
      console.log("*PUT* Deck: ", id, "Updated deck:", updatedDeck);

      return new HttpResponse(null, {
        status: 201,
        statusText: "Updated successfully",
      });
    },
  ),

  http.delete(BACKEND_URL + decksEndpoint + "/:id", ({ params }) => {
    const { id } = params;
    console.log("*DELETE* Deck: ", id);
    return new HttpResponse(null, {
      status: 204,
      statusText: "Deleted successfully",
    });
  }),

  //user

  http.get(BACKEND_URL + userSettingsEndpoint, () => {
    return HttpResponse.json(data.settings);
  }),
];
