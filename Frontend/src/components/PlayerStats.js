import React from "react";
import { Bar } from "react-chartjs-2";

function PlayerStats() {
  const data = {
    labels: ["Total Games", "Games Won", "Average Score"],
    datasets: [
      {
        label: "Player Performance",
        data: [100, 60, 80],
        backgroundColor: ["#2196f3", "#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div className="player-stats">
      <h2>Player Performance Stats</h2>
      <Bar data={data} />
    </div>
  );
}

export default PlayerStats;
