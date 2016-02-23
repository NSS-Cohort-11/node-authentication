'use strict';

const express = require('express');
const router = express.Router();

router.use(require('./home/routes'));
router.use(require('./user/routes'));

module.exports = router;
