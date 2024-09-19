import 'dotenv'
import z from 'zod'

const envSchema = z.object({
  SERVER_TYPE: z.enum(['fastify']).default('fastify'),
  PORT_SERVER: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data