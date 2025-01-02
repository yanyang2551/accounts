const db = require('./index');
module.exports = db.then(mongoose => {
    const Schema = mongoose.Schema;
//创建文档的结构对象
    const Account = new Schema({
        title: {
            type: String, required: true
        },
        time: Date,
        type: {
            type: Number, default: -1
        },
        account: {
            type: Number, required: true
        },
        remarks: {
            type: String
        }
    })
    // 创建模型对象
    return mongoose.model('Account', Account)

})

