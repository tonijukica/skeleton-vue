'use strict';
const jwt = require('jsonwebtoken');

function authUser(req, res, next){
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    jwt.verify(token, secret, (err, data) => {
      if(err)
        return res.status(401).send('Invalid token');
      req.user = data;
      next();
    });
  }
  else
    return res.status(400).send('No authorization headers');
}

module.exports = authUser;
