import { describe, it, expect } from 'vitest'
import { validateRegistration, type RegistrationValues } from './validateRegistration'

const valid: RegistrationValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('1 accepts completely valid values', () => {
    expect(validateRegistration(valid)).toEqual({})
  })

  it('2 rejects a name that is only spaces', () => {
    const errors = validateRegistration({ ...valid, fullName: '   ' })
    expect(errors.fullName).toBe('Enter your full name')
  })

  it('3 rejects an email without a TLD', () => {
    const errors = validateRegistration({ ...valid, email: 'aliya@example' })
    expect(errors.email).toBe('Enter a valid email, like name@example.com')
  })

  it('4 accepts an 8-character password', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    })
    expect(errors).toEqual({})
  })

  it('5 rejects a password shorter than 8 characters', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    })
    expect(errors.password).toBe('Use at least 8 characters')
  })

  it('6 rejects a password without a digit', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    })
    expect(errors.password).toBe('Include at least one number')
  })

  it('7 rejects mismatched passwords', () => {
    const errors = validateRegistration({ ...valid, confirmPassword: 'almaty2027' })
    expect(errors.confirmPassword).toBe('Passwords do not match')
  })

  it('8 rejects unchecked terms', () => {
    const errors = validateRegistration({ ...valid, acceptTerms: false })
    expect(errors.acceptTerms).toBe('Accept the terms to continue')
  })
})