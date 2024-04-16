const router = require('express').Router()
const { v4: generateID } = require('uuid')
const data = require('../db/data')


router.get('/api/users', (requestObj, responseObj) => {
    const nameQuery = requestObj.query.name.toLowerCase()

    if (nameQuery) {
        const user = data.find(uObj => uObj.name.toLowerCase() === nameQuery)

        return responseObj.json(user)
    }

    responseObj.send(data)
})

router.get('/api/users/:id', (requestObj, responseObj) => {
    const paramId = requestObj.params.id

    const user = data.find(uObj => uObj.id == paramId)

    responseObj.json(user || { message: 'User not found by that ID' })
})

router.post('/users', (requestObj, responseObj) => {
    const id = generateID()

    data.push({
        ...requestObj.body,
        id: id
    })

    responseObj.json({
        message: 'User has been added'
    })
})

module.exports = router