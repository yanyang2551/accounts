// 1. 安装mongoose
// 2. 导入mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const run = async () => {
    // 3. 连接mongodb服务
    await mongoose.connect('mongodb://127.0.0.1:27017/my_database')

    const objectId = Schema.ObjectId;
    // 5.创建文档的结构对象
    const User = new Schema({
        id: objectId,
        name: {type: String, required: true,default: '大'},
        age: Number
    });
    // 添加属性
    User.add({color:{default: 'blue',type:'string',enum:['green','red','yellow','green','blue','red']},});
    // 6.创建模型对象  对文档操作的封装对象
    const UserModel = mongoose.model('User', User)
    // 7.新增
    UserModel.create([
        {
            name: '伯伯7',
            color: 'yellow',
        },
    ]).then(result => {
        console.log(result);
    })
}

run()

