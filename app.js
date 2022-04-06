const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const postController = require('./controllers/postController');
const pug = require('pug');
const bodyParser = require('body-parser')
const sequelize = require('./db');
const cookieParser = require("cookie-parser");
const User = require('./model/User');
const session = require('express-session');
const validator = require('validator');
const flash = require('req-flash');
const passport = require('passport-local');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(flash())
app.use(cookieParser());

var LocalStrategy = require('passport-local');

app.use(routes);
sequelize
.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.sync({force: true})
  .then(connect => console.log('connected, booyah'))
  .catch(err => console.log(err));
  app.listen(port, () => {
    console.log('listening on port' + port);
  });

// var strategy = new LocalStrategy(function verify(username, password, cb) {
//   sequelize.find('SELECT * FROM users WHERE username = ?', [ username ], function(err, user) {
//     if (err) { return cb(err); }
//     if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

//     crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//       if (err) { return cb(err); }
//       if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//         return cb(null, false, { message: 'Incorrect username or password.' });
//       }
//       return cb(null, user);
//     });
//   });
// });

