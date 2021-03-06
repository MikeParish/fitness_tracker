const express = require('express');

const users = require('../models/Users');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        Userz: users.Users
    }) )
    .post('/login', (req, res) => {
        try {
            const user = users.Login(req.body.email, req.body.password);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

module.exports = router;