import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import { validateRegistration, type RegistrationValues } from '../lib/validateRegistration'
import { Button } from '../components/ui/Button'
import { TextField } from '../components/ui/TextField'

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const errors = validateRegistration(values)
    if (Object.keys(errors).length > 0) {
      return
    }
    setSubmitted(true)
  }

  const [submitted, setSubmitted] = useState(false)

  const errors = validateRegistration(values)

  if (submitted) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Register</h1>

      <TextField
        label="Full name"
        name="fullName"
        type="text"
        value={values.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <div className="check">
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          checked={values.acceptTerms}
          onChange={handleChange}
        />
        <label htmlFor="acceptTerms">I accept the terms</label>
      </div>
      {errors.acceptTerms && <p className="field-error">{errors.acceptTerms}</p>}

      <Button type="submit">Create account</Button>
    </form>
  )
}