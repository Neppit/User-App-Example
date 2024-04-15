const express = require('express')
const path = require('path')
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

app.use(express.static('./public'))

// app.get('/', (requestObj, responseObj) => {
//     responseObj.sendFile(path.join(__dirname, './public/index.html'))
// })

app.get('/api/users', (requestObj, responseObj) => {
    responseObj.send(data)
})

app.get('/api/users/:id', (requestObj, responseObj) => {
    responseObj.send()
})


app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})