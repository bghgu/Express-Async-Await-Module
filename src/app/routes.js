// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//test
const test = require('./controller/testController');
router.use('/test', test);

//login
const login = require('./controller/loginController');
router.use('/login', login);

//signup
const signup = require('./controller/signupController');
router.use('/signup', signup);

module.exports = router;
