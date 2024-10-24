## Overview
This repository contains two main applications:
1. **Rule Engine with Abstract Syntax Tree (AST)**: A rule engine that determines user eligibility based on dynamic rules.
2. **Real-Time Weather Monitoring System**: A weather monitoring system that collects real-time data from OpenWeatherMap API, performs rollups and aggregates, and provides alerts.

---

## Application 1: Rule Engine with AST

### Objective
Develop a 3-tier rule engine with a UI, API, and Backend to evaluate user eligibility based on attributes like age, department, income, etc. The engine uses Abstract Syntax Tree (AST) to represent rules dynamically.

### Data Structure
- The AST is represented by a `Node` data structure with the following fields:
  - `type`: String indicating node type ("operator" or "operand").
  - `left`: Reference to the left child node.
  - `right`: Reference to the right child node.
  - `value`: Optional value for operand nodes (e.g., number for comparisons).

### Data Storage
- A database is used to store the rules and application metadata.
- Example schema:
  - **Rules Table**: Stores rules with their corresponding AST structures.
  - **Users Table**: Stores user data (e.g., age, department, income).

### Sample Rules
- `rule1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"`
- `rule2 = "((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)"`

### API Design
1. **create_rule(rule_string)**: Generates an AST from a rule string.
2. **combine_rules(rules)**: Combines multiple rules into a single AST.
3. **evaluate_rule(JSON data)**: Evaluates the AST against user data.

### Test Cases
1. Verify AST representation of individual rules using `create_rule`.
2. Combine rules and ensure the resulting AST is correct.
3. Evaluate sample JSON data with the combined rule.
4. Test error handling for invalid rules or data formats.

### Bonus Features
- Modify existing rules within `create_rule`.
- Add support for user-defined functions in the rule language.

---

## Application 2: Real-Time Weather Monitoring System

### Objective
Create a real-time weather data processing system that monitors weather conditions, performs rollups, and provides insights using data from the OpenWeatherMap API.

### Data Source
- Weather data is retrieved from the [OpenWeatherMap API](https://openweathermap.org/).
- Focused parameters:
  - `main`: Main weather condition (Rain, Snow, etc.)
  - `temp`: Current temperature (Celsius)
  - `feels_like`: Perceived temperature (Celsius)
  - `dt`: Timestamp of data update.

### Processing and Analysis
- The system calls the API at regular intervals (e.g., every 5 minutes) for weather data from major Indian cities.
- Temperature conversion from Kelvin to Celsius is applied.

### Rollups and Aggregates
1. **Daily Weather Summary**:
   - Calculate daily average, max, min temperature.
   - Determine the dominant weather condition.
2. **Alerting Thresholds**:
   - User-configurable thresholds for weather conditions.
   - Alerts triggered if conditions exceed thresholds.

### Test Cases
1. Verify connection to OpenWeatherMap API.
2. Test temperature conversion logic.
3. Simulate daily weather updates and ensure correct rollups.
4. Verify alerting system for threshold breaches.

### Bonus Features
- Add support for additional weather parameters (e.g., humidity, wind speed).
- Implement historical trends and visualizations for weather data.

---
