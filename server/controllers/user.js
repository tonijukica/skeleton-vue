const express = require('express');
const { User } = require('../database');
const router = express.Router();
const { hashPassword, registrationSchema } = require('../common/helpers');
const jwt = require('jsonwebtoken');
const auth = require('../common/auth');

router.use('/register', async(req, res) => {
  const { username, email, password } = req.body;
  if(!username || !email || !password)
    return res.status(400).send('Missing required parameters');

  const user = await User.findOne({
    where: {
      username
    }
  });
  if(user)
    return res.status(400).send('User already exists');

  registrationSchema.validateAsync({
    username,
    email,
    password
  }).then(async(valid) => {
    const newUser = await User.create({
      username: valid.username,
      email: valid.email,
      passwordHash: await hashPassword(valid.password)
    });
    return res.json(newUser);
  }).catch(err => res.status(400).send(err.message));
});

router.use('/login', async(req, res) => {
  const { username, password } = req.body;
  if(!username || !password)
    return res.status(400).send('Missing required parameters');

  const user = await User.findOne({
    where: {
      username
    }
  });
  if(!user)
    return res.status(400).send('Invalid username/password combination');

  const passwordHash = await hashPassword(password);
  if(user.passwordHash === passwordHash){
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({
      id: user.id,
      username: user.username
    }, secret, {
      expiresIn: '5h'
    });
    return res.json({
      username: user.username,
      token
    })
  }
  else
    return res.status(400).send('Invalid username/password combination');
});

router.use('/profile', auth, async(req, res) => {
  const { id } = req.user;
  const user = await User.findOne({
    where: {
      id
    }
  });
  return res.json({
    id,
    username: user.username,
    email: user.email,
    createdAt: user.createdAt
  });
});

module.exports = router;
