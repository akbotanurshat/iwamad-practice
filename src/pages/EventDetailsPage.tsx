import { useParams, Link } from 'react-router';
import { events } from '../data/events';
import { EventSignupForm } from '../components/EventSignupForm';

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <div>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date} | {event.place}</p>
      
      <EventSignupForm event={event} />
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/events">Back to Events</Link>
      </div>
    </div>
  );
}