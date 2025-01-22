import React from "react";
import GamingInsights from "./GamingInsights";
import FraudDetection from "./FraudDetection";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Responsible Gaming Dashboard</h1>
      <GamingInsights />
      <FraudDetection />
    </div>
  );
}

export default Dashboard;
