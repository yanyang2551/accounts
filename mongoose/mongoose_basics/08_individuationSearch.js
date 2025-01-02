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

    // 个性化读取
    // 设置字段 select
    // let result = await aboutModel.find()
    //     .select({name: 1,age:1,_id:0})
    //     .exec()
    // 数据排序  sort  1 升序  -1 倒序
    // let result = await aboutModel.find()
    //     .select({name: 1, age: 1, _id: 0})
    //     .sort({age: -1})
    //     .exec()
    // 数据截取：  skip 跳过   limit 限定
    let result = await aboutModel.find()
        .select({name: 1, age: 1, _id: 0})
        .sort({age: -1})
        .limit(3).skip(3)
        .exec()

    console.log(result)
}
run()