// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//test
const test = require('./controller/test');
router.use('/test', test);

//login
const login = require('./controller/login');
router.use('/login', login);

//signup
const signup = require('./controller/signup');
router.use('/signup', signup);

//signup
const seqyelizeTest = require('./controller/seqyelizeTest');
router.use('/seq', seqyelizeTest);

module.exports = router;
