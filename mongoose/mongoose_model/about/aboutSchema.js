const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//创建文档的结构对象
module.exports = new Schema({
    id: ObjectId, name: String, age: Number, color: {
        type: String, enum: ['green', 'red', 'yellow'],

    }
})