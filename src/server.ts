import 'dotenv/config'
import { env } from './env'

const fastify = './infra/fastify'

const server = env.SERVER_TYPE === 'fastify' ? fastify : ''

require(server)