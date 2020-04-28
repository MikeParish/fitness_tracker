const express = require('express');

const exercises = require('../models/Exercises');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        Test: exercises.Exercises
    }) )

module.exports = router;