import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: { type: String, default: '' },
    // number: Number
    // pathname: { type: String, default: '' }
})

export default mongoose.model('category', categorySchema)