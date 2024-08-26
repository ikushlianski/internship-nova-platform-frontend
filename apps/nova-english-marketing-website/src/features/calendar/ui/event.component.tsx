// export function EventComponent() {
//   const { events, error, isLoading } = useGetEvents();
//
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//
//   return (
//     <div>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h2>{event.title}</h2>
//           <p>{event.description}</p>
//           <p>{event.endDate}</p>
//           <p>{event.allDay ? "All day" : "Not all day"}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
