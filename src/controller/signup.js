const express = require('express');
const router = express.Router();
const jwt = require('../module/jwt.js');
const db = require('../module/pool.js');
const hash = require('../module/hash.js');

router.post('/', async(req, res, next) => {
    const email = req.body.email;
    let password = req.body.password;

    const insertNewUser = 'insert into user set ?';

    password = hash.encoding(password);

    let newUser = {
        email: email,
        password: password,
    };

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
