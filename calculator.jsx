import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ROICalculator = () => {
  const [annualSecurityBudget, setAnnualSecurityBudget] = useState(500000);
  const [securityToolCost, setSecurityToolCost] = useState(2500);
  const [securityStaff, setSecurityStaff] = useState(3);
  const [securitySalary, setSecuritySalary] = useState(125000);
  const [monthlyAlerts, setMonthlyAlerts] = useState(5000);
  const [falsePositiveRate, setFalsePositiveRate] = useState(75);
  const [triageTime, setTriageTime] = useState(15);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState(50);
  const [averageDwellTime, setAverageDwellTime] = useState(24);
  const [endpoints, setEndpoints] = useState(500);

  const calculateROI = () => {
    const alertHourlyRate = (securitySalary / 2080);
    const currentTriageHours = (monthlyAlerts * (triageTime / 60));
    const automatedTriageHours = currentTriageHours * 0.2;
    const triageHoursSaved = currentTriageHours - automatedTriageHours;
    
    const currentIncidentHours = incidentsPerMonth * (averageDwellTime / 4);
    const automatedIncidentHours = currentIncidentHours * 0.4;
    const incidentHoursSaved = currentIncidentHours - automatedIncidentHours;

    const totalHoursSaved = triageHoursSaved + incidentHoursSaved;
    const monthlySalarySavings = totalHoursSaved * alertHourlyRate;
    
    const toolSavings = (endpoints * securityToolCost * 0.2) / 12;
    const improvedDwellTimeHours = averageDwellTime * 0.15;
    const avgBreachCost = 4350000;
    const riskReductionValue = (avgBreachCost * 0.15) / 12;

    return {
      hoursSaved: Math.round(totalHoursSaved),
      monthlySavings: Math.round(monthlySalarySavings),
      riskReduction: Math.round(riskReductionValue),
      toolSavings: Math.round(toolSavings),
      improvedResponseTime: Math.round(improvedDwellTimeHours),
      totalMonthlySavings: Math.round(monthlySalarySavings + riskReductionValue + toolSavings)
    };
  };

  const results = calculateROI();

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reveald Security Operations ROI Calculator</CardTitle>
          <CardDescription className="text-lg">
            Calculate the operational and financial impact of automating your security operations with Reveald's continuous detection and response platform. See how much time and money you could save by reducing manual triage work, improving incident response, and consolidating security tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="inputs">
            <TabsList>
              <TabsTrigger value="inputs">Input Your Numbers</TabsTrigger>
              <TabsTrigger value="results">View ROI Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="inputs" className="space-y-8">
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Team & Infrastructure</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="endpoints">Number of Endpoints</Label>
                    <Input
                      id="endpoints"
                      type="number"
                      value={endpoints}
                      onChange={(e) => setEndpoints(Number(e.target.value))}
                      className="mt-2"
                      aria-describedby="endpoints-help"
                    />
                    <p id="endpoints-help" className="text-sm text-slate-500 mt-1">
                      Total number of servers, workstations, and devices you manage
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="securityStaff">Security Team Size</Label>
                    <Input
                      id="securityStaff"
                      type="number"
                      value={securityStaff} 
                      onChange={(e) => setSecurityStaff(Number(e.target.value))}
                      className="mt-2"
                      aria-describedby="staff-help"
                    />
                    <p id="staff-help" className="text-sm text-slate-500 mt-1">
                      Number of full-time security analysts and engineers
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">Alert & Incident Metrics</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="alerts">Monthly Alert Volume</Label>
                    <Input
                      id="alerts"
                      type="number"
                      value={monthlyAlerts}
                      onChange={(e) => setMonthlyAlerts(Number(e.target.value))}
                      className="mt-2"
                      aria-describedby="alerts-help"
                    />
                    <p id="alerts-help" className="text-sm text-slate-500 mt-1">
                      Average number of security alerts per month across all tools
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="triage">Alert Triage Time (Minutes)</Label>
                    <Input
                      id="triage"
                      type="number"
                      value={triageTime}
                      onChange={(e) => setTriageTime(Number(e.target.value))}
                      className="mt-2"
                      aria-describedby="triage-help" 
                    />
                    <p id="triage-help" className="text-sm text-slate-500 mt-1">
                      Average minutes spent triaging each alert
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="falsePos">False Positive Rate (%)</Label>
                    <Input
                      id="falsePos"
                      type="number"
                      value={falsePositiveRate}
                      onChange={(e) => setFalsePositiveRate(Number(e.target.value))}
                      className="mt-2"
                      max="100"
                      aria-describedby="falsepos-help"
                    />
                    <p id="falsepos-help" className="text-sm text-slate-500 mt-1">
                      Percentage of alerts that are false positives
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">Current Costs</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="salary">Average Security Analyst Salary ($)</Label>
                    <Input
                      id="salary"
                      type="number"
                      value={securitySalary}
                      onChange={(e) => setSecuritySalary(Number(e.target.value))}
                      className="mt-2"
                      aria-describedby="salary-help"
                    />
                    <p id="salary-help" className="text-sm text-slate-500 mt-1">
                      Annual fully-loaded cost per security analyst
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="toolcost">Annual Security Tool Cost per Endpoint ($)</Label>
                    <Input
                      id="toolcost" 
                      type="number"
                      value={securityToolCost}
                      onChange={(e) => setSecurityToolCost(Number(e.target.value))}
                      className="mt-2"
                      aria-describedby="toolcost-help"
                    />
                    <p id="toolcost-help" className="text-sm text-slate-500 mt-1">
                      Average annual cost per endpoint for security tools
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results">
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-4 bg-green-50">
                    <h3 className="font-semibold text-lg mb-4">Time & Efficiency Gains</h3>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span className="text-slate-600">Hours Saved Monthly:</span>
                        <span className="font-bold">{results.hoursSaved} hours</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-600">Improved Response Time:</span>
                        <span className="font-bold">{results.improvedResponseTime} hours faster</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-600">Monthly Labor Savings:</span>
                        <span className="font-bold">${results.monthlySavings.toLocaleString()}</span>
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 bg-blue-50">
                    <h3 className="font-semibold text-lg mb-4">Financial Impact</h3>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span className="text-slate-600">Risk Reduction Value:</span>
                        <span className="font-bold">${results.riskReduction.toLocaleString()}/mo</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-600">Tool Consolidation Savings:</span>
                        <span className="font-bold">${results.toolSavings.toLocaleString()}/mo</span>
                      </p>
                      <p className="flex justify-between text-lg font-bold text-green-700 mt-4">
                        <span>Total Monthly Impact:</span>
                        <span>${results.totalMonthlySavings.toLocaleString()}</span>
                      </p>
                      <p className="flex justify-between text-sm text-slate-500 mt-2">
                        <span>Projected Annual Value:</span>
                        <span>${(results.totalMonthlySavings * 12).toLocaleString()}</span>
                      </p>
                    </div>
                  </Card>
                </div>

                <Card className="p-4 bg-slate-50">
                  <h3 className="font-semibold text-lg mb-2">About These Calculations</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Time savings are calculated based on industry-standard alert triage and incident response times</p>
                    <p>• Risk reduction value is derived from average breach cost reduction through faster detection and response</p>
                    <p>• Tool consolidation savings assume 20% reduction in per-endpoint security tool costs</p>
                    <p>• Labor savings are calculated using fully-loaded analyst costs and time saved on manual tasks</p>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;
