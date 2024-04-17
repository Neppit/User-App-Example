const router = require('express').Router()
const { v4: generateID } = require('uuid')
const data = require('../db/users.json')
const fs = require('fs/promises')

async function getData() {
    const data = await fs.readFile('../db/users.json', 'utf8')

    return JSON.parse(data)
}
router.get('/api/users', async (requestObj, responseObj) => {
    const data = await getData()
    const nameQuery = requestObj.query.name.toLowerCase()

    if (nameQuery) {
        const user = data.find(uObj => uObj.name.toLowerCase() === nameQuery)

        return responseObj.json(user)
    }

    responseObj.send(data)
})

router.get('/api/users/:id', async (requestObj, responseObj) => {
    const paramId = requestObj.params.id
    const data = await getData()

    const user = data.find(uObj => uObj.id == paramId)

    responseObj.json(user || { message: 'User not found by that ID' })
})

router.post('/users', async (requestObj, responseObj) => {
    const id = generateID()
    const data = await getData()

    data.push({
        ...requestObj.body,
        id: id
    })

    await fs.writeFile('../db/users.json', JSON.stringify(data, null, 2))

    responseObj.json({
        message: 'User has been added'
    })
})

module.exports = router