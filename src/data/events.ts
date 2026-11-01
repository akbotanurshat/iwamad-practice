export type CampusEvent = {
  id: number
  title: string
  date: string
  place: string
  seats: number
}

export const events: CampusEvent[] = [
  { id: 1, title: 'React study night', date: '2026-10-22', place: 'Room 302', seats: 20 },
  { id: 2, title: 'TypeScript deep dive', date: '2026-10-24', place: 'Room 105', seats: 15 },
  { id: 3, title: 'Hackathon kickoff', date: '2026-10-26', place: 'Main Hall', seats: 40 },
  { id: 4, title: 'CSS layout workshop', date: '2026-10-28', place: 'Room 210', seats: 2 },
]