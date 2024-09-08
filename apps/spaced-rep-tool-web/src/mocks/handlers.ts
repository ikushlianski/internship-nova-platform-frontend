import { http, HttpResponse } from "msw";
import { data } from "./mockData";
import { showToast } from "../utils/ShowToast";

export const url = `http://${import.meta.env.GATEWAY_HOST}:${import.meta.env.GATEWAY_PORT}`;

const userSettingsEndpoint = "/user/settings";
const cardsEndpoint = `/cards`;
const decksEndpoint = `/decks`;

export const handlers = [
  // cards
  http.get(cardsEndpoint, () => {
    showToast("Cards successfully loaded!", "success")
    return HttpResponse.json(data.cards);
  }),

  http.get(cardsEndpoint + "/:id", ({ params }) => {
    const response = data.cards.find((item) => item.card_id === params.id);
    if (response) {
      showToast(`Card with ID: ${params.id} successfully found!`, "success")
      return HttpResponse.json(response);
    } else {
      showToast(`Card with ID: ${params.id} not found!`, "success")
      return HttpResponse.json(null, { status: 404 });
    }
  }),

  http.post(cardsEndpoint, async ({ request }) => {
    const info = await request.formData();
    console.log("*POST* Card: ", info);
    showToast("Card successfully created!", "success")
    return new HttpResponse(null, {
      status: 201,
      statusText: "Created successfully",
    });
  }),

  http.put(cardsEndpoint + "/:id", async ({ request, params }) => {
    const { id } = params;
    const updatedCard = await request.json();
    console.log("*PUT* Card: ", id, "Updated card:", updatedCard);
    showToast(`Card with ID ${id} successfully updated!`, "success")
    return new HttpResponse(null, {
      status: 201,
      statusText: "Updated successfully",
    });
  }),

  http.delete(cardsEndpoint + "/:id", ({ params }) => {
    const { id } = params;
    console.log("*DELETE* Card: ", id);
    showToast(`Card with ID ${id} successfully deleted!`, "success")
    return new HttpResponse(null, {
      status: 204,
      statusText: "Deleted successfully",
    });
  }),

  //decks

  http.get(decksEndpoint, () => {
    showToast("Decks successfully loaded!", "success")
    return HttpResponse.json(data.decks);
  }),

  http.get(decksEndpoint + "/:id", ({ params }) => {
    const response = data.decks.find((item) => item.deck_id === params.id);
    if (response) {
      showToast(`Decks with ID: ${params.id} successfully found!`, "success")
      return HttpResponse.json(response);
    } else {
      showToast(`Decks with ID: ${params.id} not found!`, "success")
      return HttpResponse.json(null, { status: 404 });
    }
  }),

  http.post(decksEndpoint, async ({ request }) => {
    const info = await request.formData();
    console.log("*POST* Deck: ", info);
    showToast("Decks successfully created!", "success")
    return new HttpResponse(null, {
      status: 201,
      statusText: "Created successfully",
    });
  }),

  http.put(decksEndpoint + "/:id", async ({ request, params }) => {
    const { id } = params;
    const updatedDeck = await request.json();
    console.log("*PUT* Deck: ", id, "Updated deck:", updatedDeck);
    showToast(`Decks with ID ${id} successfully updated!`, "success")
    return new HttpResponse(null, {
      status: 201,
      statusText: "Updated successfully",
    });
  }),

  http.delete(decksEndpoint + "/:id", ({ params }) => {
    const { id } = params;
    console.log("*DELETE* Deck: ", id);
    showToast(`Decks with ID ${id} successfully deleted!`, "success")
    return new HttpResponse(null, {
      status: 204,
      statusText: "Deleted successfully",
    });
  }),

  //user

  http.get(userSettingsEndpoint, () => {
    showToast("Users successfully loaded!", "success")
    return HttpResponse.json(data.settings);
  }),
]
