var express = require('express');
const accountModel = require('../mongoose/accountModel');
var router = express.Router();
console.log(accountModel);
/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: ''});
});
router.get('/account', function (req, res, next) {
    accountModel.then((accountModel) => {
        let accounts = accountModel.find({})
        console.log(accounts)
        res.send(accountModel)
        // res.render('account', {title: '', accounts: accounts});
    })
})
router.post('/account/create', (req, res, next) => {
    accountModel.then((accountModel) => {
        let result = accountModel.create({
            ...req.body,
        })
        res.status(200).send('添加成功')
    }).catch((err) => {
        res.status(500).send('添加失败')
    })
})

module.exports = router;
// //