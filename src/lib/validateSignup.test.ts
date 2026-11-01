import { describe, it, expect } from 'vitest'
import { validateSignup, type SignupValues } from './validateSignup'

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  it('1) returns no errors for valid input', () => {
    expect(validateSignup(valid, 10)).toEqual({})
  })

  it("2) rejects tickets '0'", () => {
    const errors = validateSignup({ ...valid, tickets: '0' }, 10)
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it("3) rejects tickets '5'", () => {
    const errors = validateSignup({ ...valid, tickets: '5' }, 10)
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it("4) rejects tickets '1.5'", () => {
    const errors = validateSignup({ ...valid, tickets: '1.5' }, 10)
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it("5) accepts tickets '4' with 10 seats left", () => {
    expect(validateSignup({ ...valid, tickets: '4' }, 10)).toEqual({})
  })

  it("6) rejects tickets '3' when seatsLeft is 2", () => {
    const errors = validateSignup({ ...valid, tickets: '3' }, 2)
    expect(errors.tickets).toBe('Only 2 seats left')
  })
})