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

const Rechartss = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = generateDate();
    setData(newData);
  }, []);

  const clickHandler = () => {
    const newData = generateDate();
    setData(newData);
  };

  return (
    <>
      <ComposedChart
        width={1500}
        height={400}
        data={data}
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
        <YAxis />
        <Tooltip content={renderTooltipContent} />
        <Legend />
        <Area tye="monotone" dataKey="spent" stroke="blue" fill="blue" />
        <Area
          type="monotone"
          dataKey="items"
          stroke="green"
          fill="green"
          activeDot={{ r: 8 }}
        />
        <Line type="line" dataKey="index" stroke="orange" />
        <Brush dataKey="date" height={30} stroke="#8884d8" />
      </ComposedChart>
      <button onClick={clickHandler}>Change Chart</button>
    </>
  );
};

export default Rechartss;

//ToolTip component enables the hovering message while we are hovering the cursor on graph
//<XAxis />, <YAxis /> are the axis in graph with dataKey || dataKey are the axis points on our graph.
//Stroke is the color of line
