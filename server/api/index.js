'use strict'

const router = require('express').Router();

module.exports = router;

router.use('/ingredients', require('./ingredients'));
router.use('/recipes', require('./recipes'));
