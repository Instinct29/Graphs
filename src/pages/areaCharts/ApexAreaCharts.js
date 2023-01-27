import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import generateDate from "../../components/DataGenerator";

export default function SampleLine(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = generateDate();
    setData(newData);
  }, []);

  const changeHandler = () => {
    const newData = generateDate();
    setData(newData);
  };
  const series = [
    {
      type: "area", //render a line chart for this data
      name: "spent",
      data: data.map((x) => x.spent),
    },
    {
      type: "area", //use area chart here.
      name: "items",
      data: data.map((x) => x.items),
    },
    {
      type: "line",
      name: "index",
      data: data.map((x) => x.index),
    },
  ];
  const options = {
    xaxis: {
      categories: data.map((x) => x.date),
    },
    yaxis: {
      // reversed: true,
    },
  };
  return (
    <div>
      <Chart
        options={options}
        type="line"
        series={series}
        width="1500"
        height="400"
      />
      <button onClick={changeHandler}>ChangeApexChart</button>
    </div>
  );
}
