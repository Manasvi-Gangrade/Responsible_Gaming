import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function GamingInsights() {
  const data = {
    labels: ["Skill", "Luck"],
    datasets: [
      {
        label: "Game Outcome Breakdown",
        data: [60, 40],
        backgroundColor: ["#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div className="gaming-insights">
      <h2>Gaming Insights</h2>
      <Bar data={data} />
      <p>Recommendation: Based on your game history, we recommend taking a break to avoid gaming addiction.</p>
    </div>
  );
}

export default GamingInsights;
