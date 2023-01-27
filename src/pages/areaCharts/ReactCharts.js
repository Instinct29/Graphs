import { useEffect, useMemo, useState } from "react";
import { Chart } from "react-charts";
import generateDate from "../../components/DataGenerator";
import makeDataFrom from "../../components/Makeseries";
import { Refresh } from "../../constants/ChangeData";
const ReactCharts = () => {
  const [data, setData] = useState([]);

  const { refresh, setRefresh } = Refresh();

  useEffect(() => {
    const newData = makeDataFrom("time", "10", "", 1000);
    setData(newData);
  }, [refresh]);

  const clickHandler = () => {
    setRefresh(!refresh);
  };

  const axes = useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const series = useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  return (
    <div
      style={{
        width: "95%",
        height: "200px",
      }}
    >
      <h2>My stock chart</h2>
      <button
        style={{
          margin: "10px",
        }}
        onClick={clickHandler}
      >
        Change ReactChart
      </button>
      <Chart data={data} series={series} axes={axes} tooltip />
    </div>
  );
};

export default ReactCharts;
