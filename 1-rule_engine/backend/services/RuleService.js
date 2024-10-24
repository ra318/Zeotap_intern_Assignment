
const Rule = require('../models/Rule.js');

const { createASTFromRule } = require('./ASTService');

const createRule = async (ruleString) => {
  const ast = createASTFromRule(ruleString);
  const rule = new Rule({ ruleString, ast });
  await rule.save();
  return rule;
};

const getAllRules = async () => {
  return await Rule.find();
};

module.exports = { createRule, getAllRules };
