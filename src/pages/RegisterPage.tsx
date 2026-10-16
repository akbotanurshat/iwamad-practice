import { useState, type ChangeEvent, type SubmitEvent, type FocusEvent } from 'react'
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

  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched((t) => ({ ...t, [name]: true }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)
    const errors = validateRegistration(values)
    if (Object.keys(errors).length > 0) {
      return
    }
    setSubmitted(true)
  }

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
        onBlur={handleBlur}
        error={touched.fullName || submitAttempted ? errors.fullName : undefined}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email || submitAttempted ? errors.email : undefined}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password || submitAttempted ? errors.password : undefined}
      />

      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmPassword || submitAttempted ? errors.confirmPassword : undefined}
      />

      <div className="check">
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          checked={values.acceptTerms}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="acceptTerms">I accept the terms</label>
      </div>
      {(touched.acceptTerms || submitAttempted) && errors.acceptTerms && (
        <p className="field-error">{errors.acceptTerms}</p>
      )}

      <Button type="submit">Create account</Button>
    </form>
  )
}