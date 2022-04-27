const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const session = require('express-session');
const postController = require('./controllers/postController');
const pug = require('pug');
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
const validator = require('validator');
const flash = require('req-flash');
const passport = require('passport-local');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


const Post = require('./model/Post');
const sequelize = require('./db');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({
  db: sequelize,
});

var LocalStrategy = require('passport-local');

app.use(flash())
app.use(routes);
  sequelize.sync({force: true})
  .then((connect) => {
    console.log('connected, booyah')
  })
  .then(user => {
    console.log(user)
  })
  .catch(err => console.log(err));
  app.listen(port, () => {
    console.log('listening on port ' + port);
  });