import React from 'react';

import { Pie, ChartComponentProps, Line, Bar } from 'react-chartjs-2';
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

const BarChart: React.FC<IChart> = ({ data, options }: IChart) => {
  return (
    <div style={{ paddingRight: '25px' }}>
      <Bar data={data} options={options} height={180} />
    </div>
  );
};

export default BarChart;
