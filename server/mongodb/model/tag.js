import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tagSchema = new Schema({
    name: { type: String, default: '' },
    number: Number
})
export default mongoose.model('tag', tagSchema)