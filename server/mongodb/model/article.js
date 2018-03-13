import mongoose, { SchemaTypes } from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: String,
    author: String,
    content: String,
    summary: String,
    pathName: { type: String, default: '' },
    public: { type: Boolean, default: false },
    meta: {
        createdAt: { type: Date, default: new Date() },
        updatedAt: { type: Date, default: new Date() }
    },
    tags: [{ type: Schema.Types.ObjectId, ref: 'tag' }],
    category: { type: Schema.Types.ObjectId, ref: 'category' }
})

articleSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
})

export default mongoose.model('article', articleSchema)