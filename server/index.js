const Koa = require('koa');
const mongoose = require('mongoose')
const views = require('koa-views');
const { resolve } = require('path');
const app = new Koa();
const { connect, initSchemas } = require('./database/init');
const router = require('./routes');


(async () => {
  await connect();
  initSchemas();
  // const Movie = mongoose.model('Movie')
  // const movies = await Movie.find({})
  // require('./tasks/movie')
})();

app
.use(router.routes())
.use(router.allowedMethods())

app.use(
  views(resolve(__dirname, './views'), {
    extension: 'pug'
  })
);

app.use(async function(ctx, next) {
  await ctx.render('index', {
    you: 'John',
    me: 'kk'
  });
});

app.listen(2333);
