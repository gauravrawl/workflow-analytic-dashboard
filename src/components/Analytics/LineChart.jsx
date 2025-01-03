/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  
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
  
  const LineGraph = ({ selectedYear }) => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const data = {
      labels,
      datasets: [
        {
          label: "Repost",
          data: [2, 5, 6, 7, 8, 4, 4],
          borderColor: "#4AB58E",
          backgroundColor: "rgba(74, 181, 142, 0.2)",
          tension: 0.4, // For smoother curves
        },
        {
          label: "New Post",
          data: [4, 7, 3, 9, 3, 8, 6],
          borderColor: "#FFCF00",
          backgroundColor: "rgba(255, 207, 0, 0.2)",
          tension: 0.4, // For smoother curves
        },
      ],
    };
  
    return (
      <>
        <div style={{paddingTop: '2rem'}}>
          <Line options={options} data={data} />
        </div>
      </>
    );
  };
  
  export default LineGraph;
  