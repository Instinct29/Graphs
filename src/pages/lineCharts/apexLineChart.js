import React from "react";
import { Line } from "@nivo/line";

const Nivo = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(67, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 226,
        },
        {
          x: "helicopter",
          y: 35,
        },
        {
          x: "boat",
          y: 52,
        },
        {
          x: "train",
          y: 30,
        },
        {
          x: "subway",
          y: 256,
        },
        {
          x: "bus",
          y: 68,
        },
        {
          x: "car",
          y: 135,
        },
        {
          x: "moto",
          y: 183,
        },
        {
          x: "bicycle",
          y: 200,
        },
        {
          x: "horse",
          y: 224,
        },
        {
          x: "skateboard",
          y: 160,
        },
        {
          x: "others",
          y: 23,
        },
      ],
    },
  ];

  const commonProperties = {
    width: 600,
    height: 400,
    margin: { top: 20, right: 20, bottom: 60, left: 80 },
    data: data,
    animate: true,
    enableSlices: "x",
  };

  return (
    <div>
      <Line
        {...commonProperties}
        yScale={{
          type: "linear",
          stacked: true,
        }}
      />
    </div>
  );
};

export default Nivo;
