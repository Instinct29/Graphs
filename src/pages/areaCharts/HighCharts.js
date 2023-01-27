import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import generateDate from "../../components/DataGenerator";

const HighCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generatedData = generateDate();
    setData(generatedData);
  }, []);

  const clickHandler = () => {
    const newData = generateDate();
    setData(newData);
  };
  const options = {
    title: {
      text: "My stock chart",
    },
    series: [
      {
        type: "area",
        name: "spent",
        data: data.map((x) => x.spent),
      },
      {
        type: "area",
        name: "items",
        data: data.map((x) => x.items),
      },
      {
        type: "line",
        name: "date",
        data: data.map((x) => x.date),
      },
      {
        type: "line",
        name: "index",
        data: data.map((x) => x.index),
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
      <button onClick={clickHandler}>Change HighCharts</button>
    </div>
  );
};

export default HighCharts;
