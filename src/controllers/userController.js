const User = require('../models/User');
const { verifyToken } = require('../utils/jwt');

const getUserDetails = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findById(userId).select('-password -otp -otpExpiry');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

const addDetails = async (req, res) => {
  try {

    const {userId} = req.user;

    const { location, age, workDetails } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.location = location;
    user.age = age;
    user.workDetails = workDetails;
    await user.save();

    res.status(200).json({ message: 'User details updated successfully' });
  } catch (err) {
    console.error('Error updating user details:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getUserDetails,
  addDetails,
};

