const express = require('express');
const mongoose = require('mongoose');
const cookiesSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(cookiesSession({
  maxAge: 30 * 24 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('APP Listening'));