const mongoose = require('mongoose')
const run = require('../../index');
run(async ()=>{
    //创建文档的结构对象
    const About = require('./aboutSchema');
    // 创建模型对象
    const aboutModel = mongoose.model('About', About)
    let result = await aboutModel.create([{
        name: '大22', age: 21, color: 'green',
    },])
    console.log(result)
    return aboutModel
});
module.exports = run
