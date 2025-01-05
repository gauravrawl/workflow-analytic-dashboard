/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import { useEffect, useState } from "react";
  import { Pie } from "react-chartjs-2";
  import { useSelector } from "react-redux";
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        // text: "Workflow Analytics",
      },
    },
  };
  
  const PieChart = () => {
    const [pieData, setPieData] = useState([]);
    const { workflowData } = useSelector((state) => state.workflow);
  

    const labels = workflowData?.map((node) => node.type);
  
    const data = {
      labels,
      datasets: [
        {
          data: [36, 40, 46], 
          backgroundColor: [
            "#4AB58E",
            "#FFCF00",
            "#000",
            "#6d1b3a",
            "#fda2db",
            "#93a209",
            "#e86a5c",
          ],
          hoverBackgroundColor: ["#3A946D", "#E5B700"],
          borderWidth: 1,
        },
      ],
    };

  
    console.log("pieData", pieData);
  
    return (
      <>
        <div style={{ paddingTop: "2rem" }}>
          <Pie options={options} data={data} />
        </div>
      </>
    );
  };
  
  export default PieChart;
  