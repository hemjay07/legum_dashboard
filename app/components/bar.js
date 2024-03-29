"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { RiCalendarFill } from "react-icons/ri";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ data, title }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: data,
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [data]);

  return (
    <div className="relative  h-[380px] w-full rounded-lg border bg-white p-4 pt-8 shadow-md md:col-span-2">
      <Bar data={chartData} options={chartOptions} />{" "}
      {/* <Dropdown
        class="absolute top-0"
        defaultOption={defaultOption}
        others={["1 month", "2 weeks", "1 week"]}
      /> */}
      <h3 class="absolute left-4 top-6 text-xl font-semibold text-gray-800">
        {title}
      </h3>
    </div>
  );
};

export default BarChart;
