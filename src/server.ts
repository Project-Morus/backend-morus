import 'dotenv/config'
import { env } from './env'

const fastify = './infra/ports/fastify'

const server = env.SERVER_TYPE === 'fastify' ? fastify : ''

require(server)