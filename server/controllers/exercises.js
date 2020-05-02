const express = require('express');

const exercises = require('../models/Exercises');

const router = express.Router();

router
    .get('/', (req, res) => res.send({ // /exercise/
        Exers: exercises.Exercises,
        Regiments: exercises.Regiments
    }) )
    .post('/addexercises', (req, res) => res.send( //this works /exercise/addexercises
        exercises.addExercise(req.body.tname, req.body.repsDuration, req.body.description, req.body.videoURL)
    ) )
    .post('/addregiments', (req, res) => res.send( //this works /exercise/addexercises
        //exercises.addRegiment(req.body.tname, req.body.repsDuration, req.body.description, req.body.videoURL)
        exercises.addRegiment(req.body.index)
    ) )
    .post('/deletefromregiments', (req, res) => res.send( //this works /exercise/addexercises
        //exercises.addRegiment(req.body.tname, req.body.repsDuration, req.body.description, req.body.videoURL)
        exercises.deleteFromRegiment(req.body.index)
    ) )

module.exports = router;