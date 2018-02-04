'use strict';
module.exports = function(app) {
  var productController = require('../controllers/productController');

  // todoList Routes
    app.route('/getSpec')
    .post(productController.getSpec);
};