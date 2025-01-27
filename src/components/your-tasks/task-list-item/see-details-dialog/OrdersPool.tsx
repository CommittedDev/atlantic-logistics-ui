import { Card, Divider, Slider, Stack, Typography } from '@mui/material';
import React from 'react';

const OrdersPool = () => {
  const marks = [
    {
      value: 20,
      label: '3Digit Zip',
    },
    {
      value: 40,
      label: 'Mid',
    },
    {
      value: 60,
      label: 'X-Mid',
    },
    {
      value: 80,
      label: 'Region',
    },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Card variant="outlined" sx={{ p: 3, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack spacing={2} justifyContent="center" sx={{ width: '100%' }}>
        <Typography sx={{ fontWeight: 400, fontSize: 14, color: '#525252' }}>Orders Pool</Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 24, color: '#000000' }}>16</Typography>
        <Divider sx={{ width: '100%' }} />
        <Typography sx={{ fontWeight: 400, fontSize: 14, color: '#525252' }}>Market Geography</Typography>
        <Slider defaultValue={20} getAriaValueText={valuetext} step={20} marks={marks} disabled sx={{ color: 'black', width: '100%' }} />
      </Stack>
    </Card>
  );
};

export default OrdersPool;
