// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//test
router.use('/test', require('./test'));

module.exports = router;
