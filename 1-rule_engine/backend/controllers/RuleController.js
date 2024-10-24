
const { createRule, getAllRules } = require('../services/RuleService.js');
const { evaluateAST } = require('../services/ASTService.js');

const createRuleController = async (req, res) => {
  try {
    const { ruleString } = req.body;
    const rule = await createRule(ruleString);
    res.status(201).json({ message: 'Rule created', rule });
  } catch (error) {
    res.status(500).json({ message: 'Error creating rule', error });
  }
};

const getAllRulesController = async (req, res) => {
  try {
    const rules = await getAllRules();
    res.status(200).json({ rules });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rules', error });
  }
};

const evaluateRuleController = async (req, res) => {
  try {
    const { ruleId, data } = req.body;
    const rule = await Rule.findById(ruleId);
    if (!rule) {
      return res.status(404).json({ message: 'Rule not found' });
    }
    const result = evaluateAST(rule.ast, data);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Error evaluating rule', error });
  }
};

module.exports = { createRuleController, getAllRulesController, evaluateRuleController };
