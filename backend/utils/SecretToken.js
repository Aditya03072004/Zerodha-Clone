const jwt = require('jsonwebtoken');

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'defaultsecret', {
    expiresIn: '1h',
  });
};

module.exports = { createSecretToken };
