var express = require('express');
var operacion = require('../controllers/cResta');
var app = express();

app.get('/resta', operacion.operacion_restar);

// app.get('/resta', function (req, res) {
//     res.send(req.query.a + '-'+ req.query.b +' = '+ (req.query.a - req.query.b));
// });

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

module.exports = app;