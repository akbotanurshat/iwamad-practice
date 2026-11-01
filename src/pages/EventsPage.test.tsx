import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, it, expect } from 'vitest'
import EventsPage from './EventsPage'
import { events } from '../data/events'

describe('EventsPage', () => {
  it('7) renders one card per event', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(events.length)
  })
})