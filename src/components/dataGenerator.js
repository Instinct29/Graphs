// const moment = require("moment");
import moment from "moment";

const generateDate = (length = 100000) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let rand1 = Math.random() * 15 + 5;
    let rand2 = Math.random() * 15 + 5;
    let date = moment().subtract(i, "day").toDate();

    arr.unshift({
      date: moment(date).format("MMMM D, YYYY"),
      index: i / 200,
      spent: Math.ceil(rand1) * 45,
      items: Math.ceil(rand2) * 30,
    });
  }
  console.log(arr, "This is the generated array");

  return arr;
};

export default generateDate;
