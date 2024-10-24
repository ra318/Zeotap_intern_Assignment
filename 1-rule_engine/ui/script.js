// Function to fetch all rules and populate the dropdown for evaluation
async function fetchRules() {
    const response = await fetch('http://localhost:5000/rules/all');
    const data = await response.json();
    const ruleSelect = document.getElementById('ruleSelect');
    
    ruleSelect.innerHTML = ''; // Clear existing options
    data.rules.forEach(rule => {
      const option = document.createElement('option');
      option.value = rule._id;
      option.textContent = rule.ruleString;
      ruleSelect.appendChild(option);
    });
  }
  
  // Fetch rules on page load
  window.onload = fetchRules;
  
  // Submit new rule form
  document.getElementById('ruleForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const ruleString = document.getElementById('rule').value;
  
    const response = await fetch('http://localhost:5000/rules/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ruleString })
    });
  
    const result = await response.json();
    alert('Rule created successfully');
    fetchRules(); // Refresh rules in dropdown
  });
  
  // Combine all rules
  document.getElementById('combineBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/rules/combine', {
      method: 'POST'
    });
    
    const result = await response.json();
    alert('Rules combined successfully');
  });
  
  // Evaluate a selected rule
  document.getElementById('evaluateForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Get selected rule and input data
    const ruleId = document.getElementById('ruleSelect').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
    const experience = document.getElementById('experience').value;
  
    const data = { age: Number(age), department, salary: Number(salary), experience: Number(experience) };
  
    // Call API to evaluate the rule
    const response = await fetch('http://localhost:5000/rules/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ruleId, data })
    });
  
    const result = await response.json();
    document.getElementById('result').textContent = 'Evaluation Result: ' + result.result;
  });
  