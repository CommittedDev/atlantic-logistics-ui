'use client'

import { Box, TextField, IconButton, Button } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useState } from "react";

const MultiStopInput = () => {
  const [stops, setStops] = useState([""]); // Initial single stop

  const handleAddStop = () => {
    setStops([...stops, ""]);
  };

  const handleRemoveStop = (index: number) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, value: string) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400 }}>
      {stops.map((stop, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            label={`Stop ${index + 1}`}
            variant="outlined"
            fullWidth
            value={stop}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <IconButton onClick={() => handleRemoveStop(index)} disabled={stops.length === 1}>
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button variant="contained" startIcon={<Add />} onClick={handleAddStop}>
        Add Stop
      </Button>
    </Box>
  );
};

export default MultiStopInput;
