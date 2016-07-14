var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('booking-engine-edm-ticket-confirmation', {
  	//baseUrl: 'http://hwresponsiveedmmodules-hwrld.rhcloud.com/img/'
  	//baseUrl: 'http://localhost:6323/img/'
  	baseUrl: 'http://localhost:6323/img-booking-engine/'
  });
});

module.exports = router;
