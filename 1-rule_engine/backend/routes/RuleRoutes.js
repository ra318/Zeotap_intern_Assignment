const express = require('express');
const { createRuleController, getAllRulesController, evaluateRuleController } = require('../controllers/RuleController.js');

const router = express.Router();

router.post('/create', createRuleController);
router.get('/all', getAllRulesController);
router.post('/evaluate', evaluateRuleController);

module.exports = router;
