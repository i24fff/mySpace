const toolCtr=require('./controllers/tool');
const indexCtr=require('./controllers/index');
const userCtr=require('./controllers/user');
const articleCtr=require('./controllers/article');
const fileCtr=require('./controllers/file');
const writerCtr=require('./controllers/writer');

module.exports=function(router){
	router.get('/', indexCtr.index)
		.get('/page/:index',indexCtr.index)
		.get('/tag/:id/:index',indexCtr.tag)
		.get('/article/:id',articleCtr.article)
		.get('/tool',async (ctx,next)=>{
			ctx.body = await ctx.render('tool',{title:'tool'});
		})
		.get('/signIn',async ctx=>{
			ctx.body= await ctx.render('signIn');
		})
		.get('/signUp',async ctx=>{
			ctx.body= await ctx.render('signUp');
		})
		.get('/writer',writerCtr.writer)
		.post('/uploadFile',fileCtr.uploadFile)
		.get('/createNew',articleCtr.create)
		.get('/getArticle',articleCtr.getArticle)
		.get('/getUserArticles',articleCtr.getUserArticles)
		.post('/saveArticle',articleCtr.saveArticle)
		.get('/addTag',writerCtr.addTag)
		.get('/deleteTag',writerCtr.deleteTag)
		.get('/publish',articleCtr.setPublish)
		.get('/delete',articleCtr.setDelete)
		.post('/login',userCtr.login)
		.post('/register',userCtr.register)
		.post('/sql',toolCtr.query);

};