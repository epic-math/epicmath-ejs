exports.render = function(req, res) {
    res.render('view1', {
    	title: 'View 1 - EpicMath powered by MEAN',
    	user: req.user ? req.user.username : ''
    });
};