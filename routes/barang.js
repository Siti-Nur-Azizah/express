var express = require('express');
var router = express.Router();
const barang = require('../model/barang');

router.get('/', function(req, res, next) {
  res.render('Dashboard/index');
});


router.post('/store', async function(req, res){
    barang.store(req.body, function(err,result){
        //redirect ke halaman yang diinginkan
        res.redirect('/barang');
    });
});

module.exports = router;