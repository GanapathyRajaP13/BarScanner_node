const express = require('express');
const router = express.Router();
const tutorialController = require('../controller');

router.post('/itemFetch', tutorialController.itemFetch);

router.post('/listItemCode', tutorialController.listItemCode);

module.exports = router;