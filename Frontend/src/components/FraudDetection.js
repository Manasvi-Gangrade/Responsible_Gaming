import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function FraudDetection() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Suspicious Activity",
        data: [5, 6, 2, 8, 3, 7],
        fill: false,
        borderColor: "#ff1744",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="fraud-detection">
      <h2>Fraudulent Activity Detection</h2>
      <Line data={data} />
      <p>Recent Fraud Alert: User flagged for suspicious behavior.</p>
    </div>
  );
}

export default FraudDetection;
