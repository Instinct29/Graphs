import Chart from "react-apexcharts";
import generateDate from "../../components/dataGenerator";

const info = generateDate();
console.log(
  info.map((x) => x.date),
  "data from Apex charts"
);
export default function SampleLine() {
  const series = [
    {
      type: "line", //render a line chart for this data
      name: "spent",
      data: info.map((x) => x.spent),
    },
    {
      type: "area", //use area chart here.
      name: "items",
      data: info.map((x) => x.items),
    },
    {
      type: "line",
      name: "index",
      data: info.map((x) => x.index),
    },
  ];
  const options = {
    xaxis: {
      categories: info.map((x) => x.date),
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
    </div>
  );
}
