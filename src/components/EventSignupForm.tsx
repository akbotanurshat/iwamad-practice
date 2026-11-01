import { useState } from 'react'
import type { CampusEvent } from '../data/events'
import { validateSignup, type SignupValues } from '../lib/validateSignup'

type Props = { event: CampusEvent }

export function EventSignupForm({ event }: Props) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [confirmation, setConfirmation] = useState<string | null>(null)

  const errors = validateSignup(values, seatsLeft)

  function handleChange(field: keyof SignupValues) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
    }
  }

  function handleBlur(field: keyof SignupValues) {
    return () => setTouched((t) => ({ ...t, [field]: true }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) return

    const tickets = Number(values.tickets)
    setSeatsLeft((s) => s - tickets)
    setConfirmation(`Booked: ${tickets} for ${values.fullName.trim()}.`)
    setValues({ fullName: '', email: '', tickets: '1' })
    setTouched({})
    setSubmitAttempted(false)
  }

  const showError = (field: keyof SignupValues) =>
    (touched[field] || submitAttempted) && errors[field] ? errors[field] : undefined

  return (
    <section style={{ marginTop: '2rem' }}>
      <p>Seats left: {seatsLeft}</p>
      {confirmation && <p role="status">{confirmation}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label>Full name</label>
          <input
            type="text"
            value={values.fullName}
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
          />
          {showError('fullName') && <p className="field-error">{showError('fullName')}</p>}
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          {showError('email') && <p className="field-error">{showError('email')}</p>}
        </div>

        <div className="field">
          <label>Tickets</label>
          <input
            type="number"
            min={1}
            max={4}
            value={values.tickets}
            onChange={handleChange('tickets')}
            onBlur={handleBlur('tickets')}
          />
          {showError('tickets') && <p className="field-error">{showError('tickets')}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Book
        </button>
      </form>
    </section>
  )
}