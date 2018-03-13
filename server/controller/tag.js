import Tag from './../mongoose'

export const saveTag = async (ctx, next) => {

    const tagList = ctx.request.body.tags

    tagList.forEach((curr) => {
        let result = await Tag.findOne({ name: curr }).exec()
        if (!result) {
            const data = await Tag.create({ name: curr, number: 1 })
        } else {
            let number = result.number++
            const data = await Tag.findOneAndUpdate({ name: curr },{ name: curr, number }).exec()
        }
    })
    next()
}
export const fetchTag = async (ctx, next) => {
    
    const data = await Tag.find({})
    if(data.length) {
        ctx.state = 200
        ctx.body = {
            success:true,
            data
        }
    }else {
        ctx.body ={
            success:false
        }
    }
}