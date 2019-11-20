exports.operacion_restar = function(req, res){
    res.send(req.query.p1 + '-'+ req.query.p2 +' = '+ (req.query.p1 - req.query.p2));
}