import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Manthan",
    loss: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: "MakakDD",
    loss: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: "NeerajSir",
    loss: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: "ChiragSir",
    loss: 2780,
    profit: 3908,
    amt: 2000,
  },
  {
    name: "DeepeshSir",
    loss: 1890,
    profit: 4800,
    amt: 2181,
  },
  {
    name: "PulkitBhai",
    loss: 2390,
    profit: 3800,
    amt: 2500,
  },
  {
    name: "JasweerPaaji",
    loss: 3490,
    profit: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="8 8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="profit"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="loss" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="red" />
    </LineChart>
  );
}

//ToolTip component enables the hovering message while we are hovering the cursor on graph
//<XAxis />, <YAxis /> are the axis in graph with dataKey || dataKey are the axis points on our graph.
//Stroke is the color of line
