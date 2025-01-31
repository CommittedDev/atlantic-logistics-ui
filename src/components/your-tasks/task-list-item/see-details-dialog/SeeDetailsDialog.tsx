import React from 'react';
import {Chip, Dialog, DialogContent, Grid2 as Grid, Typography, FormControl, InputLabel, Select, MenuItem, Stack, Card, Divider, Button} from '@mui/material';
import OrdersPool from './OrdersPool';
import SupplyDemand from './SupplyDemand';
import Volatility from './Volatility';
import PriceHistory from './PriceHistory';
import SendIcon from '@mui/icons-material/Send';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {extractDestinationFromRequest, extractEquipmentTypeFromRequest, extractHistoricalDataFromDat, extractOriginFromRequest} from '@/helpers/data';

interface SeeDetailsDialogProps {
  open: boolean;
  setDialogOpen: (open: boolean) => void;
  data: object;
}

const SeeDetailsDialog: React.FC<SeeDetailsDialogProps> = ({open, setDialogOpen, data}) => {
  const handleClose = () => setDialogOpen(false);

  const customer = data?.mcleod?.customerDetails;
  const origin = extractOriginFromRequest(data?.request);
  const destination = extractDestinationFromRequest(data?.request);
  const equipmentType = extractEquipmentTypeFromRequest(data?.request);
  const historicalData = extractHistoricalDataFromDat(data?.dat);

  return (
    <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
      <DialogContent dividers={true}>
        <Grid container>
          {/* Left Section */}
          <Grid
            size={3}
            direction="column"
            sx={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <div>
              <Chip
                label="Overtime"
                sx={{
                  backgroundColor: '#FFE1E1',
                  color: '#E7312A',
                  fontWeight: 600,
                  fontSize: 16,
                  marginBottom: '16px',
                }}
              />
              <Typography sx={{fontWeight: 600, fontSize: 18, color: 'black'}}>Order Extracted Info</Typography>
              <Typography sx={{fontWeight: 400, fontSize: 16, marginBottom: 5, color: '#8E8E8E'}}>See Source {'>>'}</Typography>
            </div>

            <div>
              <FormControl fullWidth margin="normal">
                <InputLabel>Customer</InputLabel>
                <Select variant="filled" defaultValue={customer?.id}>
                  <MenuItem value={customer?.id}>{customer?.name}</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Origin</InputLabel>
                <Select variant="filled" defaultValue={`${origin?.city}, ${origin?.state}`}>
                  <MenuItem value={`${origin?.city}, ${origin?.state}`}>{`${origin?.city}, ${origin?.state}`}</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Destination</InputLabel>
                <Select variant="filled" defaultValue={`${destination?.city}, ${destination?.state}`}>
                  <MenuItem value={`${destination?.city}, ${destination?.state}`}>{`${destination?.city}, ${destination?.state}`}</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Equipment Type</InputLabel>
                <Select variant="filled" defaultValue={equipmentType}>
                  <MenuItem value={equipmentType}>{equipmentType}</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <Stack mt={10} direction="row" spacing={2} justifyContent="space-between">
                <Stack>
                  <Typography style={{fontWeight: 400, fontSize: 14, color: '#525252'}}>Total Time</Typography>
                  <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>01:35:20</Typography>
                </Stack>
                <Stack>
                  <Typography style={{fontWeight: 400, fontSize: 14, color: '#525252'}}>Time in Request</Typography>
                  <Typography style={{fontWeight: 500, fontSize: 20, color: '#000000'}}>01:35:20</Typography>
                </Stack>
              </Stack>
            </div>
          </Grid>

          {/* Right Section */}
          <Grid size={9} pl={1}>
            <Stack direction="row" spacing={1}>
              <OrdersPool />
              <SupplyDemand />
              <Volatility />
            </Stack>
            <PriceHistory chartData={historicalData} />

            <Card variant="outlined" style={{marginTop: 10, padding: 10}}>
              <Stack direction="row" spacing={1} justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography style={{fontWeight: 400, fontSize: 14, color: '#525252'}}>Estimated Price</Typography>
                  <Typography style={{fontWeight: 500, fontSize: 24, color: '#000000'}}>$1,125</Typography>

                  <Chip
                    label="Narrow Range"
                    sx={{
                      backgroundColor: '#FFF5E1',
                      color: '#E79E2A',
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  />
                </Stack>

                <div>
                  <Divider orientation="vertical" />
                </div>

                <Button onClick={() => setDialogOpen(false)} variant="contained" style={{backgroundColor: 'black'}} startIcon={<SendIcon />}>
                  Send To Rates
                </Button>
              </Stack>
            </Card>

            <Stack direction="row" mt={1} spacing={1} alignItems="center">
              <ErrorOutlineIcon color="warning" />
              <Typography style={{fontWeight: 400, fontSize: 14, color: '#525252'}}>
                Price Estimation Based on Previous Requests Commidties and destination Properties, Fill the missing fields to get more accurate data
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default SeeDetailsDialog;
