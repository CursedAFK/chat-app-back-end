import { FastifyInstance } from 'fastify'
import { StreamChat } from 'stream-chat'

const streamChat = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_PRIVATE_API_KEY
)

export const userRoutes = async (app: FastifyInstance) => {
  app.post<{ Body: { id: string; name: string; image?: string } }>(
    '/signup',
    async (req, res) => {
      const { id, name, image } = req.body
      if (id === null || id === '' || name === null || name === '') {
        return res.status(400).send
      }
      const existingUsers = await streamChat.queryUsers({ id })
      if (existingUsers.users.length > 0) {
        return res.status(400).send('USER ID taken')
      }
      await streamChat.upsertUser({ id, name, image })
    }
  )
}
