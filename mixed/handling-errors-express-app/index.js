const { response } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('dev'));
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use('/dogs', (req, res, next) => {
  console.log('I Love dogs~');
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  throw new AppError('password required', 401);
  // res.send('SORRY YOU NEED A PASSWORD!!!');
  // res.status(401);
  // throw new Error(401, 'Password requried!');
};

// app.use((req, res, next) => {
//   console.log('FIRST MIDDLEWARE!~');
//   return next();
// });
// app.use((req, res, next) => {
//   console.log('SECOND MIDDLEWARE!~');
//   return next();
// });

app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send('Home Page');
});

app.get('/error', (req, res) => {
  chicken.fly();
});

app.get('/dogs', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send('wan~');
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send('secret');
});

app.get('/admin', (req, res) => {
  throw new AppError('You are not an Admin!', 403);
});

app.use((req, res) => {
  res.status(404).send('NOT FOUND!');
});

// app.use((err, req, res, next) => {
//   console.log('**********************************');
//   console.log('*************ERROR****************');
//   console.log('**********************************');
//   // res.status(500).send('ERROR');
//   console.log(err);
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong' } = err;
  // console.log(status);
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('App is running on localhost: 3000');
});
