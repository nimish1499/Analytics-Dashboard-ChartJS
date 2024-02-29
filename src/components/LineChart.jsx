import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ data,aspectRatio }) => {
  return (
    <Line
      data={data}
      options={{aspectRatio:aspectRatio,responsive:true}}
    />
  );
};

export default LineChart;
