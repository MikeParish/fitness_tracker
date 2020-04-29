const express = require('express');

const exercises = require('../models/Exercises');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        Exers: exercises.Exercises
    }) )

module.exports = router;