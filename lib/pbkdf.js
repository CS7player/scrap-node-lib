const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

exports.checkPassword = async (password, hashPassword) => {
  try {
    const match = await bcrypt.compare(password, hashPassword);
    if (match) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};
