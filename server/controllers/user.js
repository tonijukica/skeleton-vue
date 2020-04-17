const express = require('express');
const { User } = require('../database');
const router = express.Router();
const { hashPassword } = require('../common/helpers');
const Joi = require('@hapi/joi');

router.use('/register', async(req, res) => {
});
router.use('/login', async(req, res) => {
});
router.use('/profile', async(req, res) => {
})

module.exports = router;
