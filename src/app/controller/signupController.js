const express = require('express');
const router = express.Router();
const db = require('../module/pool.js');
const signup = require('../model/req/SignupReq');

router.post('/', async(req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    const QUERY = 'insert into user set ?';

    let newUser = signup.new(email, password);

    let inserted = await db.execute(insertNewUser, newUser);
    
    if(inserted == undefined) {
        res.status(405).send({
            message: 'please check email or username'
        });
    }else {
        res.status(201).send({
            message: "success",
            id: inserted.insertId
        });
    }
});

module.exports = router;
