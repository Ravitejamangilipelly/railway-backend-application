const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const { adminMiddleware } = require('../middlewares/adminMiddleware');

router.post('/trains', adminMiddleware, trainController.addTrain);
router.get('/trains', trainController.getSeatAvailability);

module.exports = router;
