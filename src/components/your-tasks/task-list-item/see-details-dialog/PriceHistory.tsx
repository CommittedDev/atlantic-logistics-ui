import React from 'react';
import {Card} from '@mui/material';
import Chart from 'react-apexcharts';
import {ApexOptions} from 'apexcharts';

const PriceHistory = () => {
  const historicalData = [
    {year: 2023, month: 12, perTrip: {rateUsd: 246.94, highUsd: 264.44, lowUsd: 192.67}},
    {year: 2024, month: 1, perTrip: {rateUsd: 275.03, highUsd: 275.04, lowUsd: 197.9}},
    {year: 2024, month: 2, perTrip: {rateUsd: 277.01, highUsd: 289.99, lowUsd: 224.87}},
    {year: 2024, month: 3, perTrip: {rateUsd: 321.8, highUsd: 321.81, lowUsd: 222.35}},
    {year: 2024, month: 4, perTrip: {rateUsd: 276.43, highUsd: 276.44, lowUsd: 198.88}},
    {year: 2024, month: 5, perTrip: {rateUsd: 265, highUsd: 265.01, lowUsd: 199.94}},
    {year: 2024, month: 6, perTrip: {rateUsd: 245.56, highUsd: 262.05, lowUsd: 198.82}},
    {year: 2024, month: 7, perTrip: {rateUsd: 271.15, highUsd: 271.16, lowUsd: 196.49}},
    {year: 2024, month: 8, perTrip: {rateUsd: 294.35, highUsd: 294.36, lowUsd: 198.18}},
    {year: 2024, month: 9, perTrip: {rateUsd: 296.31, highUsd: 330.31, lowUsd: 197.79}},
    {year: 2024, month: 10, perTrip: {rateUsd: 285.97, highUsd: 285.98, lowUsd: 215.24}},
    {year: 2024, month: 11, perTrip: {rateUsd: 306.54, highUsd: 306.55, lowUsd: 206.38}},
    {year: 2024, month: 12, perTrip: {rateUsd: 296.5, highUsd: 327.9, lowUsd: 215.54}},
  ];

  // Generate formatted x-axis labels
  const categories = historicalData.map(({year, month}) => `${year}-${month.toString().padStart(2, '0')}`);

  // Define chart options
  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      zoom: {enabled: false},
    },
    stroke: {
      width: 2, // Main line
      curve: 'smooth',
    },
    markers: {
      size: [0, 5, 5], // No markers for rateUsd, dots for high & low
      colors: ['#ff9800', '#ff9800'], // Error bar colors
    },
    title: {
      text: 'Historical Rate Trends',
      align: 'left',
    },
    xaxis: {
      categories,
      title: {text: 'Year-Month'},
    },
    yaxis: {
      title: {text: 'Rate (USD)'},
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Rate (USD)',
      type: 'line',
      data: historicalData.map(({perTrip}) => perTrip.rateUsd),
    },
    {
      name: 'High USD',
      type: 'scatter',
      data: historicalData.map(({perTrip}) => perTrip.highUsd),
    },
    {
      name: 'Low USD',
      type: 'scatter',
      data: historicalData.map(({perTrip}) => perTrip.lowUsd),
    },
  ];

  return (
    <Card variant="outlined" sx={{p: 2}} style={{width: '100%', marginTop: 10}}>
      <Chart options={options} series={series} height={400} />
    </Card>
  );
};

export default PriceHistory;
