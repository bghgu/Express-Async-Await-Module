const express = require('express');
const router = express.Router();

let models = require('../../models');
const db = require('../module/pool.js');

//test
router.get('/', async(req, res) => {
    console.log("sequelize select")

    models.user.findAll().then( result => {
        res.render("show", {
          posts: result
        });
      });

    res.status(200).send("data");
});

module.exports = router;
