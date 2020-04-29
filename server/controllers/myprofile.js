const express = require('express');

const myprofile = require('../models/MyProfile'); // like a pointer

const router = express.Router();

router
    .use(function(req, res, next) {
        console.log({ UserID: req.userId })
        next();
    })
    .get('/', (req, res) => res.send({
        MyProf: myprofile.MyProfile[req.userId]
    }) )

module.exports = router;