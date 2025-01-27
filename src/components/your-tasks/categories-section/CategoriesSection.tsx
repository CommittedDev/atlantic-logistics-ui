'use client';

import React, {useState} from 'react';
import Grid from '@mui/material/Grid2';
import {Box, Card, CardActionArea, CardContent, Stack, Typography} from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ScheduleIcon from '@mui/icons-material/Schedule';

const CategoriesSection = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const cards = [
    {
      id: 1,
      title: 'Critical',
      color: '#FF7676',
      count: 10,
      details: [
        {icon: <SellIcon />, title: 'Quote Requests', count: 10},
        {icon: <LocalShippingIcon />, title: 'Truck Off Schedule', count: 8},
        {icon: <ScheduleIcon />, title: 'Late Deleiveries', count: 6},
      ],
    },
    {
      id: 2,
      title: 'High',
      color: '#FFC862',
      count: 7,
      details: [
        {icon: <SellIcon />, title: 'Quote Requests', count: 10},
        {icon: <LocalShippingIcon />, title: 'Truck Off Schedule', count: 8},
      ],
    },
    {
      id: 3,
      title: 'Minor',
      color: '#B8D82A',
      count: 2,
      details: [
        {icon: <SellIcon />, title: 'Quote Requests', count: 10},
        {icon: <LocalShippingIcon />, title: 'Truck Off Schedule', count: 8},
      ],
    },
  ];

  return (
    <div>
      <Grid container>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography style={{fontWeight: 300, fontSize: 28}}>Your Tasks</Typography>
          <Stack direction="row" spacing={1}>
            <Typography style={{fontWeight: 400, fontSize: 14, color: '#A8A8A8'}}>sort by</Typography>
            <Typography style={{fontWeight: 400, fontSize: 14}}>status</Typography>
          </Stack>
        </Stack>
      </Grid>

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 2,
        }}>
        {cards.map((card, index) => (
          <Card key={index} variant="outlined">
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? '' : undefined}
              sx={{
                height: '100%',
                '&[data-active]': {
                  backgroundColor: '#616161', // Set the active card color
                  color: '#ffffff', // Text color for better contrast
                  '&:hover': {
                    backgroundColor: '#424242', // Slightly darker color on hover
                  },
                  boxShadow: `0 0 10px rgba(97, 97, 97, 0.5)`, // Shadow effect with the same color
                  border: '2px solid #616161', // Border to highlight selection
                  borderRadius: 2,
                },
              }}>
              <CardContent sx={{height: '100%'}}>
                <Grid container>
                  <Grid size={1}>
                    <div style={{backgroundColor: card.color, width: '20%', height: '100%', borderRadius: 10}}></div>
                  </Grid>
                  <Grid size={11}>
                    <Typography style={{fontWeight: 400, fontSize: 16}}>{card.title}</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 24}}>{card.count}</Typography>
                  </Grid>
                </Grid>

                <Card variant="outlined" style={{marginTop: 10, padding: 20}}>
                  {card.details.map((detail, idx) => (
                    <Grid container key={idx} alignItems="center" spacing={1} sx={{marginBottom: 1}}>
                      {detail.icon}
                      <Typography sx={{fontWeight: 400, fontSize: 15}}>{detail.title}</Typography>
                      <Typography sx={{fontWeight: 500}}>{detail.count}</Typography>
                    </Grid>
                  ))}
                </Card>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CategoriesSection;
