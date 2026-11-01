import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'
import { Card } from './ui/Card'
import { Tag } from './ui/Tag'

type Props = { event: CampusEvent }

export function EventCard({ event }: Props) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>{event.date} · {event.place}</p>
      <div className="tag-and-link">
        <Tag label={`${event.seats} seats`} />
        <Link to={`/events/${event.id}`}>Details</Link>
      </div>
    </Card>
  )
}