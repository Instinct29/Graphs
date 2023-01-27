import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { config } from "../../constants/Chartconfig";
import generateDate from "../../components/DataGenerator";
import { Refresh } from "../../constants/ChangeData";

const ChartJs = () => {
  const chartContainer = useRef(null);
  const [data, setData] = useState([]);

  const { refresh, setRefresh } = Refresh();

  useEffect(() => {
    const generatedData = generateDate(20);
    setData(generatedData);
  }, [refresh]);

  const label = data.map((item) => item.date);
  const spent = data.map((item) => item.spent);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      new Chartjs(chartContainer.current, config(label, spent));
    }
  }, [chartContainer, refresh, label, spent]);

  const handleClick = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>My stock chart</h2>
      <button onClick={handleClick}>Change ChartJs</button>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default ChartJs;
