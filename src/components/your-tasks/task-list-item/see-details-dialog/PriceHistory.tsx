import React from 'react';
import {Card} from '@mui/material';
import Chart from 'react-apexcharts';

const PriceHistory = () => {
  const data = {
    series: [
      {
        data: [
          {x: 1, y: [150, 180, 145, 175]}, // Day 1 (Open, High, Low, Close)
          {x: 5, y: [175, 200, 170, 195]}, // Day 5
          {x: 10, y: [195, 220, 190, 210]}, // Day 10
          {x: 15, y: [210, 230, 200, 220]}, // Day 15
          {x: 20, y: [220, 250, 215, 240]}, // Day 20
          {x: 25, y: [240, 270, 230, 260]}, // Day 25
          {x: 30, y: [260, 280, 250, 270]}, // Day 30
        ],
      },
    ],
    options: {
      title: {
        text: 'Price History',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
      yaxis: {
        min: 140, // Minimum Y-axis value
        max: 300, // Maximum Y-axis value
        tickAmount: 4, // Four tick marks for better scaling
        labels: {
          formatter: (value: number) => `${value}M`, // Showing plain values with 'M'
        },
      },

      chart: {
        toolbar: {
          show: false, // Hide zoom, pan, and download icons
        },
      },
      grid: {
        borderColor: '#f1f1f1', // Light grey grid color
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#7B7B7B', // Set both upward and downward to the same gray color
            downward: '#7B7B7B',
          },
          wick: {
            useFillColor: true, // Ensures the wicks match the candle body color
          },
        },
      },
    },
  };

  return (
    <Card variant="outlined" sx={{p: 2}} style={{width: '100%', marginTop: 10}}>
      <Chart options={data.options} series={data.series} type="candlestick" height={400} />
    </Card>
  );
};

export default PriceHistory;
