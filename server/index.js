const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const cookieParser = require('cookie-parser')

const port = 3000

app.use(cors(
  {
  origin: 'http://127.0.0.1:5173',
  // origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  }
))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}/  ✅`)
})