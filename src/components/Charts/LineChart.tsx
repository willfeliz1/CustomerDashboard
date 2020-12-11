import React from 'react';

import { Pie, ChartComponentProps, Line } from 'react-chartjs-2';
import Chart from 'chart.js';

interface IChart extends ChartComponentProps {
  // data?: {
  //   labels?: string[];
  //   datasets?: Array<{
  //     label?: string;
  //     data?: number[];
  //     backgroundColor?: string[];
  //     borderColor?: string[];
  //     borderWidth?: number;
  //   }>;
  // };
  data: Chart.ChartData;
  options: Chart.ChartOptions;
}

const PieChart: React.FC<IChart> = ({ data, options }: IChart) => {
  // PieChart.defaultProps = {
  //   data: {
  //     datasets: [
  //       {
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  // };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default PieChart;
