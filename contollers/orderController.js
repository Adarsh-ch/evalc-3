const db = require('../config/db');

exports.getOrdersByCustomer = async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const [orders] = await db.query('SELECT * FROM orders WHERE userId = ?', [customerId]);

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
