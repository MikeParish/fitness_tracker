const express = require('express');

const myprofile = require('../models/MyProfile'); // like a pointer
const dashboard = require('../models/Dashboard');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        MyProf: myprofile.MyProfile[req.userId] //sending object
    }) )
    .post('/profileedit', (req, res) => res.send (
        myprofile.userProfEdit(req.userId, req.body.userNameEdit, req.body.userLocEdit, req.body.userGoalEdit) //sending the function
    ) )

module.exports = router;