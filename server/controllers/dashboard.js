const express = require('express');

//const dashboard = require('../models/Dashboard');
const exercises = require('../models/Exercises');   //get different pages to interact with each other with different models
                                                    //safer to have these two models in the server

const router = express.Router();

router
    .get('/', (req, res) => res.send({ // /exercises/
        Regiments: exercises.Regiments,
        Completed: exercises.Completed
    }) )

module.exports = router;