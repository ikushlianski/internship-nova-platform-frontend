export async function getCards(url: string) {
  const response = await fetch(`${url}/cards`, { method: "GET" });
  return await response.json();
}
