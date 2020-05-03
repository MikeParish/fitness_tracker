const express = require('express');

const exercises = require('../models/Exercises');

const router = express.Router();

router
    .get('/', (req, res) => res.send({ // /exercises/
        Exers: exercises.Exercises,
        Regiments: exercises.Regiments,
        Completed: exercises.Completed
    }) )
    .post('/addexercises', (req, res) => res.send( // /exercises/addexercises
        exercises.addExercise(req.body.tname, req.body.repsDuration, req.body.description, req.body.videoURL)
    ) )
    .post('/addregiments', (req, res) => res.send( // /exercises/addregiments
        exercises.addRegiment(req.body.index)
    ) )
    .post('/deletefromregiments', (req, res) => res.send( // /exercises/deletefromregiments
        exercises.deleteFromRegiment(req.body.index)
    ) )
    .post('/deletefromexercises', (req, res) => res.send( // /exercises/deletefromexercises
        exercises.deleteFromExercise(req.body.index)
    ) )
    .post('/addcompleted', (req, res) => res.send( // /exercises/addcompleted
        exercises.addCompleted(req.body.index)
    ) )

module.exports = router;