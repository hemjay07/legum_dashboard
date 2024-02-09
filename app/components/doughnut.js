"use client";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, labels, title }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: data,
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      cutout: "85%",
    });
  }, [data, labels]);

  return (
    <div className="relative  h-[380px] w-full rounded-lg border bg-white p-4 pt-8 shadow-md md:col-span-2">
      <Doughnut data={chartData} options={chartOptions} />{" "}
      <h3 class="absolute left-4 top-6 text-xl font-semibold text-gray-800">
        {title}
      </h3>
    </div>
  );
};

export default DoughnutChart;
