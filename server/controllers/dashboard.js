const express = require('express');

const dashboard = require('../models/Dashboard');
const exercises = require('../models/Exercises'); //get different pages to interact with each with different models
//safer to have these two models in the server

const router = express.Router();

router
    .get('/', (req, res) => res.send({ // /exercise/
        Regiments: exercises.Regiments
    }) )

module.exports = router;