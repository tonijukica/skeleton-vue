const { promisify } = require('util');
const crypto = require('crypto');
const Joi = require('@hapi/joi');
const pbkdf2 = promisify(crypto.pbkdf2);
const salt = process.env.SALT_SECRET;

const hashPassword = async(password) => {
  const hashBuffer = await pbkdf2(password, salt, 64, 100, 'SHA512');
  const hash = hashBuffer.toString('hex');
  return hash;
}

const registrationSchema = Joi.object({
  username: Joi.string().
    min(3).max(30)
    .required()
    .error(
      new Error('Invalid username')
    ),
  email: Joi.string().
    email()
    .required()
    .error(
      new Error('Invalid email')
    ),
  password: Joi.string()
  .min(5).max(30)
  .error(
    new Error('Password must be atleast 5 characters long')
  )
});

module.exports = {
  hashPassword,
  registrationSchema
}
