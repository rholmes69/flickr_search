var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// will match requests to /about
router.get('/about', function (req, res) {
  res.send('<h1>about</h1>')
})

router.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

module.exports = router;
