const express = require('express');
const mongoose = require('mongoose'); //interact with DB
const bodyParser = require('body-parser'); //take requests and parse it.

//below is where we define where our item CRUD apis are located in the tree
const items = require('./routes/api/items');

const app = express(); //initialize express


//bodyParser Middleware...
app.use(bodyParser.json());


//we need a mongo DB uri in order to connect to some Database.

// DB Configuration
const db = require('./config/keys').mongoURI;

//connect to Mongo.. with a promise
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// use routes defined in ./routes/api/items
app.use('/api/items', items);

//setup the ports which we want our app to listen to..  the first option
// is the default environment that heroku listens to. Port 5000 is our testing
//port.
  const port = process.env.PORT || 5000;


//we tell our app to listen to the port, callback function a log to console.
  app.listen(port, () => console.log(`Server started on port ${port}`));
