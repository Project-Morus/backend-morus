import 'dotenv/config'
import fastify from 'fastify'

import { env } from '@/env'


export const app = fastify({ logger: true })

app.listen({ host: '0.0.0.0', port: env.PORT_SERVER }).then(() => {
  console.log('🔥 HTTP Server Running!')
}).catch((error) => {
  console.error(`❌ Erro server fastify`, error)
})