'use client';

import React, {useState} from 'react';
import {Box, Button, Card, Chip, Divider, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SendIcon from '@mui/icons-material/Send';
import SeeDetailsDialog from './see-details-dialog/SeeDetailsDialog';
import {extractDestinationFromRequest, extractEquipmentTypeFromRequest, extractOriginFromRequest} from '@/helpers/data';

const TaskListItem = ({data}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const customer = data.mcleod.customerDetails;
  const origin = extractOriginFromRequest(data.request);
  const destination = extractDestinationFromRequest(data.request);
  const equipmentType = extractEquipmentTypeFromRequest(data.request);

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
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>{customer?.name || '--'}</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>{customer?.id || '--'}</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Origin</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>{`${origin?.city}, ${origin?.state}`}</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>{origin?.postalCode}</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Destination</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>{`${destination?.city}, ${destination?.state}`}</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>{destination?.postalCode || '--'}</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Equipment Type</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>{equipmentType}</Typography>
                    <Typography style={{fontWeight: 400, fontSize: 16, color: '#808495'}}>.</Typography>
                  </Grid>
                  <Grid>
                    <Typography style={{fontWeight: 400, fontSize: 18, color: '#808495'}}>Elapsed Time</Typography>
                    <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>--</Typography>
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
      <SeeDetailsDialog open={dialogOpen} setDialogOpen={setDialogOpen} data={data} />
    </React.Fragment>
  );
};

export default TaskListItem;
