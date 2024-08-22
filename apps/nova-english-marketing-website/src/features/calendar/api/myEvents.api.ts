// export const useGetMyEvents = () => {
//   const { data, error, isLoading } = useQuery("events", async () => {
//     const response = await fetch("https://api.example.com/events");
//     if (!response.ok) {
//       throw new Error("Failed to fetch events");
//     }
//     return response.json();
//   });
//
//   return {
//     events: data,
//     error,
//     isLoading,
//   };
// };
