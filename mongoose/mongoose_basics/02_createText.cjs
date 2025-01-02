// Using Node.js `require()`
const mongoose = require('mongoose');
const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/my_database');
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const BlogPost = new Schema({
        author: ObjectId,
        title: String,
        body: String,
        date: Date
    });

    const MyModel = mongoose.model('teacher', BlogPost);
    // Insert one new `Character` document

    let result = await MyModel.create([
        {
            title: '今天天气很冷3',
            body: '波波',
            date: new Date(),
        },
        {
            title: '今天天气很冷4',
            body: '波波',
            date: new Date(),
        }
    ],);
    console.log(result);
}
run()
