import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import router from './router'
import './mongodb'

const app = new Koa()

app.use(router.routes())
app.listen(4000)
console.log("listen in localhost:4000")