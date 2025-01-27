'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
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
        { icon: <SellIcon />, title: 'Quote Requests', count: 10 },
        { icon: <LocalShippingIcon />, title: 'Truck Off Schedule', count: 8 },
        { icon: <ScheduleIcon />, title: 'Late Deliveries', count: 6 },
      ],
    },
    {
      id: 2,
      title: 'High',
      color: '#FFC862',
      count: 7,
      details: [
        { icon: <SellIcon />, title: 'Quote Requests', count: 10 },
        { icon: <LocalShippingIcon />, title: 'Truck Off Schedule', count: 8 },
      ],
    },
    {
      id: 3,
      title: 'Minor',
      color: '#B8D82A',
      count: 2,
      details: [
        { icon: <SellIcon />, title: 'Quote Requests', count: 10 },
        { icon: <LocalShippingIcon />, title: 'Truck Off Schedule', count: 8 },
      ],
    },
  ];

  return (
    <div>
      <Grid container component="div">
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 300, fontSize: 28 }}>Your Tasks</Typography>
          <Stack direction="row" spacing={1}>
            <Typography sx={{ fontWeight: 400, fontSize: 14, color: '#A8A8A8' }}>sort by</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 14 }}>status</Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid container direction="column" spacing={2} sx={{ mt: 3 }} component="div">
        {cards.map((card, index) => (
          <Grid key={card.id} size={12} component="div">
            <Card variant="outlined">
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                  height: '100%',
                  '&[data-active]': {
                    backgroundColor: '#616161', // Active card color
                    color: '#ffffff', // Text color for contrast
                    '&:hover': {
                      backgroundColor: '#424242', // Darker on hover
                    },
                    boxShadow: `0 0 10px rgba(97, 97, 97, 0.5)`, // Shadow effect
                    border: '2px solid #616161',
                    borderRadius: 2,
                  },
                }}
              >
                <CardContent>
                  <Grid container alignItems="center" spacing={2} component="div">
                    <Grid component="div">
                      <Box
                        sx={{
                          backgroundColor: card.color,
                          width: '8px', // Vertical line width
                          height: '50px', // Same height as the text
                          borderRadius: '4px',
                        }}
                      />
                    </Grid>

                    {/* Title and Count */}
                    <Grid component="div">
                      <Typography sx={{ fontWeight: 400, fontSize: 16 }}>{card.title}</Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: 24 }}>{card.count}</Typography>
                    </Grid>
                  </Grid>

                  <Card variant="outlined" sx={{ mt: 2, p: 2 }}>
                    {card.details.map((detail, idx) => (
                      <Grid container key={idx} alignItems="center" spacing={1} sx={{ mb: 1 }} component="div">
                        <Grid component="div">{detail.icon}</Grid>
                        <Grid sx={{ flexGrow: 1 }} component="div">
                          <Typography sx={{ fontWeight: 400, fontSize: 15 }}>{detail.title}</Typography>
                        </Grid>
                        <Grid component="div">
                          <Typography sx={{ fontWeight: 500 }}>{detail.count}</Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Card>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoriesSection;
