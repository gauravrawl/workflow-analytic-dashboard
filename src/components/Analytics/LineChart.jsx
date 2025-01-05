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
import { useSelector } from "react-redux";
  
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
        // text: "Workflow Analytics",
      },
    },
  };
  
  const LineGraph = () => {
    const { workflowData } = useSelector((state) => state.workflow);
    const labels = workflowData?.map((node) => node.type);
    const data = {
      labels,
      datasets: [
        {
          label: "Nodes",
          data: [2, 5, 6, 7, 8, 4, 4],
          borderColor: "#4AB58E",
          backgroundColor: "rgba(74, 181, 142, 0.2)",
          tension: 0.4, 
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
  