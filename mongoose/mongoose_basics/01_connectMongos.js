// 1. 安装mongoose
// 2. 导入mongoose
const mongoose = require('mongoose');
// 3. 连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/test');
// 4. 设置连接成功
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected!')
    // 5.创建文档的结构对象
    const BookSchema = new mongoose.Schema({
        name: String,
        age: Number,
        hobby: String,
    })
    // 6.创建模型对象  对文档操作的封装对象
    let bookModel = new mongoose.model('books', BookSchema);
    console.log(bookModel);
    // 7. 新增
    // bookModel.create({
    //     name:'aaa',
    //     age: 1,
    //     hobby: 'hhh',
    // }).then((result) => {
    //     console.log('result',result);
    // })
});
// 设置连接错误的回调
mongoose.connection.on('error', (err) => {
    console.error('连接失败');
})
// 设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('MongoDB closed!')
})