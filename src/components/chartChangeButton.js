import React, { useEffect, useState } from "react";
import SampleLine from "../pages/areaCharts/apexAreaCharts";
import Rechartss from "../pages/areaCharts/rechartArea";
import generateDate from "./dataGenerator";

const ChangeButton = () => {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    const newData = generateDate();
    setData(newData);
  }, []);

  const changeHandler = () => {
    const newData = generateDate();
    setData(newData);
  };
  return (
    <div>
      <button onClick={changeHandler}>Update Charts</button>
      <Rechartss data={dataa} />
      <SampleLine data={dataa} />
    </div>
  );
};

export default ChangeButton;
