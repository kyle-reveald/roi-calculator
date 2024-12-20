```jsx
import React, { useState } from 'react';

const ROICalculator = () => {
  const [endpoints, setEndpoints] = useState(500);
  const [securityStaff, setSecurityStaff] = useState(3);
  const [monthlyAlerts, setMonthlyAlerts] = useState(5000);
  const [securitySalary, setSecuritySalary] = useState(125000);
  const [triageTime, setTriageTime] = useState(15);
  const [averageDwellTime, setAverageDwellTime] = useState(24);

  const calculateROI = () => {
    const hourlyRate = securitySalary / 2080;
    const currentTriageHours = (monthlyAlerts * (triageTime / 60));
    const automatedTriageHours = currentTriageHours * 0.2;
    const hoursSaved = currentTriageHours - automatedTriageHours;
    const monthlySavings = hoursSaved * hourlyRate;
    const toolSavings = (endpoints * 2500 * 0.2) / 12;
    const riskReduction = (4350000 * 0.15) / 12;
    
    return {
      hoursSaved: Math.round(hoursSaved),
      monthlySavings: Math.round(monthlySavings),
      riskReduction: Math.round(riskReduction),
      toolSavings: Math.round(toolSavings),
      totalMonthly: Math.round(monthlySavings + riskReduction + toolSavings)
    };
  };

  const results = calculateROI();

  return (
    <div style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
      <h1>Reveald Security Operations ROI Calculator</h1>
      <p>Calculate potential cost savings and efficiency gains from security automation</p>

      <div style={{marginTop: "20px"}}>
        <div style={{marginBottom: "20px"}}>
          <label>
            Number of Endpoints
            <input 
              type="number"
              value={endpoints}
              onChange={(e) => setEndpoints(Number(e.target.value))}
              style={{display: "block", marginTop: "5px", padding: "5px"}}
            />
          </label>
        </div>

        <div style={{marginBottom: "20px"}}>
          <label>
            Security Team Size
            <input
              type="number"
              value={securityStaff} 
              onChange={(e) => setSecurityStaff(Number(e.target.value))}
              style={{display: "block", marginTop: "5px", padding: "5px"}}
            />
          </label>
        </div>

        <div style={{marginBottom: "20px"}}>
          <label>
            Monthly Alert Volume
            <input
              type="number" 
              value={monthlyAlerts}
              onChange={(e) => setMonthlyAlerts(Number(e.target.value))}
              style={{display: "block", marginTop: "5px", padding: "5px"}}
            />
          </label>
        </div>

        <div style={{marginBottom: "20px"}}>
          <label>
            Average Security Analyst Salary ($)
            <input
              type="number"
              value={securitySalary}
              onChange={(e) => setSecuritySalary(Number(e.target.value))}
              style={{display: "block", marginTop: "5px", padding: "5px"}}
            />
          </label>
        </div>

        <div style={{marginBottom: "20px"}}>  
          <label>
            Alert Triage Time (Minutes)
            <input
              type="number"
              value={triageTime}
              onChange={(e) => setTriageTime(Number(e.target.value))}
              style={{display: "block", marginTop: "5px", padding: "5px"}}
            />
          </label>
        </div>
      </div>

      <div style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        marginTop: "20px"
      }}>
        <h2>Monthly ROI Analysis</h2>
        <div style={{marginTop: "15px"}}>
          <p>Hours Saved: {results.hoursSaved} hours</p>
          <p>Labor Cost Savings: ${results.monthlySavings.toLocaleString()}</p>
          <p>Tool Consolidation Savings: ${results.toolSavings.toLocaleString()}</p>
          <p>Risk Reduction Value: ${results.riskReduction.toLocaleString()}</p>
          <h3 style={{marginTop: "15px"}}>Total Monthly Value: ${results.totalMonthly.toLocaleString()}</h3>
          <p style={{fontSize: "14px", color: "#666"}}>Annual Value: ${(results.totalMonthly * 12).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
```​​​​​​​​​​​​​​​​
