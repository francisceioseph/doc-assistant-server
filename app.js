const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const cors          = require('cors');
const passport      = require('passport');

const indexRouter         = require('./routes/index');
const usersRouter         = require('./routes/users');
const profilesRouter      = require('./routes/profiles');
const telephoneRouter     = require('./routes/telephones');
const appointmentsRouter  = require('./routes/appointments');
const examsRouter         = require('./routes/exams');
const surgeriesRouter     = require('./routes/telephones');
const appTypesRouter      = require('./routes/appointment-types');
const examTypesRouter      = require('./routes/exam-types');

import specialtiesRouter from './routes/specialties';

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
app.use('/profiles', profilesRouter);
app.use('/telephones', telephoneRouter);
app.use('/appointments', appointmentsRouter);
app.use('/appointment-types', appTypesRouter);
app.use('/exam-types', examTypesRouter);
app.use('/exams', examsRouter);
app.use('/surgeries', surgeriesRouter);
app.use('/specialties', specialtiesRouter);

module.exports = app;
