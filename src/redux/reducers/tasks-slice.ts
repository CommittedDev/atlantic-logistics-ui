import {createSlice} from '@reduxjs/toolkit';
import * as taskService from '@/api/services/task-service';
import {AppDispatch} from '../store';
import {setLoading as setCommonLoading} from './common-slice';
import sampleData from '../../_mock_/data.json';

const REDUCER_DOMAIN = 'tasks';

export const taskSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const FetchTasks = () => async (dispatch: AppDispatch) => {
  dispatch(setCommonLoading(true));
  dispatch(setLoading(true));
  try {
    const response = await taskService.getTasks();

    if (response.status === 200 && response.data) {
      dispatch(setLoading(false));
      dispatch(setCommonLoading(false));

      // dispatch(setData(response.data));
      dispatch(setData(sampleData));
    } else throw new Error('Something Went Wrong!');
  } catch (error) {
    console.error(error);
    // dispatch(setError(error));
    dispatch(setLoading(false));
    dispatch(setCommonLoading(false));
  }
};

export const {setData, setLoading, setError} = taskSlice.actions;

export default taskSlice.reducer;
