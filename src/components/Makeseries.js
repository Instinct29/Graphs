function makeSeries(i, dataType, useR, datums) {
  const start = 0;
  const startDate = new Date();
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  startDate.setMilliseconds(0);
  const length = datums;
  const min = 0;
  const max = 100000;
  const rMin = 2;
  const rMax = 20;
  const nullChance = 0;
  return {
    label: `Series ${i + 1}`,
    data: [...new Array(length)].map((_, i) => {
      let x = start + i;
      if (dataType === "time") {
        x = new Date(startDate.getTime() + 60 * 1000 * 60 * 24 * i);
      }
      const distribution = 1.1;
      const y =
        Math.random() < nullChance
          ? null
          : min + Math.round(Math.random() * (max - min));
      const r = !useR
        ? undefined
        : rMax -
          Math.floor(
            Math.log(Math.random() * (distribution ** rMax - rMin) + rMin) /
              Math.log(distribution)
          );
      return {
        primary: x,
        secondary: y,
        radius: r,
      };
    }),
  };
}

function makeDataFrom(dataType, series, useR, datums) {
  return [
    ...new Array(series || Math.max(Math.round(Math.random() * 5), 1)),
  ].map((d, i) => makeSeries(i, dataType, useR, datums));
}
export default makeDataFrom;
