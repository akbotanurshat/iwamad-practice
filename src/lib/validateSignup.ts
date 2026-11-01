export type SignupValues = {
  fullName: string
  email: string
  tickets: string
}

export type SignupErrors = Partial<Record<keyof SignupValues, string>>

export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(values.email.trim())) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  const n = Number(values.tickets)
  const isWhole = Number.isInteger(n) && n >= 1 && n <= 4
  if (!isWhole) {
    errors.tickets = 'Choose 1 to 4 tickets'
  } else if (n > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`
  }

  return errors
}