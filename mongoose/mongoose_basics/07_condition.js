const mongoose = require('mongoose')
const run = async () => {
    await mongoose.connect(`mongodb://127.0.0.1:27017/my_database`)

    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
//创建文档的结构对象
    const About = new Schema({
        id: ObjectId,
        name: String,
        age: Number,
        color: {
            type: String,
            enum: ['green', 'red', 'yellow'],

        }
    })
// 创建模型对象
    const aboutModel = mongoose.model('About', About)
    // await aboutModel.create([
    //     {
    //         name: '大海',
    //         age: 31,
    //         color: 'green',
    //     },
    //     {
    //         name: '大海2',
    //         age: 31,
    //         color: 'yellow',
    //     },
    //     {
    //         name: '大海3',
    //         age: 31,
    //         color: 'green',
    //     },
    //     {
    //         name: '大海4',
    //         age: 31,
    //         color: 'red',
    //     },
    // ])
    // 删除一条

    // 条件控制
    // 运算符
    // let result = await aboutModel.find({age: {$gt:18}}) // 大于
    // let result = await aboutModel.find({age: {$gte:18}}) // 大于等于
    // let result = await aboutModel.find({age: {$lt:18}}) // 小于
    // let result = await aboutModel.find({age: {$lte:18}}) // 小于等于
    // let result = await aboutModel.find({$or: [{age:15},{age:30}]})
    // let result = await aboutModel.find({$and: [{ age: 18 },{color: 'green' }]})



    // 正则
    // let result = await aboutModel.find({name: /3/})
    // let result = await aboutModel.find({name: new RegExp(2)})
    console.log(result)
}
run()