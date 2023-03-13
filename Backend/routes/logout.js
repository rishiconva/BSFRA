const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')


router.post('/', (req, res, next) => {
    try{
        
        res.clearCookie('token')
        res.status(200).send()
        console.log("Logged out Successfully")
    }catch{
        res.status(500).send(error)
    }
});

module.exports = router