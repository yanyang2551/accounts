var express = require('express');
const accountModel = require('../mongoose/accountModel');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '' });
});

/* GET accounts list. */
router.get('/account', async function (req, res, next) {
    try {
        // 获取账户模型实例
        const accountModelInstance = await accountModel;
        
        // 查找所有账户
        const accounts = await accountModelInstance.find();
        
        // 返回账户列表
        res.status(200).json(accounts);
    } catch (err) {
        // 处理错误并返回错误响应
        res.status(500).json({ code: 500, message: "error", data: err });
    } finally {
        // 继续处理下一个中间件
        next();
    }
});

// 处理创建账户的 POST 请求
router.post('/account/create', async (req, res, next) => {
    try {
        // 获取账户模型实例
        const accountModelInstance = await accountModel;
        
        // 创建新账户，使用请求体中的数据
        const result = await accountModelInstance.create({
            ...req.body,
        });
        
        // 返回成功响应
        res.json({ code: 200, message: "success", data: result });
    } catch (err) {
        // 处理错误并返回错误响应
        res.status(500).json({ code: 500, message: "error", data: err });
    } finally {
        // 继续处理下一个中间件
        next();
    }
});

module.exports = router;