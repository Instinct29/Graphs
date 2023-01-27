import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import generateDate from "../../components/DataGenerator";

const HighChartsMultipleFigures = () => {
  const info = generateDate();

  const options = {
    title: {},
    series: [{}, {}, {}],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default HighChartsMultipleFigures;
