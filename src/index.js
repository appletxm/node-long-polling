const Koa = require('koa')
const app = new Koa()

let a = 1

app.use(async (ctx, next) => {
  a += 1
  console.info('==1==', a)
  next(ctx)
})

app.use(async (ctx) => {
  a += 1
  console.info('==2==', a)
// app.keys = ['im a newer secret', 'i like turtle']
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256')
// ctx.cookies.set('name', 'tobi', { signed: true })

  ctx.body = a
})

// app.use(async ctx => {
//   ctx.body = '' + a
// })

app.listen(3000, () => {
  console.info('server start at http://localhost:3000')
})
