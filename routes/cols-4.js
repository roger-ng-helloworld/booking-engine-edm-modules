var express = require('express');
var router = express.Router();

/* GET bkgd-module page. */
router.get('/', function(req, res) {
  res.render('cols-4', { 
  	//baseUrl: 'http://hwresponsiveedmmodules-hwrld.rhcloud.com/img/'
  	//baseUrl: 'http://localhost:6323/img/'
  	baseUrl: 'http://image.news.helloworld.com.au/lib/fe821272776d0d757c/m/2/'
  });
});

module.exports = router;