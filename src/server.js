
import app from './app.js'

const PORT = process.env.PORT

console.log(PORT)
app.listen({ port: PORT }, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
