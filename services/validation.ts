import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email('invalid email').min(1, 'your email is required'),
    password: z.string().min(1, 'your password is required'),
})

export { loginSchema }