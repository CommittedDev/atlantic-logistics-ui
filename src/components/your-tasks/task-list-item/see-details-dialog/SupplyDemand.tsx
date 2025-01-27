import React from 'react';
import {Card} from '@mui/material';
import Chart from 'react-apexcharts';

const SupplyDemand = () => {
  const data = {
    options: {
      chart: {
        toolbar: {
          show: false, // Hide zoom, pan, and download icons
        },
      },
      stroke: {
        width: [2, 2], // Thick line for supply, normal for demand
        dashArray: [0, 5], // Solid line for supply, dashed line for demand
      },
      colors: ['#000000', '#808080'], // Black for supply, Grey for demand
      xaxis: {
        categories: [16.03, 23.03, 30.03],
      },
      yaxis: {
        labels: {
          show: false, // Hides the Y-axis labels
        },
      },
      dataLabels: {
        enabled: false, // Hide data labels for a cleaner look
      },
      legend: {
        position: 'top' as 'top',
      },
    },
    series: [
      {
        name: 'Supply',
        data: [30, 20, 3],
      },
      {
        name: 'Demand',
        data: [25, 18, 2],
      },
    ],
  };

  return (
    <Card variant="outlined" sx={{p: 1}} style={{width: '100%'}}>
      
      <Chart options={data.options} series={data.series} type="area" />
    </Card>
  );
};

export default SupplyDemand;
