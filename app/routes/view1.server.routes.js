module.exports = function(app) {
    var view1 = require('../controllers/view1.server.controller');
    app.get('/view1', view1.render);
};