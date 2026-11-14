var express = require('express'); // import Express
var router = express.Router(); // initialize a modular Router instance

/* GET home page. */
router.get('/', function(req, res, next) { // renders views/index.ejs and passes the page title for tab and navbar
  res.render('index', { title: 'Home' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) { // renders views/about.ejs
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) { // renders views/projects.ejs
  res.render('projects', { title: 'Projects' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) { // renders views/contact.ejs
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router; // Export the configured router so app.js can mount on the root path
