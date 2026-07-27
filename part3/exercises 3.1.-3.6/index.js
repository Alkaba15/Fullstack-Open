const express = require('express')

const app = express()
app.use(express.json())
const port = 3002

const date = new Date()

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]


app.get('/', (request, response) => {
    response.send('<h1>Welcome in my city</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const entryCount = persons.length
    const enquiryTime = new Date()
    response.send(`
        <p>Phonebook has info for ${entryCount} people</p>
        <p>${enquiryTime}<p/>
        `
    )
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    person ? response.json(person) : response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "Name and number missing"
        })
    }
    const isNameExist = persons.some(person => person.name === body.name)
    if (isNameExist) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }
    const generateId = () => {
        return String(Math.floor(Math.random() * 100000))
    }

    const person = {
        "id": generateId(),
        "name": body.name,
        "number": body.number
    }
    persons = persons.concat(person)

    return response.status(201).json({
        "person": person
    })

})
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})