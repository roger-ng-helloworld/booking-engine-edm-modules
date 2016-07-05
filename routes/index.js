var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	//baseUrl: 'http://hwresponsiveedmmodules-hwrld.rhcloud.com/img/'
  	//baseUrl: 'http://localhost:6323/img/'
  	baseUrl: 'http://image.news.helloworld.com.au/lib/fe821272776d0d757c/m/2/'
  });
});

module.exports = router;
