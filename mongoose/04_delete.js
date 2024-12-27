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
   // let result = await aboutModel.deleteOne({name: '*'})
    let result = await aboutModel.deleteMany({color: 'green'})
    console.log(result)
}
run()

