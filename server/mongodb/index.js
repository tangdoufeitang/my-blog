import mongoose from 'mongoose'
import config from './../config'

const dbpath = config.mongodb.dbpath
const datebase = () => {
    
    mongoose.set('debug', true)

    mongoose.connect(dbpath, { keepAlive: true })

    const db = mongoose.connection
    // 如果断开会重连
    db.on('disconnected', () => {
        mongoose.connect(dbpath, { keepAlive: true })
    })
    db.on('error', error => console.error(error))
    db.on('open', () => console.log("connected to MongoDB", dbpath))
}
datebase()