'use client';

import React, {useState} from 'react';
import {Box, Button, Card, Chip, Divider, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SendIcon from '@mui/icons-material/Send';
import SeeDetailsDialog from './see-details-dialog/SeeDetailsDialog';

const TaskListItem = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <Box sx={{m: 2}}>
        <Card variant="outlined" sx={{p: 2}}>
          <Grid container>
            <Grid size={9}>
              <div style={{marginBottom: 2}}>
                <Chip label="New" style={{backgroundColor: '#E1FFE1', color: '#55AB55', fontWeight: 600, fontSize: 16}} />
              </div>
              <div>
                <Grid
                  container
                  direction="row"
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Customer</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>ABC Supply</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>MBA#641</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Origin</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>Tampa, FL</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>33169</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Destination</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>ABC Supply</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>#504</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Commodity</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>Toys</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>.</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Elapsed Time</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>1 Hour</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>See Exact Time</Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid size={1}>
              <Divider orientation="vertical" variant="fullWidth" />
            </Grid>
            <Grid container ml={3} alignItems="center" justifyContent="center">
              <Button onClick={() => setDialogOpen(true)} variant="contained" style={{backgroundColor: 'black'}} startIcon={<SendIcon />}>
                Send Quote
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <SeeDetailsDialog open={dialogOpen} setDialogOpen={setDialogOpen} />
    </React.Fragment>
  );
};

export default TaskListItem;
