var express = require('express');
const { RequestHeaderFieldsTooLarge } = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/IndianReservation', function (req, res) {
  res.render('index');
});

router.get('/tkt', function (req, res) {

  var cityfrom = req.query.cityfrom
  var cityto = req.query.cityto
  var Trainname = req.query.Trainname
  var distance = req.query.distance
  var CName = req.query.CName
  var hName = req.query.hName
  var iName = req.query.iName
  var Ages1 = req.query.Ages1
  var Ages2 = req.query.Ages2
  var Ages = req.query.Ages
  var Sexs = req.query.Sexs
  var Sexs1 = req.query.Sexs1
  var Sexs2 = req.query.Sexs2
  var birthType1 = req.query.birthType1
  var birthType2 = req.query.birthType2
  var birthType3 = req.query.birthType3
  
 
  if(cityfrom=='Gwalior' || cityfrom=='Bhopal' || cityfrom=='New Delhi')
  {
    // pic=images/indinRailways.png
  Amount=1.8*distance*3

 

  }

  res.render('tkt', { birthType2:birthType2,birthType3:birthType3,Sexs1:Sexs1,Sexs2:Sexs2,cityfrom: cityfrom, cityto: cityto, Trainname: Trainname, distance: distance, CName: CName, Ages: Ages, Sexs: Sexs, birthType1: birthType1,hName:hName,iName:iName,Ages1:Ages1,Ages2:Ages2,Amount:Amount});
});

module.exports = router;
