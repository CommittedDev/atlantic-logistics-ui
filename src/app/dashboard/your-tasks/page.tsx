'use client';

import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import CategoriesSection from '@/components/your-tasks/categories-section/CategoriesSection';
import TaskListItem from '@/components/your-tasks/task-list-item/TaskListItem';
import {Box, IconButton, InputBase, Paper, Skeleton} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@/redux/store';
import {FetchTasks} from '@/redux/reducers/tasks-slice';
import {selectIsLoading, selectTasks} from '@/redux/selectors/task-selector';

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(FetchTasks());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid size={2.2}>
        <CategoriesSection />
      </Grid>
      <Grid size={9.8}>
        <Paper
          variant="outlined"
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F3F3F3',
          }}>
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
          {isLoading ? (
            Array.from({length: 4}).map((_, index) => <Skeleton key={index} variant="rectangular" animation="pulse" height={180} sx={{mb: 2, borderRadius: 1}} />)
          ) : (
            <>
              {tasks &&
                tasks.map((task, index) => {
                  return <TaskListItem key={index} data={task} />;
                })}
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;
