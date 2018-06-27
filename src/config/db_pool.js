const mysql = require('promise-mysql');
const dbConfig = {
  host: 'ds.csi6jhoj9h5s.ap-northeast-2.rds.amazonaws.com',
  port: '3306',
  user: 'bghgu',
  password: 'asas1212',
  database: 'test',
  //pool 커넥션 개체는 10개
  connectionLimit: 10,
  waitForConnection : true
};
const pool = mysql.createPool(dbConfig);

module.exports = pool;
