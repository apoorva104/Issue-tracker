const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/issueTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Include route files
const indexRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const issueRoutes = require('./routes/issues');
//const homeRoute = require('./routes/home');

app.use('/', indexRoutes);
app.use('/projects', projectRoutes);
app.use('/issues', issueRoutes);
//app.use('/', homeRoute);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
