const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//创建文档的结构对象
module.exports = new Schema({
    id: ObjectId, name: String, hobby: {
        type: String, enum: ['basketball', 'football', 'ping pong','badminton'],
    }
})