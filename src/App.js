import React from "react";
import Rechartss from "./pages/areaCharts/rechartArea";
import ApexChart from "./pages/areaCharts/apexAreaCharts";

const App = () => {
  return (
    <div>
      <h1>Rechart</h1>
      <Rechartss />
      <h1>ApexChart</h1>
      <ApexChart />
    </div>
  );
};

export default App;
