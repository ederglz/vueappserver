var express = require('express');
var router = express.Router();
var seriesData = require('../mock/data.json');
router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});
/* GET home page. */
router.get('/:id', function(req, res, next) {
  if (req.params && req.params.id) {
    return res.json(seriesData);
  }
  next();
});

module.exports = router;
