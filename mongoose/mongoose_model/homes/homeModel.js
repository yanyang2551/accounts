const mongoose = require('mongoose')

const homeSchema = require('./homeSchema')

const run = require('../../index')
run(()=>{
    const homeModel = mongoose.model('Home', homeSchema)
    homeModel.create([
        {
            name: '小小',
            hobby: 'basketball'
        },
        {
            name: 'xiaoxiao',
            hobby: 'football'
        }
    ])
    return homeModel
})