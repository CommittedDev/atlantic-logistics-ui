'use client';

import React from 'react';
import Grid from '@mui/material/Grid2';
import CategoriesSection from '@/components/your-tasks/categories-section/CategoriesSection';
import TaskListItem from '@/components/your-tasks/task-list-item/TaskListItem';
import {Box, IconButton, InputBase, Paper} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <CategoriesSection />
      </Grid>
      <Grid size={9}>
        <Paper variant="outlined" component="form" sx={{p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '#F3F3F3'}}>
          <IconButton sx={{p: '10px'}} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ml: 1, flex: 1}} placeholder="Search Activity" />
          <IconButton type="button" sx={{p: '10px'}} aria-label="search">
            <TuneIcon />
          </IconButton>
        </Paper>

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            mt: 2,
            p: 1,
            width: '100%',
            maxHeight: '80vh',
          }}>
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;
