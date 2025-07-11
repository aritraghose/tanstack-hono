import { Hono } from 'hono'

const app = new Hono()

app.get('/api/v1/', (c) => {
  return c.json({
    message: "Hello from the hono backend!",
  })
})

export default app
