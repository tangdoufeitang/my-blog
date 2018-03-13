import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    diaplayName: String,
    password: String,
    email: String
})
mongoose.model('user', userSchema)