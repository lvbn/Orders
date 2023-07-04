const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const cookieParser = require('cookie-parser')
require('dotenv').config(); // need for env variables to be read at run time

const port = 3000

// http://127.0.0.1:5173 -> Dashboard client. Creates an order from the Dashboard app
// http://127.0.0.1:3000 -> Tramonto client - creates an order by clicking the checkout button
// http://127.0.0.1:3000 -> this is the same as the above one, but 127 instead of localhost
// https://6447f81edc891f0aae69e72d--deft-biscochitos-b655e1.netlify.app this is Tramonto deployed, it is not fetching the dashboard, which is not deployed
app.use(cors(
  {
  origin: [ process.env.DASHBOARD_CLIENT, process.env.TRAMONTO_LOCALHOST, process.env.TRAMONTO_127],
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
  console.log(`🚀 Server running on http://127.0.0.1:${port}/  ✅`)
})