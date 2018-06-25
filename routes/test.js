const express = require('express');
const router = express.Router();

const db = require('../module/pool.js');

//test
router.get('/', async(req, res) => {
    const selectTime = "select l.index, u.name,l.time, l.photo from LOG l join USER u on l.id = u.id ORDER BY l.index asc"
    //let data = await db.FindAll(selectTime);
    console.log(selectTime);
    res.status(200).send("get test");
});

module.exports = router;
