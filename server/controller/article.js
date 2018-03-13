import Article from './../mongodb/model/article'

export const saveArticle = async (ctx, next) => {
    const data = ctx.request.body
    try {
        const article = new Article(data)
        const result = await article.save()
        ctx.state = 201
        ctx.body = {
            success: true,
            data: result
        }
    } catch (error) {
        ctx.body = {
            succss: true,
            error
        }
    }
}
//获取文章列表
export const articleList = async (ctx, next) => {
    const data = await Article.find({})
    if (data.length) {
        ctx.state = 201
        ctx.body = {
            success: true,
            data
        }
    } else {
        ctx.body = {
            success: false,
            data: '数据库暂无此数据！'
        }
    }
}