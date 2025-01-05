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
import { useSelector } from "react-redux";

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
  const BarGraph = () => {
    const { workflowData } = useSelector((state) => state.workflow);
    const labels = workflowData?.map((node) => node.type);
  const data = {
    labels,
    datasets: [
      {
        label: "Nodes",
        data: [2, 5, 6, 7, 8, 4, 4], 
        backgroundColor: "#4AB58E",
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
  