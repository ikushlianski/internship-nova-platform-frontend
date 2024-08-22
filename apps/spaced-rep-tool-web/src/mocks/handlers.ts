import { http, HttpResponse } from "msw";

import { data } from "./data";

export const url = `http://${import.meta.env.GATEWAY_HOST || "localhost"}:${import.meta.env.GATEWAY_PORT || 3000}`;

const cardsEndpoint = `/cards`;
const decksEndpoint = `/decks`;

export const handlers = [
  // cards
  http.get(url + cardsEndpoint, () => {
    return HttpResponse.json(data.cards);
  }),
  //decks
  http.get(url + decksEndpoint, () => {
    return HttpResponse.json(data.decks);
  }),
];
