//  Greetings

// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".

// Give the greetingroute a param /:name

// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).

const express = require('express')
const app = express()

// app.get('/greeting/:name', (request, response) => {
//   response.send(`Hello, ${request.params.name}!`)
// })

app.get('/tip/:total/:tipPercentage', (request, response) => {
  response.send("The tip is " + (parseInt(request.params.total) * parseInt(request.params.tipPercentage) * .01  + ' dollars.'))
})


app.listen(3000, () => {
  console.log('listening in port 3000')
})


