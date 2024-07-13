const Review = require('../models/Review');
const User = require('../models/User');

exports.getReviewsForBook = async (req, res) => {
  try {
    const reviews = await Review.find({ bookId: req.params.id }).populate('userId', 'username');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
