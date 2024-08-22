// export function CalendarComponent() {
//   const { events, error, isLoading } = useGetEvents();
//   const { myEvents, myError, myIsLoading } = useGetMyEvents();
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//
//   if (isLoading || myIsLoading) {
//     return <div>Loading...</div>;
//   }
//
//   if (error || myError) {
//     return <div>Error fetching events</div>;
//   }
//
//   return (
//     <div>
//       <h1>Calendar</h1>
//       <div>
//         {events.map((event) => (
//           <div key={event.id} onClick={() => setSelectedEvent(event)}>
//             {event.title}
//           </div>
//         ))}
//       </div>
//       {selectedEvent && (
//         <div>
//           <h2>{selectedEvent.title}</h2>
//           <p>{selectedEvent.description}</p>
//         </div>
//       )}
//     </div>
//   );
// }
