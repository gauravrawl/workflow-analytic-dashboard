import BarGraph from "./Analytics/BarGraph"
import LineGraph from "./Analytics/LineChart"
import PieChart from "./Analytics/PieChart"

const SidebarForChart = () => {
    
  return (
    <aside className="charts-sidebar">
      <BarGraph/>
      <LineGraph/>
      <PieChart/>
    </aside>
  )
}

export default SidebarForChart
