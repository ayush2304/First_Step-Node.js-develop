const routes = require('express').Router();
const parents = require ('./routes/registration/parent_routes');
//const bodyParser= require('body-parser')
//const multer = require('multer');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var programsRouter=require('./routes/FormData/Programs');
var centreRouter=require('./routes/FormData/Centres');

routes.use('/parents', parents);
routes.use('/', indexRouter);
routes.use('/users', usersRouter);
routes.use('/programs', programsRouter);
routes.use('/centres', centreRouter);



module.exports = routes;
