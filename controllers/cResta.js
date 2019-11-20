exports.operacion_restar = function(req, res){
    res.send(req.query.a + '-'+ req.query.b +' = '+ (req.query.a - req.query.b));
}