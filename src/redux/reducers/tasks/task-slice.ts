import { fetchTasks } from "@/api/tasks/tasks";
import { AppDispatch } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTasksStart(state) {
      state.loading = true;
      state.error = null;
    },
    getTasksSuccess(state, action) {
      state.tasks = action.payload;
      state.loading = false;
    },
    getTasksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getTasksStart, getTasksSuccess, getTasksFailure } =
  taskSlice.actions;

export const getTasks = () => async (dispatch: AppDispatch) => {
  dispatch(getTasksStart());
  try {
    const response = await fetchTasks();

    if (response.status === 200) {
      dispatch(getTasksSuccess(response.data));
    } else {
      throw new Error("Failed to fetch tasks");
    }
  } catch (error) {
    dispatch(getTasksFailure(error));
  }
};

export default taskSlice.reducer;
