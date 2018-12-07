const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const cors          = require('cors');
const passport      = require('passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const configureJwtStrategy = require('./utilities/jwt-strategy');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

configureJwtStrategy(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
