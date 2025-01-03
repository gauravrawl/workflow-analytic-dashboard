/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
        text: "Workflow Alnytics",
      },
    },
  };
  const BarGraph = ({selectedYear}) => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = {
    labels,
    datasets: [
      {
        label: "Repost",
        data: [2, 5, 6, 7, 8, 4, 4],
  
        backgroundColor: "#4AB58E",
      },
      {
        label: "New Post",
        data: [4, 7, 3, 9, 3, 8, 6],
        backgroundColor: "#FFCF00",
      },
    ],
  };

    return (
      <>
        <div>
          <Bar options={options} data={data} />
        </div>
      </>
    );
  };
  
  export default BarGraph;
  