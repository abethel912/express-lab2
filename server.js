//  Greetings

// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".

// Give the greetingroute a param /:name

// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).

const express = require('express')
const app = express()
  const responses= [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
  ]

app.get('/greeting/:name', (request, response) => {
  response.send(`Hello, ${request.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
  response.send("The tip is " + (parseInt(request.params.total) * parseInt(request.params.tipPercentage) * .01  + ' dollars.'))
})

app.get('/magic/:question', (request, response) => {
  response.send(`${request.params.question}?` + responses[Math.floor(Math.random()*responses.length)])
})



app.listen(3000, () => {
  console.log('listening in port 3000')
})


