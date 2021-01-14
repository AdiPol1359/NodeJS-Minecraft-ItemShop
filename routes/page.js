const express = require('express');

const pageController = require('../controllers/page');

const router = express.Router();

router.get('/', pageController.getIndex);
router.get('/regulamin', pageController.getRules);

router.post('/payment', pageController.postPayment);


module.exports = router;