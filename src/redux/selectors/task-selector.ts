import {RootState} from '@/redux/store';

export const selectIsLoading = (state: RootState) => state.task.loading;
export const selectTasks = (state: RootState) => state.task.data;
