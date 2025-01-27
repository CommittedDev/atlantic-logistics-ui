import React from 'react';
import {Card, Chip, Stack, Typography} from '@mui/material';
import Chart from 'react-apexcharts';

const Volatility = () => {
  const data = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 2, // Thick line for better visibility
      },
      colors: ['#000000'], // Black color for the supply line
      fill: {
        type: 'gradient', // Adds a gradient effect to enhance visualization
        gradient: {
          shadeIntensity: 0.4,
          opacityFrom: 0.9,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      xaxis: {
        categories: [16.03, 23.03, 30.03, 40.03, 50.03], // Extended to create more bends
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false, // Hide data labels for a cleaner look
      },
      grid: {
        show: false, // Removes grid for a cleaner view
      },
    },
    series: [
      {
        name: 'volatility',
        data: [30, 10, 25, 5, 35], // Adjusted values to create snake-like bends
      },
    ],
  };

  return (
    <Card variant="outlined" sx={{p: 1}} style={{width: '100%'}}>
      <Stack direction="row" spacing={1} alignContent="center">
        <Typography style={{fontWeight: 400, fontSize: 14, color: '#525252', marginTop: 5}}>Volatility</Typography>
        <Chip label="Stable" style={{backgroundColor: '#E1FFE1', color: '#55AB55', fontWeight: 600, fontSize: 16}} />
      </Stack>
      <Chart options={data.options} series={data.series} type="area" />
    </Card>
  );
};

export default Volatility;
