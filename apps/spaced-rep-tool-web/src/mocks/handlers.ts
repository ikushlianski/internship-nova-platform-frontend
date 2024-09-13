import { http, HttpResponse } from "msw";

import { data } from "./mockData";

export const url = `http://${import.meta.env.GATEWAY_HOST}:${import.meta.env.GATEWAY_PORT}`;

const userSettingsEndpoint = "/user/settings";
const cardsEndpoint = `/cards`;
const decksEndpoint = `/decks`;

export const handlers = [
  // cards
  http.get(cardsEndpoint, () => {
    return HttpResponse.json(data.cards);
  }),

  http.get(cardsEndpoint + "/:id", ({ params }) => {
    const response = data.cards.find((item) => item.card_id === params.id);
    return HttpResponse.json(response);
  }),

  http.post(cardsEndpoint, async ({ request }) => {
    const info = await request.formData();
    console.log("*POST* Card: ", info);
    return new HttpResponse(null, {
      status: 201,
      statusText: "Created successfully",
    });
  }),

  http.put(cardsEndpoint + "/:id", async ({ request, params }) => {
    const { id } = params;
    const updatedCard = await request.json();
    console.log("*PUT* Card: ", id, "Updated card:", updatedCard);

    return new HttpResponse(null, {
      status: 201,
      statusText: "Updated successfully",
    });
  }),

  http.delete(cardsEndpoint + "/:id", ({ params }) => {
    const { id } = params;
    console.log("*DELETE* Card: ", id);
    return new HttpResponse(null, {
      status: 204,
      statusText: "Deleted successfully",
    });
  }),

  //decks

  http.get(decksEndpoint, () => {
    return HttpResponse.json(data.decks);
  }),

  http.get(decksEndpoint + "/:id", ({ params }) => {
    const response = data.decks.find((item) => item.deck_id === params.id);
    return HttpResponse.json(response);
  }),

  http.post(decksEndpoint, async ({ request }) => {
    const info = await request.formData();
    console.log("*POST* Deck: ", info);
    return new HttpResponse(null, {
      status: 201,
      statusText: "Created successfully",
    });
  }),

  http.put(decksEndpoint + "/:id", async ({ request, params }) => {
    const { id } = params;
    const updatedDeck = await request.json();
    console.log("*PUT* Deck: ", id, "Updated deck:", updatedDeck);

    return new HttpResponse(null, {
      status: 201,
      statusText: "Updated successfully",
    });
  }),

  http.delete(decksEndpoint + "/:id", ({ params }) => {
    const { id } = params;
    console.log("*DELETE* Deck: ", id);
    return new HttpResponse(null, {
      status: 204,
      statusText: "Deleted successfully",
    });
  }),

  //user

  http.get(userSettingsEndpoint, () => {
    return HttpResponse.json(data.settings);
  }),
];
