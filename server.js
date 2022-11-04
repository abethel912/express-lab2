// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".

const express = require('express')
const app = express()

app.get('/greeting/:name', (request, response) => {
  response.send(`Hello, ${request.params.name}!`)
})

app.listen(3000, () => {
  console.log('listening in port 3000')
})