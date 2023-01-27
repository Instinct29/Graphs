import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { VictoryChart, VictoryLine, VictoryBar } from "victory";
import { VictoryTheme } from "victory-core";

import generateDate from "../../components/DataGenerator";
import { Refresh } from "../../constants/ChangeData";

const style = {
  stroke: "blue",
  strokeWidth: 1,
};

const parentStyle = {
  border: "1px solid #ccc",
  margin: "5%",
  maxWidth: "100%",
};

const Victory = () => {
  const [data, setData] = useState([]);

  const { refresh, setRefresh } = Refresh();

  useEffect(() => {
    const newData = generateDate(8);
    setData(newData);
  }, [refresh]);

  const myData = data.map((item) => {
    return {
      x: moment(item.date).format("MMM D"),
      y: item.spent,
    };
  });

  const clickHandler = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>My stock chart</h2>
      <button
        style={{
          margin: "10px",
        }}
        onClick={clickHandler}
      >
        Change VictoryChart
      </button>
      <VictoryChart style={{ parent: { height: "500px", minWidth: "40%" } }}>
        <VictoryLine
          style={{
            parent: parentStyle,
            data: style,
          }}
          data={myData}
        />
      </VictoryChart>
    </div>
  );
};

export default Victory;
