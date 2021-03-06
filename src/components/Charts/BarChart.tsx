import React from 'react';

import { ChartComponentProps, Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

interface IChart extends ChartComponentProps {
  data: Chart.ChartData;
  options: Chart.ChartOptions;
}

const BarChart: React.FC<IChart> = ({ data, options }: IChart) => {
  return (
    <div style={{ paddingRight: '25px' }}>
      <Bar data={data} options={options} height={250} />
    </div>
  );
};

export default BarChart;
