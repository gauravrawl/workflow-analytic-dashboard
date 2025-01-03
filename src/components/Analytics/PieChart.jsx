/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Pie } from "react-chartjs-2";
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Workflow Analytics",
      },
    },
  };
  
  const PieChart = ({ selectedYear }) => {
    const labels = ["Repost", "New Post"];
    const data = {
      labels,
      datasets: [
        {
          data: [36, 40], // Sum of Repost and New Post data for all months
          backgroundColor: ["#4AB58E", "#FFCF00"],
          hoverBackgroundColor: ["#3A946D", "#E5B700"],
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <>
        <div style={{paddingTop: '2rem'}}>
          <Pie options={options} data={data} />
        </div>
      </>
    );
  };
  
  export default PieChart;
  