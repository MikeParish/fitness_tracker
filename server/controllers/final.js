const express = require('express');

const final = require('../models/Final');

const router = express.Router();

router
    .get('/', (req, res) => res.send({                      // /exercises/
        Exers: exercises.Exercises,
        Regiments: exercises.Regiments,
        Completed: exercises.Completed,
        Feed: exercises.Feed
    }) )
    .post('/addexercises', (req, res) => res.send(          // /exercises/addexercises
        exercises.addExercise(req.body.tname, req.body.repsDuration, req.body.description, req.body.videoURL)
    ) )

module.exports = router;