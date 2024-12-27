var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/account', function(req, res, next) {
  res.render('account',{title: 'Account'});
})
// router.get('/account/create', function(req, res, next) {
//   res.send('添加记录');
// })

module.exports = router;
// //