exports.render = function(req, res) {
    res.render('index', {
    	title: 'EpicMath powered by MEAN',
    	user: req.user ? req.user.username : ''
    });
};