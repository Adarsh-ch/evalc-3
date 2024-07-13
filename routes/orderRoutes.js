const express = require('express');
const router = express.Router();
const orderController = require('../contollers/orderController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/customer/:customerId', isAuthenticated, orderController.getOrdersByCustomer);

module.exports = router;
