'use client';

import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  ChartOptions,
  ChartData,
  Plugin,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from '@mui/material';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Title);

// Convert numeric month to label (e.g., 1 -> Jan)
const getMonthLabel = (month: number) =>
  new Date(2024, month - 1, 1).toLocaleString('default', { month: 'short' });

interface PriceHistoryProps {
  chartData: {
    year: number;
    month: number;
    perTrip: {
      rateUsd: number;
      highUsd: number;
      lowUsd: number;
    };
  }[];
}

const PriceHistory: React.FC<PriceHistoryProps> = ({ chartData }) => {
  // Memoized data extraction
  const { labels, mainValues, minValues, maxValues } = useMemo(() => {
    const labels = chartData.map((data) => `${getMonthLabel(data.month)}`);
    const mainValues = chartData.map((data) => data.perTrip.rateUsd);
    const minValues = chartData.map((data) => data.perTrip.lowUsd);
    const maxValues = chartData.map((data) => data.perTrip.highUsd);
    return { labels, mainValues, minValues, maxValues };
  }, [chartData]);

  // Chart data
  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Confidence Interval',
        data: maxValues,
        borderColor: 'rgba(218,165,32, 0.2)',
        backgroundColor: 'rgba(218,165,32, 0.1)',
        fill: '-1',
        borderWidth: 0,
        pointRadius: 0,
      },
      {
        label: 'Lower Bound',
        data: minValues,
        borderColor: 'rgba(218,165,32, 0.2)',
        backgroundColor: 'rgba(218,165,32, 0.1)',
        fill: '+1',
        borderWidth: 0,
        pointRadius: 0,
      },
      {
        label: 'Price History',
        data: mainValues,
        borderColor: 'goldenrod',
        backgroundColor: 'rgba(218,165,32, 0.2)',
        pointBackgroundColor: 'goldenrod',
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
    ],
  };

  // Custom Plugin for Error Bars
  const errorBarsPlugin: Plugin<'line'> = {
    id: 'errorBarsPlugin',
    afterDatasetsDraw(chart) {
      const ctx = chart.ctx;
      if (!chart.scales.x || !chart.scales.y) return;

      chart.data.datasets[2].data.forEach((_, index) => {
        const x = chart.scales.x.getPixelForValue(index);
        const yMin = chart.scales.y.getPixelForValue(minValues[index]);
        const yMax = chart.scales.y.getPixelForValue(maxValues[index]);

        ctx.save();
        ctx.strokeStyle = 'goldenrod';
        ctx.lineWidth = 2;

        // Draw vertical error bars
        ctx.beginPath();
        ctx.moveTo(x, yMin);
        ctx.lineTo(x, yMax);
        ctx.stroke();

        // Draw top horizontal tick
        ctx.beginPath();
        ctx.moveTo(x - 5, yMax);
        ctx.lineTo(x + 5, yMax);
        ctx.stroke();

        // Draw bottom horizontal tick
        ctx.beginPath();
        ctx.moveTo(x - 5, yMin);
        ctx.lineTo(x + 5, yMin);
        ctx.stroke();

        ctx.restore();
      });
    },
  };

  // Chart options with "$" symbol on Y-axis and defined height/width
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, // Allows us to define height & width manually
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const index = tooltipItem.dataIndex;
            return `Price: $${mainValues[index]} (±$${maxValues[index] - mainValues[index]})`;
          },
        },
      },
    },
    scales: {
      y: {
        min: Math.min(...minValues) - 20,
        max: Math.max(...maxValues) + 20,
        ticks: {
          stepSize: 50,
          callback: function (value) {
            return `$${value}`; // Add "$" symbol
          },
        },
      },
      x: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };

  return (
    <Card variant="outlined" sx={{ p: 2, width: '100%', height: 400, marginTop: 4 }}>
      <Line data={data} options={options} plugins={[errorBarsPlugin]} />
    </Card>
  );
};

export default PriceHistory;
