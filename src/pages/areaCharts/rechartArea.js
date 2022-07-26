import React, { useEffect, useState } from "react";
import generateDate from "../../components/dataGenerator";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Brush,
} from "recharts";

const data = [
  {
    name: "Manthan",
    loss: 4000,
    profit: 2400,
    amt: 2400,
    linedata: 1000,
  },
  {
    name: "MahakDD",
    loss: 3000,
    profit: 1398,
    amt: 2210,
    linedata: 1234,
  },
  {
    name: "NeerajSir",
    loss: 2000,
    profit: 9800,
    amt: 2290,
    linedata: 1223,
  },
  {
    name: "ChiragSir",
    loss: 2780,
    profit: 3908,
    amt: 2000,
    linedata: 1123,
  },
  {
    name: "DeepeshSir",
    loss: 1890,
    profit: 4800,
    amt: 2181,
    linedata: 1567,
  },
  {
    name: "PulkitBhai",
    loss: 2390,
    profit: 3800,
    amt: 2500,
    linedata: 1442,
  },
  {
    name: "JasweerPaaji",
    loss: 3490,
    profit: 4300,
    amt: 2100,
    linedata: 1988,
  },
];

const newData = generateDate();

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload = [], label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Rechartss = () => {
  const [info, setInfo] = useState(generateDate);

  const b = useEffect(() => {}, []);

  const mapChangeFunction = () => {
    const a = {
      date: "December 4, 2020",
      index: 599,
      items: 450,
      spent: 810,
    };
    setInfo((prevValue) => {
      return [...prevValue, a];
    });
  };

  return (
    <>
      <ComposedChart
        width={1500}
        height={400}
        data={newData}
        stackOffset="expand"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="8 8" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} />
        <Legend />
        <Area
          type="monotone"
          stackId="1"
          dataKey="items"
          stroke="black"
          fill="green"
          activeDot={{ r: 8 }}
        />
        <Area
          tye="monotone"
          stackId="1"
          dataKey="index"
          stroke="black"
          fill="white"
        />
        <Area
          tye="monotone"
          stackId="1"
          dataKey="spent"
          stroke="black"
          fill="orange"
        />
        <Brush dataKey="date" height={30} stroke="#8884d8" />

        {/* <Line
        type="monotone"
        dataKey="spent"
        stroke="black"
        activeDot={{ r: 8 }}
      /> */}
        {/* <Line type="monotone" dataKey="spent" stroke="black" /> */}
      </ComposedChart>
      {console.log(info, "Form function")}
      <button>Change Chart</button>
    </>
  );
};

export default Rechartss;

//ToolTip component enables the hovering message while we are hovering the cursor on graph
//<XAxis />, <YAxis /> are the axis in graph with dataKey || dataKey are the axis points on our graph.
//Stroke is the color of line
