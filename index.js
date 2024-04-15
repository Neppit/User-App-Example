const express = require('express')
const app = express()
const PORT = 3333

const data = [
    {
        id: 1,
        name: 'Alice',
        age: 23
    },
    {
        id: 2,
        name: 'Ben',
        age: 20
    },
    {
        id: 3,
        name: 'Sarah',
        age: 24
    }
]  


app.get('/', (requestObj, responseObj) => {
    responseObj.send('Hello World')
})

app.get('/api/:user_id', (requestObj, responseObj) => {
    const id = requestObj.params.user_id
    const user = data.find((userObj) => {
        if (userObj.id === id) return true
    })

    if (user) {
        return responseObj.json(user)
    }

    return responseObj.json({
        message: 'User not found matching that id'
    })
})

app.get('/about', (requestObj, responseObj) => {
    responseObj.send('<h1>About</h1>')
})

app.get('/data', (requestObj, responseObj) => {
    const queryParams = requestObj.query

    const obj = {}

    if (queryParams.name === 'true') {
        obj.name = 'Alice'
    }

    if (queryParams.age === 'true') {
        obj.age = 23
    }

    responseObj.json(obj)
})

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})